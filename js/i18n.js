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
        summary: "Engenheiro de Software com 2 anos de experiência profissional, a contribuir para o desenvolvimento e manutenção de soluções de software escaláveis e fiáveis em ambientes dinâmicos. Colaboro com equipas multidisciplinares para entregar produtos de alta qualidade que respondem às necessidades dos utilizadores e do negócio. Motivado pela aprendizagem contínua e pela resolução de problemas complexos.",
        contactBtn: "Contactar",
        downloadBtn: "Descarregar CV",
        photoAlt: "Foto de João Ferreira"
      },
      about: {
        title: "Sobre mim",
        p1: "Sou Engenheiro de Software com 2 anos de experiência profissional na indústria tecnológica, contribuindo para o desenvolvimento e manutenção de soluções de software escaláveis e fiáveis em ambientes de ritmo acelerado.",
        p2: "Já colaborei com equipas multidisciplinares para entregar produtos de alta qualidade que respondem tanto às necessidades dos utilizadores como às do negócio.",
        p3: "Sou motivado pela aprendizagem contínua, gosto de resolver problemas complexos e valorizo uma comunicação clara e eficaz. Estou sempre aberto a novos desafios e oportunidades que fomentem tanto a minha experiência técnica como o meu crescimento profissional.",
        skillsTitle: "Competências",
        langsTitle: "Idiomas",
        lang: { pt: "Português", ptLevel: "Nativo", en: "Inglês", enLevel: "Intermédio / B1" }
      },
      experience: {
        title: "Experiência",
        role: "Analista de Sistemas",
        date: "Nov 2023 – Presente · Leça do Balio, Portugal",
        bullet1: "Desenho e implementação de soluções robustas em PL/SQL dentro do ecossistema Oracle Retail.",
        bullet2: "Desenvolvimento e otimização de procedimentos, funções, packages e scripts PL/SQL.",
        bullet3: "Colaboração com clientes e stakeholders para levantamento de requisitos e desenho de soluções.",
        bullet4: "Suporte em produção: troubleshooting de incidentes, análise de causa raiz e correções."
      },
      projects: {
        title: "Projetos",
        hanabi: { meta: "Jan 2019 – Dez 2020", desc: "Projeto pessoal de desenvolvimento de software." },
        lettersoup: { meta: "Mar 2020 – Abr 2020", desc: "Projeto pessoal de desenvolvimento de software." },
        rss: { meta: "Jan 2021 – Mar 2021", desc: "Leitor de feeds RSS." },
        cinema: { meta: "Set 2021 – Jun 2022", desc: "Aplicação web para gestão de sessões de cinema." },
        viewGithub: "Ver no GitHub →",
        note: 'Descrições e links serão atualizados brevemente. Vê todos os projetos em <a href="https://github.com/joaomferreira7" target="_blank" rel="noopener">github.com/joaomferreira7</a>.'
      },
      education: {
        title: "Formação",
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
        summary: "Software Engineer with 2 years of professional experience, contributing to the development and maintenance of scalable and reliable software solutions in fast-paced environments. I collaborate with cross-functional teams to deliver high-quality products that meet both user and business needs. Driven by continuous learning and a passion for solving complex problems.",
        contactBtn: "Contact",
        downloadBtn: "Download CV",
        photoAlt: "Photo of João Ferreira"
      },
      about: {
        title: "About me",
        p1: "Software Engineer with 2 years of professional experience in the tech industry, contributing to the development and maintenance of scalable and reliable software solutions in fast-paced environments.",
        p2: "I have collaborated with cross-functional teams to deliver high-quality products that meet both user and business needs.",
        p3: "I am driven by continuous learning, enjoy solving complex problems, and value clear and effective communication. Always open to new challenges and opportunities that foster both technical expertise and professional growth.",
        skillsTitle: "Skills",
        langsTitle: "Languages",
        lang: { pt: "Portuguese", ptLevel: "Native", en: "English", enLevel: "Intermediate / B1" }
      },
      experience: {
        title: "Experience",
        role: "System Analyst",
        date: "Nov 2023 – Present · Leça do Balio, Portugal",
        bullet1: "Designed and implemented robust PL/SQL solutions within the Oracle Retail ecosystem.",
        bullet2: "Developed and optimized PL/SQL procedures, functions, packages, and scripts.",
        bullet3: "Collaborated with clients and stakeholders to gather requirements and design solutions.",
        bullet4: "Provided production support, troubleshooting incidents, root cause analysis, and fixes."
      },
      projects: {
        title: "Projects",
        hanabi: { meta: "Jan 2019 – Dec 2020", desc: "Personal software development project." },
        lettersoup: { meta: "Mar 2020 – Apr 2020", desc: "Personal software development project." },
        rss: { meta: "Jan 2021 – Mar 2021", desc: "RSS feed reader." },
        cinema: { meta: "Sep 2021 – Jun 2022", desc: "Web application for managing cinema screenings." },
        viewGithub: "View on GitHub →",
        note: 'Descriptions and links will be updated soon. See all projects at <a href="https://github.com/joaomferreira7" target="_blank" rel="noopener">github.com/joaomferreira7</a>.'
      },
      education: {
        title: "Education",
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
