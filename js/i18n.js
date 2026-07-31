(function () {
  const translations = {
    pt: {
      meta: {
        title: "João Ferreira — Engenheiro de Software",
        description: "João Ferreira, Engenheiro de Software. Experiência em PL/SQL, Java, Spring Boot, Oracle Retail. Portfólio, currículo e contactos."
      },
      nav: {
        about: "Sobre",
        experience: "Experiência",
        projects: "Projetos",
        education: "Formação",
        blog: "Blog",
        contact: "Contacto",
        toggleAria: "Abrir menu"
      },
      theme: { toggleAria: "Alternar tema claro/escuro" },
      lang: { toggleAria: "Mudar idioma" },
      hero: {
        eyebrow: "Olá, chamo-me",
        summary: "Analista de Sistemas focado em projetos de integração Oracle Retail, com mais de 2 anos de experiência a desenvolver soluções em Java e PL/SQL para clientes internacionais de retalho. Apaixonado por transformar problemas complexos em soluções fiáveis e escaláveis.",
        contactBtn: "Contactar",
        downloadBtn: "Descarregar CV",
        photoAlt: "Foto de João Ferreira"
      },
      about: {
        title: "Sobre mim",
        p1: "Trabalho como Analista de Sistemas na Retail Consult, onde desenvolvo e mantenho soluções de integração dentro do ecossistema Oracle Retail — desde adaptadores Java que ligam sistemas e plataformas externas, até scripts PL/SQL que suportam migrações de dados e atualizações de versão.",
        p2: "No dia a dia, colaboro diretamente com clientes internacionais para levantar requisitos e desenhar soluções à medida, e presto suporte de produção de ponta a ponta — da análise de causa raiz até à implementação de correções sustentáveis a longo prazo.",
        p3: "Sou motivado pela aprendizagem contínua — reforçada por formações complementares em autogestão e orientação para resultados — e gosto de comunicar de forma clara com equipas multidisciplinares. Estou sempre aberto a novos desafios que aliem crescimento técnico e profissional.",
        skillsTitle: "Competências",
        langsTitle: "Idiomas",
        lang: { pt: "Português", ptLevel: "Nativo", en: "Inglês", enLevel: "Conversação" }
      },
      experience: {
        title: "Experiência",
        role: "Analista de Sistemas",
        date: "Nov 2023 – Presente · Leça do Balio, Portugal",
        intro: "Analista de Sistemas com mais de 2 anos de experiência em projetos de integração Oracle Retail, desenvolvendo soluções em Java e PL/SQL para suportar integração de dados, migração e suporte em produção para clientes internacionais de retalho.",
        bullet1: "Desenvolvimento de adaptadores de integração personalizados em Java, extraindo e transformando dados para ligação com sistemas e plataformas externas em diferentes projetos de clientes internacionais de retalho.",
        bullet2: "Construção e manutenção de componentes de integração baseados em ficheiros, garantindo troca de dados fiável e bidirecional entre sistemas.",
        bullet3: "Desenho e implementação de soluções robustas em PL/SQL no ecossistema Oracle Retail, incluindo suporte a atualizações de versão major e projetos de migração para a cloud.",
        bullet4: "Desenvolvimento e otimização de procedimentos, funções, packages e scripts PL/SQL de alta performance, melhorando a eficiência, escalabilidade e manutenibilidade dos sistemas.",
        bullet5: "Colaboração próxima com clientes e stakeholders para levantamento de requisitos, tradução de necessidades de negócio em especificações técnicas e desenho de soluções escaláveis.",
        bullet6: "Suporte de produção de ponta a ponta, com resolução proativa de incidentes, análise de causa raiz e implementação de correções sustentáveis a longo prazo."
      },
      projects: {
        title: "Projetos",
        hanabi: { meta: "Jan 2019 – Dez 2020", desc: "Projeto de desenvolvimento de software iniciado em contexto universitário." },
        lettersoup: { meta: "Mar 2020 – Abr 2020", desc: "Projeto de desenvolvimento de software iniciado em contexto universitário." },
        playBtn: "Jogar →",
        viewGithub: "Ver no GitHub →",
        note: 'Descrições e links serão atualizados brevemente. Vê todos os projetos em <a href="https://github.com/joaomferreira7" target="_blank" rel="noopener">github.com/joaomferreira7</a>.'
      },
      education: {
        title: "Formação",
        training: {
          title: "Formação Complementar",
          bullet1: "Self-Management Skills",
          bullet2: "Results Orientation"
        },
        degree: {
          title: "Licenciatura em Engenharia Informática",
          meta: "Set 2019 – Jun 2023 · Vila Real, Portugal",
          bullet1: "Secretário do departamento de desporto no Núcleo de Estudantes de Engenharia Informática – UTAD (2021–2022).",
          bullet2: "Colaborador na Associação Académica da Universidade de Trás-os-Montes e Alto Douro."
        },
        highschool: {
          title: "Ensino Secundário",
          meta: "Set 2016 – Jun 2019 · Penafiel, Porto, Portugal"
        }
      },
      contact: {
        title: "Contacto",
        emailLabel: "Email",
        phoneLabel: "Telefone",
        linkedinLabel: "LinkedIn",
        githubLabel: "GitHub"
      },
      footer: { text: "Feito com HTML, CSS e JS puro." },
      blog: {
        title: "Blog",
        empty: "Ainda não há artigos publicados. Volta em breve!",
        back: "← Voltar ao blog"
      }
    },
    en: {
      meta: {
        title: "João Ferreira — Software Engineer",
        description: "João Ferreira, Software Engineer. Experience in PL/SQL, Java, Spring Boot, Oracle Retail. Portfolio, resume and contacts."
      },
      nav: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
        education: "Education",
        blog: "Blog",
        contact: "Contact",
        toggleAria: "Open menu"
      },
      theme: { toggleAria: "Toggle light/dark theme" },
      lang: { toggleAria: "Switch language" },
      hero: {
        eyebrow: "Hi, I'm",
        summary: "Systems Analyst focused on Oracle Retail integration projects, with 2+ years of experience developing Java and PL/SQL solutions for international retail clients. Passionate about turning complex problems into reliable, scalable solutions.",
        contactBtn: "Contact",
        downloadBtn: "Download CV",
        photoAlt: "Photo of João Ferreira"
      },
      about: {
        title: "About me",
        p1: "I work as a Systems Analyst at Retail Consult, where I develop and maintain integration solutions within the Oracle Retail ecosystem — from Java adapters connecting external systems and platforms to PL/SQL scripts supporting data migrations and version upgrades.",
        p2: "Day to day, I collaborate directly with international clients to gather requirements and design tailored solutions, and provide end-to-end production support — from root cause analysis to implementing long-term, sustainable fixes.",
        p3: "I'm driven by continuous learning — reinforced by complementary training in self-management and results orientation — and enjoy communicating clearly with cross-functional teams. Always open to new challenges that combine technical and professional growth.",
        skillsTitle: "Skills",
        langsTitle: "Languages",
        lang: { pt: "Portuguese", ptLevel: "Native", en: "English", enLevel: "Conversational" }
      },
      experience: {
        title: "Experience",
        role: "System Analyst",
        date: "Nov 2023 – Present · Leça do Balio, Portugal",
        intro: "Systems Analyst with 2+ years of experience in Oracle Retail integration projects, developing Java and PL/SQL solutions to support data integration, migration, and production support for international retail clients.",
        bullet1: "Developed custom Java-based integration adapters, extracting and transforming data to connect with external systems and platforms across multiple international retail client projects.",
        bullet2: "Built and maintained file-based integration components, ensuring reliable, two-way data exchange between systems.",
        bullet3: "Designed and implemented robust PL/SQL solutions within the Oracle Retail ecosystem, including support for major version upgrades and cloud migration projects.",
        bullet4: "Developed and optimized high-performance PL/SQL procedures, functions, packages, and scripts, improving system efficiency, scalability, and maintainability.",
        bullet5: "Collaborated closely with clients and stakeholders to gather requirements, translate business needs into technical specifications, and design scalable solutions.",
        bullet6: "Provided end-to-end production support, proactively troubleshooting incidents, performing root cause analysis, and delivering long-term, sustainable fixes."
      },
      projects: {
        title: "Projects",
        hanabi: { desc: "Software development project started in a university context." },
        lettersoup: { desc: "Software development project started in a university context." },
        playBtn: "Play →",
        viewGithub: "View on GitHub →",
        note: 'Descriptions and links will be updated soon. See all projects at <a href="https://github.com/joaomferreira7" target="_blank" rel="noopener">github.com/joaomferreira7</a>.'
      },
      education: {
        title: "Education",
        training: {
          title: "Professional Training",
          bullet1: "Self-Management Skills",
          bullet2: "Results Orientation"
        },
        degree: {
          title: "Bachelor's Degree in Computer Science and Engineering",
          meta: "Sep 2019 – Jun 2023 · Vila Real, Portugal",
          bullet1: "Secretary of the sports department at Núcleo de Estudantes de Engenharia Informática – UTAD (2021–2022).",
          bullet2: "Collaborator at Associação Académica da Universidade de Trás-os-Montes e Alto Douro."
        },
        highschool: {
          title: "High School",
          meta: "Sep 2016 – Jun 2019 · Penafiel, Porto, Portugal"
        }
      },
      contact: {
        title: "Contact",
        emailLabel: "Email",
        phoneLabel: "Phone",
        linkedinLabel: "LinkedIn",
        githubLabel: "GitHub"
      },
      footer: { text: "Built with plain HTML, CSS and JS." },
      blog: {
        title: "Blog",
        empty: "No articles published yet. Check back soon!",
        back: "← Back to blog"
      }
    }
  };

  function getNested(obj, path) {
    return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
  }

  function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const val = getNested(dict, el.getAttribute("data-i18n"));
      if (val !== undefined) el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const val = getNested(dict, el.getAttribute("data-i18n-html"));
      if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const val = getNested(dict, el.getAttribute("data-i18n-aria"));
      if (val !== undefined) el.setAttribute("aria-label", val);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const val = getNested(dict, el.getAttribute("data-i18n-alt"));
      if (val !== undefined) el.setAttribute("alt", val);
    });
    document.querySelectorAll("[data-i18n-content]").forEach((el) => {
      const val = getNested(dict, el.getAttribute("data-i18n-content"));
      if (val !== undefined) el.setAttribute("content", val);
    });

    const langToggle = document.getElementById("langToggle");
    if (langToggle) langToggle.textContent = lang === "pt" ? "EN" : "PT";

    localStorage.setItem("lang", lang);
  }

  const savedLang =
    localStorage.getItem("lang") ||
    (navigator.language && navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en");
  applyLanguage(savedLang);

  const langToggleBtn = document.getElementById("langToggle");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("lang") === "pt" ? "en" : "pt";
      applyLanguage(current);
    });
  }
})();
