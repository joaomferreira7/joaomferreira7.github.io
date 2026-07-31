(function () {
  const COLORS = ["red", "yellow", "green", "blue", "purple"];
  const COLOR_CODE = { red: "R", yellow: "Y", green: "G", blue: "B", purple: "P" };
  const COUNTS = [
    { num: 1, count: 3 },
    { num: 2, count: 2 },
    { num: 3, count: 2 },
    { num: 4, count: 2 },
    { num: 5, count: 1 }
  ];
  const HAND_SIZE = 5;
  const MAX_CLUES = 8;
  const MAX_LIVES = 3;

  const texts = {
    pt: {
      subtitle: "Joga Hanabi contra o bot. Vês as cartas do bot mas não as tuas — dão-se pistas um ao outro para completar as 5 pilhas de cor por ordem, de 1 a 5.",
      clues: "pistas", lives: "vidas", score: "/ 25 pontos", deck: "no baralho",
      stacksLabel: "Pilhas na mesa", botLabel: "Mão do bot", youLabel: "A tua mão",
      legendBot: "C = pista de cor já dada · N = pista de número já dada",
      legendYou: 'R/Y/G/B/P = cor já revelada (Vermelho/Amarelo/Verde/Azul/Roxo) · número = valor já revelado · "?" = ainda não sabes essa informação',
      actionsTitle: "Ações", logTitle: "Registo",
      clueBtn: "Dar pista", discardBtn: "Descartar", playBtn: "Jogar carta", newGame: "Novo Jogo",
      back: "Voltar aos projetos",
      source: "Versão jogável no browser, inspirada no projeto original em C — ",
      sourceLink: "código-fonte no GitHub",
      hintChooseAction: "Escolhe uma ação para começar.",
      hintPickCardDiscard: "Clica numa das tuas cartas para descartar.",
      hintPickCardPlay: "Clica numa das tuas cartas para jogar.",
      hintPickClue: "Escolhe uma cor ou número para dar pista ao bot.",
      hintBotTurn: "Turno do bot...",
      hintNoClues: "Sem pistas disponíveis.",
      hintMaxClues: "Pistas ao máximo — não podes descartar.",
      colorName: { red: "Vermelho", yellow: "Amarelo", green: "Verde", blue: "Azul", purple: "Roxo" },
      logClueYou: (color) => `Deste uma pista sobre ${color} ao bot.`,
      logClueBot: (color) => `O bot deu-te uma pista sobre ${color}.`,
      logPlaySuccessYou: (color, num) => `Jogaste ${color} ${num} com sucesso!`,
      logPlaySuccessBot: (color, num) => `O bot jogou ${color} ${num} com sucesso!`,
      logPlayFailYou: (color, num) => `Jogaste ${color} ${num} — errado, perdeste uma vida.`,
      logPlayFailBot: (color, num) => `O bot jogou ${color} ${num} — errado, perdeu uma vida.`,
      logDiscardYou: (color, num) => `Descartaste ${color} ${num}.`,
      logDiscardBot: (color, num) => `O bot descartou ${color} ${num}.`,
      colorClue: (n) => `número ${n}`,
      winMsg: (score) => `Vitória! Completaram todas as pilhas com ${score} / 25 pontos. 🎉`,
      loseMsg: (score) => `Fim de jogo — sem vidas. Pontuação final: ${score} / 25.`,
      deckOutMsg: (score) => `Fim de jogo — baralho esgotado. Pontuação final: ${score} / 25.`
    },
    en: {
      subtitle: "Play Hanabi against the bot. You can see the bot's cards but not your own — give each other clues to complete the 5 color stacks in order, from 1 to 5.",
      clues: "clues", lives: "lives", score: "/ 25 points", deck: "in deck",
      stacksLabel: "Stacks on the table", botLabel: "Bot's hand", youLabel: "Your hand",
      legendBot: "C = color clue already given · N = number clue already given",
      legendYou: 'R/Y/G/B/P = color already revealed (Red/Yellow/Green/Blue/Purple) · number = value already revealed · "?" = you don\'t know that yet',
      actionsTitle: "Actions", logTitle: "Log",
      clueBtn: "Give clue", discardBtn: "Discard", playBtn: "Play card", newGame: "New Game",
      back: "Back to projects",
      source: "Browser-playable version, inspired by the original C project — ",
      sourceLink: "source code on GitHub",
      hintChooseAction: "Choose an action to begin.",
      hintPickCardDiscard: "Click one of your cards to discard it.",
      hintPickCardPlay: "Click one of your cards to play it.",
      hintPickClue: "Choose a color or number to clue the bot.",
      hintBotTurn: "Bot's turn...",
      hintNoClues: "No clue tokens available.",
      hintMaxClues: "Clues at max — you can't discard.",
      colorName: { red: "Red", yellow: "Yellow", green: "Green", blue: "Blue", purple: "Purple" },
      logClueYou: (color) => `You gave the bot a clue about ${color}.`,
      logClueBot: (color) => `The bot gave you a clue about ${color}.`,
      logPlaySuccessYou: (color, num) => `You played ${color} ${num} successfully!`,
      logPlaySuccessBot: (color, num) => `The bot played ${color} ${num} successfully!`,
      logPlayFailYou: (color, num) => `You played ${color} ${num} — wrong, you lost a life.`,
      logPlayFailBot: (color, num) => `The bot played ${color} ${num} — wrong, it lost a life.`,
      logDiscardYou: (color, num) => `You discarded ${color} ${num}.`,
      logDiscardBot: (color, num) => `The bot discarded ${color} ${num}.`,
      colorClue: (n) => `number ${n}`,
      winMsg: (score) => `Victory! You completed every stack with ${score} / 25 points. 🎉`,
      loseMsg: (score) => `Game over — out of lives. Final score: ${score} / 25.`,
      deckOutMsg: (score) => `Game over — deck exhausted. Final score: ${score} / 25.`
    }
  };

  function currentLang() {
    const lang = document.documentElement.getAttribute("lang");
    return lang === "en" ? "en" : "pt";
  }
  function t() { return texts[currentLang()]; }
  function colorName(c) { return t().colorName[c]; }

  let state;

  function buildDeck() {
    const deck = [];
    COLORS.forEach((color) => {
      COUNTS.forEach(({ num, count }) => {
        for (let i = 0; i < count; i++) deck.push({ color, num });
      });
    });
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }

  function draw(deck) {
    const card = deck.shift();
    if (!card) return null;
    return { color: card.color, num: card.num, clueColor: null, clueNumber: null };
  }

  function newGameState() {
    const deck = buildDeck();
    const youHand = [];
    const botHand = [];
    for (let i = 0; i < HAND_SIZE; i++) youHand.push(draw(deck));
    for (let i = 0; i < HAND_SIZE; i++) botHand.push(draw(deck));
    return {
      deck, youHand, botHand,
      stacks: { red: 0, yellow: 0, green: 0, blue: 0, purple: 0 },
      discard: [],
      clues: MAX_CLUES,
      lives: MAX_LIVES,
      turn: "you",
      pendingAction: null,
      cluePickerOpen: false,
      finalTurnsLeft: null,
      over: false,
      log: []
    };
  }

  function addLog(msg) {
    state.log.unshift(msg);
    if (state.log.length > 30) state.log.pop();
  }

  function stackNeeds(hand, color) { return state.stacks[color] + 1; }

  function isPlayable(card) { return card.num === state.stacks[card.color] + 1; }

  function replaceCard(hand, idx) {
    hand.splice(idx, 1);
    const card = draw(state.deck);
    if (card) hand.push(card);
    if (state.deck.length === 0 && state.finalTurnsLeft === null) {
      state.finalTurnsLeft = 2;
    }
  }

  function doPlay(who, idx) {
    const hand = who === "you" ? state.youHand : state.botHand;
    const card = hand[idx];
    if (!card) return;
    const success = isPlayable(card);
    if (success) {
      state.stacks[card.color] = card.num;
      if (card.num === 5 && state.clues < MAX_CLUES) state.clues++;
      addLog(who === "you" ? t().logPlaySuccessYou(colorName(card.color), card.num) : t().logPlaySuccessBot(colorName(card.color), card.num));
    } else {
      state.lives--;
      state.discard.push(card);
      addLog(who === "you" ? t().logPlayFailYou(colorName(card.color), card.num) : t().logPlayFailBot(colorName(card.color), card.num));
    }
    replaceCard(hand, idx);
    checkGameOver();
  }

  function doDiscard(who, idx) {
    const hand = who === "you" ? state.youHand : state.botHand;
    const card = hand[idx];
    if (!card || state.clues >= MAX_CLUES) return;
    state.discard.push(card);
    state.clues = Math.min(MAX_CLUES, state.clues + 1);
    addLog(who === "you" ? t().logDiscardYou(colorName(card.color), card.num) : t().logDiscardBot(colorName(card.color), card.num));
    replaceCard(hand, idx);
    checkGameOver();
  }

  function doClue(from, type, value) {
    if (state.clues <= 0) return;
    const targetHand = from === "you" ? state.botHand : state.youHand;
    targetHand.forEach((card) => {
      if (type === "color" && card.color === value) card.clueColor = value;
      if (type === "number" && card.num === value) card.clueNumber = value;
    });
    state.clues--;
    const desc = type === "color" ? colorName(value) : t().colorClue(value);
    addLog(from === "you" ? t().logClueYou(desc) : t().logClueBot(desc));
  }

  function totalScore() {
    return Object.values(state.stacks).reduce((a, b) => a + b, 0);
  }

  function checkGameOver() {
    if (state.over) return;
    const score = totalScore();
    if (score === 25) {
      state.over = true;
      showMessage(t().winMsg(score));
      return;
    }
    if (state.lives <= 0) {
      state.over = true;
      showMessage(t().loseMsg(score));
      return;
    }
    if (state.finalTurnsLeft !== null) {
      state.finalTurnsLeft--;
      if (state.finalTurnsLeft < 0) {
        state.over = true;
        showMessage(t().deckOutMsg(score));
      }
    }
  }

  function showMessage(msg) {
    const el = document.getElementById("hnMessage");
    el.textContent = msg;
    el.style.display = "block";
  }
  function hideMessage() {
    const el = document.getElementById("hnMessage");
    el.style.display = "none";
  }

  // ---------- Bot AI ----------
  function botTurn() {
    if (state.over) return;

    let playIdx = state.botHand.findIndex((c) => isPlayable(c));
    if (playIdx !== -1) {
      doPlay("bot", playIdx);
      afterBotAction();
      return;
    }

    if (state.clues > 0) {
      let helpIdx = state.youHand.findIndex((c) => isPlayable(c) && (c.clueColor === null || c.clueNumber === null));
      if (helpIdx !== -1) {
        const card = state.youHand[helpIdx];
        const colorMatches = state.youHand.filter((c) => c.color === card.color).length;
        const numberMatches = state.youHand.filter((c) => c.num === card.num).length;
        if (card.clueColor === null && (colorMatches <= numberMatches || card.clueNumber !== null)) {
          doClue("bot", "color", card.color);
        } else {
          doClue("bot", "number", card.num);
        }
        afterBotAction();
        return;
      }
    }

    if (state.clues < MAX_CLUES) {
      let discardIdx = state.botHand.findIndex((c) => c.clueColor === null && c.clueNumber === null);
      if (discardIdx === -1) discardIdx = 0;
      doDiscard("bot", discardIdx);
      afterBotAction();
      return;
    }

    if (state.clues > 0) {
      const card = state.youHand[0];
      doClue("bot", "color", card.color);
      afterBotAction();
      return;
    }

    doDiscard("bot", 0);
    afterBotAction();
  }

  function afterBotAction() {
    render();
    if (state.over) return;
    state.turn = "you";
    state.pendingAction = null;
    render();
  }

  // ---------- Rendering ----------
  function renderTokens() {
    document.getElementById("hnClues").textContent = state.clues;
    document.getElementById("hnLives").textContent = state.lives;
    document.getElementById("hnScore").textContent = totalScore();
    document.getElementById("hnDeck").textContent = state.deck.length;
  }

  function renderStacks() {
    const wrap = document.getElementById("hnStacks");
    wrap.innerHTML = "";
    COLORS.forEach((color) => {
      const div = document.createElement("div");
      div.className = "hn-stack";
      div.style.borderColor = cardColorHex(color);
      div.textContent = state.stacks[color] || "–";
      div.style.color = state.stacks[color] ? cardColorHex(color) : "";
      wrap.appendChild(div);
    });
  }

  function cardColorHex(color) {
    return { red: "#ef4444", yellow: "#d69e00", green: "#22c55e", blue: "#3b82f6", purple: "#a855f7" }[color];
  }

  function renderBotHand() {
    const wrap = document.getElementById("hnBotHand");
    wrap.innerHTML = "";
    state.botHand.forEach((card) => {
      const div = document.createElement("div");
      div.className = `hn-card color-${card.color}`;
      const marks = [card.clueColor !== null ? "C" : "", card.clueNumber !== null ? "N" : ""].filter(Boolean).join(" ");
      div.innerHTML = `<div>${card.num}</div>${marks ? `<div class="hn-clue">${marks}</div>` : ""}`;
      wrap.appendChild(div);
    });
  }

  function renderYouHand() {
    const wrap = document.getElementById("hnYouHand");
    wrap.innerHTML = "";
    state.youHand.forEach((card, idx) => {
      const div = document.createElement("div");
      div.className = "hn-card hidden-card";
      div.dataset.idx = idx;
      const colorTxt = card.clueColor ? COLOR_CODE[card.clueColor] : "?";
      const numTxt = card.clueNumber ? card.clueNumber : "?";
      div.innerHTML = `<div class="hn-clue">${colorTxt}</div><div>${numTxt}</div>`;
      div.addEventListener("click", () => handleCardClick(idx));
      wrap.appendChild(div);
    });
  }

  function renderCluePicker() {
    const target = document.getElementById("hnClueTarget");
    target.innerHTML = "";
    if (!state.cluePickerOpen) return;
    const panel = document.createElement("div");
    panel.className = "hn-clue-picker";
    const colorsPresent = [...new Set(state.botHand.map((c) => c.color))];
    const numbersPresent = [...new Set(state.botHand.map((c) => c.num))].sort();
    colorsPresent.forEach((color) => {
      const btn = document.createElement("button");
      btn.textContent = colorName(color);
      btn.style.borderColor = cardColorHex(color);
      btn.addEventListener("click", () => {
        doClue("you", "color", color);
        state.cluePickerOpen = false;
        state.pendingAction = null;
        endPlayerTurn();
      });
      panel.appendChild(btn);
    });
    numbersPresent.forEach((num) => {
      const btn = document.createElement("button");
      btn.textContent = num;
      btn.addEventListener("click", () => {
        doClue("you", "number", num);
        state.cluePickerOpen = false;
        state.pendingAction = null;
        endPlayerTurn();
      });
      panel.appendChild(btn);
    });
    target.appendChild(panel);
  }

  function renderLog() {
    const wrap = document.getElementById("hnLog");
    wrap.innerHTML = "";
    state.log.forEach((line) => {
      const p = document.createElement("div");
      p.textContent = line;
      wrap.appendChild(p);
    });
  }

  function renderHint() {
    const hint = document.getElementById("hnHint");
    if (state.over) { hint.textContent = ""; return; }
    if (state.turn !== "you") { hint.textContent = t().hintBotTurn; return; }
    if (state.pendingAction === "discard") hint.textContent = t().hintPickCardDiscard;
    else if (state.pendingAction === "play") hint.textContent = t().hintPickCardPlay;
    else if (state.pendingAction === "clue") hint.textContent = t().hintPickClue;
    else hint.textContent = t().hintChooseAction;
  }

  function renderButtons() {
    const disabled = state.turn !== "you" || state.over;
    document.getElementById("hnClueBtn").disabled = disabled || state.clues <= 0;
    document.getElementById("hnDiscardBtn").disabled = disabled || state.clues >= MAX_CLUES;
    document.getElementById("hnPlayBtn").disabled = disabled;
  }

  function render() {
    renderTokens();
    renderStacks();
    renderBotHand();
    renderYouHand();
    renderCluePicker();
    renderLog();
    renderHint();
    renderButtons();
    if (!state.over) hideMessage();
  }

  function handleCardClick(idx) {
    if (state.turn !== "you" || state.over) return;
    if (state.pendingAction === "play") {
      doPlay("you", idx);
      state.pendingAction = null;
      endPlayerTurn();
    } else if (state.pendingAction === "discard") {
      if (state.clues >= MAX_CLUES) return;
      doDiscard("you", idx);
      state.pendingAction = null;
      endPlayerTurn();
    }
  }

  function endPlayerTurn() {
    render();
    if (state.over) return;
    state.turn = "bot";
    render();
    setTimeout(botTurn, 700);
  }

  function applyStaticLanguage() {
    const tt = t();
    document.getElementById("hnSubtitle").textContent = tt.subtitle;
    document.getElementById("hnBackText").textContent = tt.back;
    document.getElementById("hnStacksLabel").textContent = tt.stacksLabel;
    document.getElementById("hnBotLabel").textContent = tt.botLabel;
    document.getElementById("hnYouLabel").textContent = tt.youLabel;
    document.getElementById("hnLegendBot").textContent = tt.legendBot;
    document.getElementById("hnLegendYou").textContent = tt.legendYou;
    document.getElementById("hnActionsTitle").textContent = tt.actionsTitle;
    document.getElementById("hnLogTitle").textContent = tt.logTitle;
    document.getElementById("hnClueBtn").textContent = tt.clueBtn;
    document.getElementById("hnDiscardBtn").textContent = tt.discardBtn;
    document.getElementById("hnPlayBtn").textContent = tt.playBtn;
    document.getElementById("hnNewGame").textContent = tt.newGame;
    document.getElementById("hnClueLabel").innerHTML = `<strong id="hnClues">${state.clues}</strong> ${tt.clues}`;
    document.getElementById("hnLifeLabel").innerHTML = `<strong id="hnLives">${state.lives}</strong> ${tt.lives}`;
    document.getElementById("hnScoreLabel").innerHTML = `<strong id="hnScore">${totalScore()}</strong> ${tt.score}`;
    document.getElementById("hnDeckLabel").innerHTML = `<strong id="hnDeck">${state.deck.length}</strong> ${tt.deck}`;
    const sourceNote = document.getElementById("hnSourceNote");
    sourceNote.innerHTML = tt.source + '<a href="https://github.com/joaomferreira7/Hanabi" target="_blank" rel="noopener">' + tt.sourceLink + "</a>";
    renderHint();
  }

  function startNewGame() {
    state = newGameState();
    render();
    applyStaticLanguage();
  }

  document.addEventListener("DOMContentLoaded", () => {
    startNewGame();

    document.getElementById("hnClueBtn").addEventListener("click", () => {
      if (state.turn !== "you" || state.over || state.clues <= 0) return;
      state.pendingAction = state.pendingAction === "clue" ? null : "clue";
      state.cluePickerOpen = state.pendingAction === "clue";
      render();
    });
    document.getElementById("hnDiscardBtn").addEventListener("click", () => {
      if (state.turn !== "you" || state.over || state.clues >= MAX_CLUES) return;
      state.pendingAction = state.pendingAction === "discard" ? null : "discard";
      state.cluePickerOpen = false;
      render();
    });
    document.getElementById("hnPlayBtn").addEventListener("click", () => {
      if (state.turn !== "you" || state.over) return;
      state.pendingAction = state.pendingAction === "play" ? null : "play";
      state.cluePickerOpen = false;
      render();
    });
    document.getElementById("hnNewGame").addEventListener("click", startNewGame);

    const langToggle = document.getElementById("langToggle");
    if (langToggle) langToggle.addEventListener("click", () => setTimeout(applyStaticLanguage, 0));
  });
})();
