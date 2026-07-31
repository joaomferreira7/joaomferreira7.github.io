(function () {
  const WORDS = [
    "lapis", "caneta", "estojo", "bola", "rato", "borracha", "cola", "porta", "chao", "candeeiro",
    "carro", "computador", "informatico", "engenharia", "mochila", "quadro", "televisao", "jogos",
    "redes", "ecra", "teclado", "telemovel", "processador", "recurso", "exame", "frequencia",
    "quarentena", "moeda", "dinheiro", "notas", "folha", "lampada", "joao", "francisco", "trabalho",
    "carregador", "cabos", "sistemas", "digital", "pedra", "terra", "agua", "fogo", "chocolate",
    "video", "aula", "sala", "ferias", "faculdade", "universidade"
  ];

  const SIZE = 13;
  const WORD_COUNT = 10;
  const DIRECTIONS = [
    [0, 1], [0, -1], [1, 0], [-1, 0],
    [1, 1], [1, -1], [-1, 1], [-1, -1]
  ];
  const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const texts = {
    pt: {
      subtitle: "Sopa de letras — encontra as 10 palavras escondidas na grelha. Clica e arrasta sobre as letras para as selecionar (na horizontal, vertical ou diagonal, em qualquer direção).",
      wordsTitle: "Palavras",
      status: (found, total) => `${found} / ${total} encontradas`,
      win: "Parabéns, encontraste todas as palavras! 🎉",
      newGame: "Novo Jogo",
      back: "Voltar aos projetos",
      source: "Versão jogável no browser, inspirada no projeto original em C++ — ",
      sourceLink: "código-fonte no GitHub"
    },
    en: {
      subtitle: "Word search — find the 10 hidden words in the grid. Click and drag over the letters to select them (horizontally, vertically or diagonally, in any direction).",
      wordsTitle: "Words",
      status: (found, total) => `${found} / ${total} found`,
      win: "Congrats, you found every word! 🎉",
      newGame: "New Game",
      back: "Back to projects",
      source: "Browser-playable version, inspired by the original C++ project — ",
      sourceLink: "source code on GitHub"
    }
  };

  function currentLang() {
    const lang = document.documentElement.getAttribute("lang");
    return lang === "en" ? "en" : "pt";
  }

  function applyLsLanguage() {
    const t = texts[currentLang()];
    document.getElementById("lsSubtitle").textContent = t.subtitle;
    document.getElementById("lsWordsTitle").textContent = t.wordsTitle;
    document.getElementById("lsBackText").textContent = t.back;
    document.getElementById("lsNewGame").textContent = t.newGame;
    const sourceNote = document.getElementById("lsSourceNote");
    sourceNote.innerHTML = t.source + '<a href="https://github.com/joaomferreira7/LetterSoup" target="_blank" rel="noopener">' + t.sourceLink + "</a>";
    updateStatus();
  }

  let grid, placedWords, foundWords, cellEls;

  function emptyGrid() {
    return Array.from({ length: SIZE }, () => Array(SIZE).fill(null));
  }

  function pickWords() {
    const pool = [...WORDS];
    const picked = [];
    while (picked.length < WORD_COUNT && pool.length) {
      const i = Math.floor(Math.random() * pool.length);
      picked.push(pool.splice(i, 1)[0]);
    }
    return picked.sort((a, b) => b.length - a.length);
  }

  function tryPlace(word, g) {
    const upper = word.toUpperCase();
    for (let attempt = 0; attempt < 200; attempt++) {
      const [dr, dc] = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
      const minRow = dr === -1 ? upper.length - 1 : 0;
      const maxRow = dr === 1 ? SIZE - upper.length : SIZE - 1;
      const minCol = dc === -1 ? upper.length - 1 : 0;
      const maxCol = dc === 1 ? SIZE - upper.length : SIZE - 1;
      if (maxRow < minRow || maxCol < minCol) continue;
      const row = minRow + Math.floor(Math.random() * (maxRow - minRow + 1));
      const col = minCol + Math.floor(Math.random() * (maxCol - minCol + 1));

      let ok = true;
      for (let i = 0; i < upper.length; i++) {
        const r = row + dr * i;
        const c = col + dc * i;
        if (g[r][c] !== null && g[r][c] !== upper[i]) { ok = false; break; }
      }
      if (!ok) continue;

      const cells = [];
      for (let i = 0; i < upper.length; i++) {
        const r = row + dr * i;
        const c = col + dc * i;
        g[r][c] = upper[i];
        cells.push([r, c]);
      }
      return cells;
    }
    return null;
  }

  function buildPuzzle() {
    for (let tries = 0; tries < 30; tries++) {
      const g = emptyGrid();
      const words = pickWords();
      const placed = [];
      let success = true;
      for (const w of words) {
        const cells = tryPlace(w, g);
        if (!cells) { success = false; break; }
        placed.push({ word: w.toUpperCase(), cells, found: false });
      }
      if (success) {
        for (let r = 0; r < SIZE; r++) {
          for (let c = 0; c < SIZE; c++) {
            if (g[r][c] === null) g[r][c] = ALPHA[Math.floor(Math.random() * ALPHA.length)];
          }
        }
        return { grid: g, placed };
      }
    }
    throw new Error("Could not generate puzzle");
  }

  function renderGrid() {
    const gridEl = document.getElementById("lsGrid");
    gridEl.innerHTML = "";
    gridEl.style.gridTemplateColumns = `repeat(${SIZE}, 1fr)`;
    cellEls = [];
    for (let r = 0; r < SIZE; r++) {
      const row = [];
      for (let c = 0; c < SIZE; c++) {
        const cell = document.createElement("div");
        cell.className = "ls-cell";
        cell.textContent = grid[r][c];
        cell.dataset.row = r;
        cell.dataset.col = c;
        gridEl.appendChild(cell);
        row.push(cell);
      }
      cellEls.push(row);
    }
  }

  function renderWordList() {
    const list = document.getElementById("lsWordList");
    list.innerHTML = "";
    placedWords.forEach((pw) => {
      const li = document.createElement("li");
      li.textContent = pw.word;
      if (pw.found) li.classList.add("found");
      list.appendChild(li);
    });
  }

  function updateStatus() {
    const t = texts[currentLang()];
    const found = placedWords.filter((p) => p.found).length;
    const statusEl = document.getElementById("lsStatus");
    if (found === placedWords.length) {
      statusEl.textContent = t.win;
    } else {
      statusEl.textContent = t.status(found, placedWords.length);
    }
  }

  let dragging = false;
  let startCell = null;
  let selectedCells = [];

  function clearSelection() {
    selectedCells.forEach(([r, c]) => cellEls[r][c].classList.remove("selected"));
    selectedCells = [];
  }

  function cellFromPoint(x, y) {
    const el = document.elementsFromPoint(x, y).find((e) => e.classList && e.classList.contains("ls-cell"));
    if (!el) return null;
    return [parseInt(el.dataset.row, 10), parseInt(el.dataset.col, 10)];
  }

  function computeLine(start, end) {
    const [r0, c0] = start;
    const [r1, c1] = end;
    const dr = r1 - r0;
    const dc = c1 - c0;
    if (dr === 0 && dc === 0) return [start];
    const sameRow = dr === 0;
    const sameCol = dc === 0;
    const sameDiag = Math.abs(dr) === Math.abs(dc);
    if (!sameRow && !sameCol && !sameDiag) return null;
    const steps = Math.max(Math.abs(dr), Math.abs(dc));
    const stepR = dr === 0 ? 0 : dr / Math.abs(dr);
    const stepC = dc === 0 ? 0 : dc / Math.abs(dc);
    const line = [];
    for (let i = 0; i <= steps; i++) line.push([r0 + stepR * i, c0 + stepC * i]);
    return line;
  }

  function checkMatch(cells) {
    const forward = cells.map(([r, c]) => grid[r][c]).join("");
    const backward = forward.split("").reverse().join("");
    return placedWords.find((pw) => !pw.found && (pw.word === forward || pw.word === backward) && pw.cells.length === cells.length);
  }

  function handleDown(e) {
    const point = cellFromPoint(e.clientX, e.clientY);
    if (!point) return;
    dragging = true;
    startCell = point;
    clearSelection();
  }

  function handleMove(e) {
    if (!dragging) return;
    const point = cellFromPoint(e.clientX, e.clientY);
    if (!point) return;
    const line = computeLine(startCell, point);
    if (!line) return;
    clearSelection();
    selectedCells = line;
    line.forEach(([r, c]) => cellEls[r][c].classList.add("selected"));
  }

  function handleUp() {
    if (!dragging) return;
    dragging = false;
    const match = checkMatch(selectedCells);
    if (match) {
      match.found = true;
      match.cells.forEach(([r, c]) => cellEls[r][c].classList.add("found"));
      renderWordList();
      updateStatus();
    }
    clearSelection();
  }

  function newGame() {
    const puzzle = buildPuzzle();
    grid = puzzle.grid;
    placedWords = puzzle.placed;
    foundWords = 0;
    renderGrid();
    renderWordList();
    updateStatus();
  }

  document.addEventListener("DOMContentLoaded", () => {
    newGame();
    applyLsLanguage();

    const gridEl = document.getElementById("lsGrid");
    gridEl.addEventListener("pointerdown", handleDown);
    document.addEventListener("pointermove", handleMove);
    document.addEventListener("pointerup", handleUp);

    document.getElementById("lsNewGame").addEventListener("click", newGame);

    const langToggle = document.getElementById("langToggle");
    if (langToggle) langToggle.addEventListener("click", () => setTimeout(applyLsLanguage, 0));
  });
})();
