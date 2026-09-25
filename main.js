import "./style.css";

const projetos = [
  {
    numero: "01",
    nome: "OuçaPorMim",
    tipo: "Acessibilidade · Projeto principal",
    descricao:
      "Aplicação que transforma voz em texto para apoiar pessoas surdas ou com deficiência auditiva no acompanhamento de aulas e conversas.",
    tecnologias: ["Next.js", "JavaScript", "Acessibilidade"],
    link: "https://github.com/Crisangela3/audio-assistente-pro",
  },
  {
    numero: "02",
    nome: "Nossa ONG",
    tipo: "Site institucional · Projeto acadêmico",
    descricao:
      "Site responsivo com HTML semântico, CSS, JavaScript e formulário com validações. O HTML foi verificado no W3C sem erros.",
    tecnologias: ["HTML5", "CSS3", "JavaScript"],
    link: null,
  },
  {
    numero: "03",
    nome: "Moreli Prestige Sport",
    tipo: "Loja virtual · Projeto de estudo",
    descricao:
      "Interface de loja esportiva criada para praticar componentes React, navegação, responsividade e animações.",
    tecnologias: ["React", "Vite", "CSS"],
    link: null,
  },
  {
    numero: "04",
    nome: "LAS Calculadora",
    tipo: "Calculadora · Projeto autoral",
    descricao: "Projeto de calculadora desenvolvido para praticar ferramentas digitais.",
    tecnologias: ["Projeto autoral"],
    link: "https://github.com/Crisangela3/LasCalculadora",
  },
  {
    numero: "05",
    nome: "LudoTerapia",
    tipo: "Educação e tecnologia · Projeto autoral",
    descricao: "Projeto que reúne meus estudos sobre recursos digitais para aprendizagem.",
    tecnologias: ["Educação", "Tecnologia"],
    link: "https://github.com/Crisangela3/LudoTerapia",
  },
  {
    numero: "06",
    nome: "Chuva Geométrica",
    tipo: "Jogo · Projeto autoral",
    descricao: "Projeto de jogo com temática de formas geométricas.",
    tecnologias: ["Jogo", "Geometria"],
    link: "https://github.com/Crisangela3/chuva-geometrica",
  },
  {
    numero: "07",
    nome: "Jogo da Leitura",
    tipo: "Jogo educativo · Projeto autoral",
    descricao: "Projeto de jogo voltado à prática da leitura.",
    tecnologias: ["Jogo", "Educação"],
    link: "https://github.com/Crisangela3/jogo-da-leitura",
  },
  {
    numero: "08",
    nome: "Saúde · Desenvolve Boticário",
    tipo: "Projeto de estudo",
    descricao: "Projeto desenvolvido durante meus estudos no programa Desenvolve Boticário.",
    tecnologias: ["Projeto de estudo"],
    link: "https://github.com/Crisangela3/Saude_Desenvolve_Boticario",
  },
];

const trajetoria = [
  {
    periodo: "2026 — atual",
    titulo: "Engenharia de Software",
    local: "Universidade Cruzeiro do Sul · Polo Santo André",
    descricao: "Bacharelado iniciado em setembro de 2026.",
  },
  {
    periodo: "2026",
    titulo: "Desenvolvimento de Jogos com Unity e C#",
    local: "SoulCode",
    descricao: "Formação realizada de fevereiro a maio de 2026.",
  },
  {
    periodo: "2025",
    titulo: "Desenvolvimento de Software Full Stack",
    local: "Koru · Programa Desenvolve Boticário",
    descricao: "Formação prática realizada de julho a outubro de 2025.",
  },
  {
    periodo: "2018 — atual",
    titulo: "Professora do Ensino Fundamental",
    local: "Secretaria da Educação do Estado de São Paulo",
    descricao:
      "Planejamento de atividades, uso de plataformas digitais e adaptação de conteúdos para diferentes necessidades.",
  },
  {
    periodo: "2024",
    titulo: "Professora da Primeira Infância",
    local: "Escola Manoel Cardoso",
    descricao: "Criação de atividades gamificadas e organização de entregas.",
  },
  {
    periodo: "2014 — 2024",
    titulo: "Pedagogia e Filosofia",
    local: "FMU · IPEMIG",
    descricao: "Licenciatura em Pedagogia e graduação em Filosofia.",
  },
];

const tecnologias = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Vite",
  "C#",
  "Unity",
  "VS Code",
  "Vercel",
  "UX/UI",
];

const iconesTecnologias = {
  "HTML5": "devicon-html5-plain colored",
  "CSS3": "devicon-css3-plain colored",
  "JavaScript": "devicon-javascript-plain colored",
  "TypeScript": "devicon-typescript-plain colored",
  "Python": "devicon-python-plain colored",
  "React": "devicon-react-original colored",
  "Next.js": "devicon-nextjs-plain",
  "Node.js": "devicon-nodejs-plain colored",
  "Tailwind CSS": "devicon-tailwindcss-original colored",
  "Git": "devicon-git-plain colored",
  "GitHub": "devicon-github-original",
  "Vite": "devicon-vitejs-plain colored",
  "C#": "devicon-csharp-plain colored",
  "Unity": "devicon-unity-plain",
  "VS Code": "devicon-vscode-plain colored",
  "Vercel": "devicon-vercel-original",
};

const cenas = {
  "personagem-inicio": ["avatar-sentada-frente.png", "avatar-sentada-digitando.png"],
  "personagem-sobre": ["avatar-busto.png", "avatar-busto-perto.png"],
  "personagem-grande": ["avatar-frente-digitando.png", "avatar-mesa-perto.png"],
  "personagem-atuacao": ["avatar-sentada-frente.png", "avatar-sentada-digitando.png"]
};

function personagem(classe = "") {
  const [frente, digitando] = cenas[classe];

  return `
    <div class="personagem ${classe}"
      role="img"
      aria-label="Ilustração de Angela trabalhando no computador">
      <img class="pose-frente" src="/assets/${frente}" alt="" />
      <img class="pose-digitando" src="/assets/${digitando}" alt="" />
    </div>
  `;
}
document.querySelector("#app").innerHTML = `
  <a class="pular-conteudo" href="#conteudo">Ir para o conteúdo</a>

  <header class="cabecalho">
    <a class="marca" href="#inicio" aria-label="Angela Cristina, início">
      AC<span>.</span>
        </a>

    <nav aria-label="Menu principal">
      <a href="#sobre">Sobre</a>
      <a href="#atuacao">O que faço</a>
      <a href="#carreira">Carreira</a>
      <a href="#projetos">Projetos</a>
      <a href="#tecnologias">Tecnologias</a>
      <a href="#contato">Contato</a>
    </nav>
    <div class="controles-cabecalho">
      <a class="email-cabecalho" href="mailto:crisangela3@gmail.com">crisangela3@gmail.com</a>
      <div class="botoes-idioma" role="group" aria-label="Idioma do site">
        <button type="button" data-idioma="pt" aria-pressed="true">PT</button>
        <button type="button" data-idioma="en" aria-pressed="false">EN</button>
        <button type="button" data-idioma="es" aria-pressed="false">ES</button>
      </div>
      <button class="botao-tema" type="button" aria-label="Ativar tema claro" aria-pressed="false">☀</button>
    </div>
  </header>

  <main id="conteudo">
    <section class="inicio secao" id="inicio">
      <div class="inicio-texto">
        <span class="escrita-azul">Olá, eu sou</span>
        <h1>ANGELA<br /><span>CRISTINA</span></h1>
        <p>
          Desenvolvedora de Software Júnior<br />
          Front-end · React · JavaScript
        </p>
        <a class="link-destaque" href="#projetos">
          Conheça meus projetos ↘
        </a>
      </div>

      ${personagem("personagem-inicio")}

      <div class="inicio-lateral">
        <span class="escrita-azul">Criar · Aprender · Incluir</span>
        <h2>TECNOLOGIA<br />COM PROPÓSITO<span>.</span></h2>
        <p>Santo André · SP</p>
      </div>

      <span class="indicacao-rolagem">ROLE PARA EXPLORAR ↓</span>
    </section>

    <section class="sobre secao" id="sobre">
      <div class="sobre-texto">
        <span class="escrita-azul">Sobre mim</span>
        <h2>Uma trajetória que une <em>educação</em> e tecnologia.</h2>
        <p>
          Sou estudante de Engenharia de Software e estou em transição
          de carreira para o desenvolvimento web. Crio interfaces
          responsivas com atenção à acessibilidade e à experiência
          das pessoas que vão utilizá-las.
        </p>
        <p>
          Minha experiência na educação fortaleceu minha comunicação,
          meu planejamento e meu trabalho em equipe. Hoje aplico esse
          aprendizado em projetos de software com propósito.
        </p>
      </div>

      ${personagem("personagem-sobre")}
    </section>

    <section class="cena-personagem">
      ${personagem("personagem-grande")}
      <p>Ideias que saem do papel e ganham vida na tela.</p>
    </section>

    <section class="atuacao secao" id="atuacao">
      <div class="atuacao-titulo">
        <span class="escrita-azul">O que eu faço</span>
        <h2>IDEIAS,<br /><span>CÓDIGO</span><br />E IMPACTO.</h2>
      </div>

      ${personagem("personagem-atuacao")}

      <div class="atuacao-cards">
        <article>
          <span>01</span>
          <h3>FRONT-END</h3>
          <p>
            Desenvolvo páginas e interfaces responsivas com HTML,
            CSS, JavaScript e React.
          </p>
        </article>

        <article>
          <span>02</span>
          <h3>ACESSIBILIDADE</h3>
          <p>
            No OuçaPorMim, trabalho com transcrição de voz em texto
            para apoiar a participação de pessoas surdas ou com
            deficiência auditiva.
          </p>
          <a
            href="https://github.com/Crisangela3/audio-assistente-pro"
            target="_blank"
            rel="noopener noreferrer"
          >Conhecer o projeto ↗</a>
        </article>
      </div>
    </section>

    <section class="carreira secao" id="carreira">
      <div class="titulo-secao">
        <span class="escrita-azul">Minha jornada</span>
        <h2>Carreira <em>&</em><br />formação</h2>
        <p>Da educação ao desenvolvimento de software.</p>
      </div>

      <div class="linha-do-tempo">
        ${trajetoria
          .map(
            (item) => `
              <article class="marco">
                <span class="periodo">${item.periodo}</span>
                <div>
                  <h3>${item.titulo}</h3>
                  <span class="local">${item.local}</span>
                </div>
                <p>${item.descricao}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="projetos secao" id="projetos">
      <div class="projetos-topo">
        <div>
          <span class="escrita-azul">Trabalhos e estudos</span>
          <h2>Meus <em>Projetos</em></h2>
        </div>

        <div class="botoes-projetos">
          <button id="anterior" type="button" aria-label="Projeto anterior">
            ←
          </button>
          <button id="proximo" type="button" aria-label="Próximo projeto">
            →
          </button>
        </div>
      </div>

      <p class="dica-projetos">
        Use os botões, o mouse ou as setas do teclado para ver os projetos.
      </p>

      <div
        class="lista-projetos"
        id="lista-projetos"
        tabindex="0"
        role="region"
        aria-label="Projetos de Angela Cristina"
      >
        ${projetos
          .map(
            (projeto) => `
              <article class="cartao-projeto">
                <div class="capa-projeto capa-${projeto.numero}">
                  <span>PROJETO ${projeto.numero}</span>
                  <strong>${projeto.nome}</strong>
                </div>

                <div class="cartao-conteudo">
                  <span class="numero-projeto">
                    ${projeto.numero} / PROJETO
                  </span>
                  <h3>${projeto.nome}</h3>
                  <p class="categoria-projeto">${projeto.tipo}</p>
                  <p>${projeto.descricao}</p>

                  <div class="etiquetas">
                    ${projeto.tecnologias
                      .map((tecnologia) => `<span>${tecnologia}</span>`)
                      .join("")}
                  </div>

                  ${
                    projeto.link
                      ? `<a href="${projeto.link}"
                           target="_blank"
                           rel="noopener noreferrer">
                           Ver no GitHub ↗
                         </a>`
                      : `<span class="sem-link">Projeto de estudo</span>`
                  }
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
    <section class="tecnologias secao" id="tecnologias">
  <span class="escrita-azul">Ferramentas que uso e estudo</span>
  <h2>MINHAS TECNOLOGIAS</h2>

  <div class="tecnologias-com-avatar">
    <div class="avatar-animado">
      <img
        class="avatar-tecnologias"
        src="/assets/avatar-tecnologias-branca.png"
        alt="Angela Cristina"
      />
      <img
        class="avatar-cabeca-inclinada"
        src="/assets/avatar-cabeca-inclinada.png"
        alt=""
        aria-hidden="true"
      />
    </div>

    <div class="lista-tecnologias">
      ${tecnologias
        .map((tecnologia) => `
          <span class="tecnologia-item">
            <span class="tecnologia-icone" aria-hidden="true">
              ${iconesTecnologias[tecnologia]
                ? `<i class="${iconesTecnologias[tecnologia]}"></i>`
                : `<span class="tecnologia-simbolo">${tecnologia === "UX/UI" ? "✦" : "♿"}</span>`}
            </span>
            <span class="tecnologia-nome">${tecnologia}</span>
          </span>`)
        .join("")}
    </div>
  </div>
</section>
  </main>

  <footer class="rodape secao" id="contato">
    <div>
      <span class="escrita-azul">Vamos conversar?</span>
      <h2>CONTATO<span>.</span></h2>
      <div class="contato-dados">
        <div class="contato-dado">
          <span class="rotulo-contato">E-MAIL</span>
          <a href="mailto:crisangela3@gmail.com">crisangela3@gmail.com ↗</a>
        </div>
        <div class="contato-dado">
          <span class="rotulo-contato">SITE</span>
          <!-- Troque o endereço abaixo pelo deste portfólio quando publicar. -->
          <a href="https://portfolio-angela-novo.vercel.app/" target="_blank" rel="noopener noreferrer">https://portfolio-angela-novo.vercel.app/ ↗</a>
        </div>
        <p>Santo André, São Paulo</p>
      </div>
    </div>

    <div class="links-rodape">
      <a
        href="https://github.com/Crisangela3"
        target="_blank"
        rel="noopener noreferrer"
      >GitHub ↗</a>

      <a
        href="https://github.com/Crisangela3/audio-assistente-pro"
        target="_blank"
        rel="noopener noreferrer"
      >OuçaPorMim ↗</a>

      <a
        href="https://www.linkedin.com/in/angela-cristina-silva-b40451108/"
        target="_blank"
        rel="noopener noreferrer"
      >LinkedIn ↗</a>

    </div>


    <p class="assinatura-rodape">Desenvolvido por <strong>Angela Cristina</strong><small>© ${new Date().getFullYear()}</small></p>
    <div class="icones-sociais" aria-label="Redes sociais e e-mail">
      <a href="https://github.com/Crisangela3" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <i class="devicon-github-original" aria-hidden="true"></i>
      </a>
      <a href="https://www.linkedin.com/in/angela-cristina-silva-b40451108/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <i class="devicon-linkedin-plain" aria-hidden="true"></i>
      </a>
      <a href="mailto:crisangela3@gmail.com" aria-label="Enviar e-mail"><span aria-hidden="true">✉</span></a>
    </div>
  </footer>
`;

const listaProjetos = document.querySelector("#lista-projetos");
const cartaoProjeto = listaProjetos.querySelector(".cartao-projeto");

function moverProjetos(direcao) {
  const largura = cartaoProjeto.getBoundingClientRect().width + 20;

  listaProjetos.scrollBy({
    left: largura * direcao,
    behavior: "smooth",
  });
}

document
  .querySelector("#anterior")
  .addEventListener("click", () => moverProjetos(-1));

document
  .querySelector("#proximo")
  .addEventListener("click", () => moverProjetos(1));

listaProjetos.addEventListener("keydown", (evento) => {
  if (evento.key === "ArrowRight") {
    evento.preventDefault();
    moverProjetos(1);
  }

  if (evento.key === "ArrowLeft") {
    evento.preventDefault();
    moverProjetos(-1);
  }
});

let ultimaTrocaComMouse = 0;

listaProjetos.addEventListener(
  "wheel",
  (evento) => {
    const direcao = Math.sign(evento.deltaY);
    if (direcao === 0) return;

    const chegouAoInicio = listaProjetos.scrollLeft <= 2;
    const chegouAoFim =
      listaProjetos.scrollLeft + listaProjetos.clientWidth >=
      listaProjetos.scrollWidth - 2;

    if ((direcao < 0 && chegouAoInicio) || (direcao > 0 && chegouAoFim)) {
      return;
    }

    evento.preventDefault();

    const agora = Date.now();
    if (agora - ultimaTrocaComMouse < 450) return;

    ultimaTrocaComMouse = agora;
    moverProjetos(direcao);
  },
  { passive: false }
);

// Troca para as versões de blusa branca ao passar o mouse.
document.querySelectorAll(".personagem").forEach((area) => {
  const imagens = [...area.querySelectorAll("img")];

  imagens.forEach((imagem) => {
    imagem.dataset.preta = imagem.getAttribute("src");
    imagem.dataset.branca = imagem.dataset.preta.replace(/\.png$/, "-branca.png");
  });

  area.addEventListener("mouseenter", () => {
    imagens.forEach((imagem) => {
      imagem.src = imagem.dataset.branca;
    });
  });

  area.addEventListener("mouseleave", () => {
    imagens.forEach((imagem) => {
      imagem.src = imagem.dataset.preta;
    });
  });
});

// Faz duas tecnologias vizinhas flutuarem, trocarem de lugar e voltarem.
const quadradosTecnologias = [
  ...document.querySelectorAll(".lista-tecnologias > span"),
];

const quadradosEmMovimento = new Set();

quadradosTecnologias.forEach((quadrado, indice) => {
  quadrado.addEventListener("pointerenter", () => {
    if (
      quadradosEmMovimento.has(quadrado) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let vizinho = quadradosTecnologias[indice + 1];

    // No fim da linha, escolhe o quadrado anterior.
    if (!vizinho || vizinho.offsetTop !== quadrado.offsetTop) {
      vizinho = quadradosTecnologias[indice - 1];
    }

    if (
      !vizinho ||
      vizinho.offsetTop !== quadrado.offsetTop ||
      quadradosEmMovimento.has(vizinho)
    ) {
      return;
    }

    quadradosEmMovimento.add(quadrado);
    quadradosEmMovimento.add(vizinho);

    const posicaoA = quadrado.getBoundingClientRect();
    const posicaoB = vizinho.getBoundingClientRect();
    const distancia = posicaoB.left - posicaoA.left;

    const configuracao = {
      duration: 2600,
      easing: "ease-in-out",
    };

    const animacaoA = quadrado.animate(
      [
        { transform: "translateX(0) scale(1)" },
        { transform: `translateX(${distancia}px) scale(1.06)` },
        { transform: "translateX(0) scale(1)" },
      ],
      configuracao
    );

    vizinho.animate(
      [
        { transform: "translateX(0) scale(1)" },
        { transform: `translateX(${-distancia}px) scale(1.06)` },
        { transform: "translateX(0) scale(1)" },
      ],
      configuracao
    );

    animacaoA.finished.finally(() => {
      quadradosEmMovimento.delete(quadrado);
      quadradosEmMovimento.delete(vizinho);
    });
  });
});

// Logo e itens do menu trocam de posição visualmente e depois voltam.
const itensMenu = [
  document.querySelector(".cabecalho .marca"),
  ...document.querySelectorAll(".cabecalho nav a"),
];

const itensMenuAnimando = new Set();

itensMenu.forEach((item, indice) => {
  item.addEventListener("pointerenter", () => {
    if (
      itensMenuAnimando.has(item) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const vizinho = itensMenu[indice + 1] || itensMenu[indice - 1];
    if (!vizinho || itensMenuAnimando.has(vizinho)) return;

    itensMenuAnimando.add(item);
    itensMenuAnimando.add(vizinho);

    const lugarItem = item.getBoundingClientRect();
    const lugarVizinho = vizinho.getBoundingClientRect();

    const distanciaX = lugarVizinho.left - lugarItem.left;
    const distanciaY = lugarVizinho.top - lugarItem.top;
    const tempo = { duration: 2500, easing: "ease-in-out" };

    const primeiraAnimacao = item.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${distanciaX}px, ${distanciaY}px)` },
        { transform: "translate(0, 0)" },
      ],
      tempo
    );

    vizinho.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${-distanciaX}px, ${-distanciaY}px)` },
        { transform: "translate(0, 0)" },
      ],
      tempo
    );

    primeiraAnimacao.finished.finally(() => {
      itensMenuAnimando.delete(item);
      itensMenuAnimando.delete(vizinho);
    });
  });
});



// Idioma e tema: não recria os cartões, preservando os eventos de mouse e teclado.
const traducoes = {
  "E-MAIL": ["E-MAIL", "CORREO"],
  "SITE": ["WEBSITE", "SITIO WEB"],
  "Ir para o conteúdo": ["Skip to content", "Ir al contenido"],
  "Sobre": ["About", "Sobre mí"],
  "O que faço": ["What I do", "Lo que hago"],
  "Carreira": ["Career", "Trayectoria"],
  "Projetos": ["Projects", "Proyectos"],
  "Tecnologias": ["Technologies", "Tecnologías"],
  "Contato": ["Contact", "Contacto"],
  "Olá, eu sou": ["Hi, I am", "Hola, soy"],
  "Desenvolvedora de Software Júnior": ["Junior Software Developer", "Desarrolladora de Software Junior"],
  "Conheça meus projetos ↘": ["Explore my projects ↘", "Descubre mis proyectos ↘"],
  "Criar · Aprender · Incluir": ["Create · Learn · Include", "Crear · Aprender · Incluir"],
  "TECNOLOGIA": ["TECHNOLOGY", "TECNOLOGÍA"],
  "COM PROPÓSITO": ["WITH PURPOSE", "CON PROPÓSITO"],
  "ROLE PARA EXPLORAR ↓": ["SCROLL TO EXPLORE ↓", "DESLIZA PARA EXPLORAR ↓"],
  "Sobre mim": ["About me", "Sobre mí"],
  "Uma trajetória que une": ["A journey that connects", "Una trayectoria que une"],
  "educação": ["education", "educación"],
  "e tecnologia.": ["and technology.", "y tecnología."],
  "Sou estudante de Engenharia de Software e estou em transição de carreira para o desenvolvimento web. Crio interfaces responsivas com atenção à acessibilidade e à experiência das pessoas que vão utilizá-las.": ["I study Software Engineering and am transitioning into web development. I build responsive interfaces with a focus on accessibility and the experience of the people who use them.", "Estudio Ingeniería de Software y estoy en transición hacia el desarrollo web. Creo interfaces adaptables con atención a la accesibilidad y a la experiencia de quienes las usan."],
  "Minha experiência na educação fortaleceu minha comunicação, meu planejamento e meu trabalho em equipe. Hoje aplico esse aprendizado em projetos de software com propósito.": ["My experience in education strengthened my communication, planning, and teamwork. Today I apply those skills to meaningful software projects.", "Mi experiencia en educación fortaleció mi comunicación, planificación y trabajo en equipo. Hoy aplico lo aprendido a proyectos de software con propósito."],
  "Ideias que saem do papel e ganham vida na tela.": ["Ideas that leave the page and come to life on screen.", "Ideas que salen del papel y cobran vida en la pantalla."],
  "O que eu faço": ["What I do", "Lo que hago"],
  "IDEIAS,": ["IDEAS,", "IDEAS,"],
  "CÓDIGO": ["CODE", "CÓDIGO"],
  "E IMPACTO.": ["AND IMPACT.", "E IMPACTO."],
  "ACESSIBILIDADE": ["ACCESSIBILITY", "ACCESIBILIDAD"],
  "Desenvolvo páginas e interfaces responsivas com HTML, CSS, JavaScript e React.": ["I build responsive websites and interfaces with HTML, CSS, JavaScript, and React.", "Desarrollo páginas e interfaces adaptables con HTML, CSS, JavaScript y React."],
  "No OuçaPorMim, trabalho com transcrição de voz em texto para apoiar a participação de pessoas surdas ou com deficiência auditiva.": ["In OuçaPorMim, I work on speech-to-text transcription to support deaf and hard-of-hearing people.", "En OuçaPorMim trabajo con transcripción de voz a texto para apoyar a personas sordas o con discapacidad auditiva."],
  "Conhecer o projeto ↗": ["Explore the project ↗", "Conocer el proyecto ↗"],
  "Minha jornada": ["My journey", "Mi trayectoria"],
  "Carreira": ["Career", "Trayectoria"],
  "formação": ["education", "formación"],
  "Da educação ao desenvolvimento de software.": ["From education to software development.", "De la educación al desarrollo de software."],
  "2026 — atual": ["2026 — present", "2026 — presente"],
  "2018 — atual": ["2018 — present", "2018 — presente"],
  "Engenharia de Software": ["Software Engineering", "Ingeniería de Software"],
  "Desenvolvimento de Jogos com Unity e C#": ["Game Development with Unity and C#", "Desarrollo de Videojuegos con Unity y C#"],
  "Desenvolvimento de Software Full Stack": ["Full Stack Software Development", "Desarrollo de Software Full Stack"],
  "Professora do Ensino Fundamental": ["Elementary School Teacher", "Profesora de Educación Primaria"],
  "Professora da Primeira Infância": ["Early Childhood Teacher", "Profesora de Educación Infantil"],
  "Pedagogia e Filosofia": ["Education and Philosophy", "Pedagogía y Filosofía"],
  "Universidade Cruzeiro do Sul · Polo Santo André": ["Cruzeiro do Sul University · Santo André Campus", "Universidad Cruzeiro do Sul · Sede Santo André"],
  "Secretaria da Educação do Estado de São Paulo": ["São Paulo State Department of Education", "Secretaría de Educación del Estado de São Paulo"],
  "Escola Manoel Cardoso": ["Manoel Cardoso School", "Escuela Manoel Cardoso"],
  "Bacharelado iniciado em setembro de 2026.": ["Bachelor's degree started in September 2026.", "Licenciatura iniciada en septiembre de 2026."],
  "Formação realizada de fevereiro a maio de 2026.": ["Course completed from February to May 2026.", "Formación realizada de febrero a mayo de 2026."],
  "Formação prática realizada de julho a outubro de 2025.": ["Hands-on training completed from July to October 2025.", "Formación práctica realizada de julio a octubre de 2025."],
  "Planejamento de atividades, uso de plataformas digitais e adaptação de conteúdos para diferentes necessidades.": ["Lesson planning, use of digital platforms, and adaptation of content for different needs.", "Planificación de actividades, uso de plataformas digitales y adaptación de contenidos a diferentes necesidades."],
  "Criação de atividades gamificadas e organização de entregas.": ["Creation of gamified activities and organization of deliverables.", "Creación de actividades gamificadas y organización de entregas."],
  "Licenciatura em Pedagogia e graduação em Filosofia.": ["Degrees in Education and Philosophy.", "Grados en Pedagogía y Filosofía."],
  "Trabalhos e estudos": ["Work and studies", "Trabajos y estudios"],
  "Meus": ["My", "Mis"],
  "Use os botões, o mouse ou as setas do teclado para ver os projetos.": ["Use the buttons, mouse, or keyboard arrows to browse projects.", "Usa los botones, el ratón o las flechas del teclado para ver los proyectos."],
  "PROJETO": ["PROJECT", "PROYECTO"],
  "/ PROJETO": ["/ PROJECT", "/ PROYECTO"],
  "Ver no GitHub ↗": ["View on GitHub ↗", "Ver en GitHub ↗"],
  "Projeto de estudo": ["Study project", "Proyecto de estudio"],
  "Acessibilidade · Projeto principal": ["Accessibility · Featured project", "Accesibilidad · Proyecto principal"],
  "Site institucional · Projeto acadêmico": ["Organization website · Academic project", "Sitio institucional · Proyecto académico"],
  "Loja virtual · Projeto de estudo": ["Online store · Study project", "Tienda virtual · Proyecto de estudio"],
  "Calculadora · Projeto autoral": ["Calculator · Original project", "Calculadora · Proyecto propio"],
  "Educação e tecnologia · Projeto autoral": ["Education and technology · Original project", "Educación y tecnología · Proyecto propio"],
  "Jogo · Projeto autoral": ["Game · Original project", "Juego · Proyecto propio"],
  "Jogo educativo · Projeto autoral": ["Educational game · Original project", "Juego educativo · Proyecto propio"],
  "Aplicação que transforma voz em texto para apoiar pessoas surdas ou com deficiência auditiva no acompanhamento de aulas e conversas.": ["An app that turns speech into text to help deaf and hard-of-hearing people follow classes and conversations.", "Aplicación que convierte voz en texto para ayudar a personas sordas o con discapacidad auditiva a seguir clases y conversaciones."],
  "Site responsivo com HTML semântico, CSS, JavaScript e formulário com validações. O HTML foi verificado no W3C sem erros.": ["Responsive site with semantic HTML, CSS, JavaScript, and a validated form. The HTML passed W3C validation without errors.", "Sitio adaptable con HTML semántico, CSS, JavaScript y formulario validado. El HTML pasó la validación W3C sin errores."],
  "Interface de loja esportiva criada para praticar componentes React, navegação, responsividade e animações.": ["Sports store interface created to practice React components, navigation, responsive layouts, and animation.", "Interfaz de tienda deportiva creada para practicar componentes React, navegación, diseño adaptable y animaciones."],
  "Projeto de calculadora desenvolvido para praticar ferramentas digitais.": ["Calculator project developed to practice digital tools.", "Proyecto de calculadora desarrollado para practicar herramientas digitales."],
  "Projeto que reúne meus estudos sobre recursos digitais para aprendizagem.": ["A project bringing together my studies of digital resources for learning.", "Proyecto que reúne mis estudios sobre recursos digitales para el aprendizaje."],
  "Projeto de jogo com temática de formas geométricas.": ["A game project based on geometric shapes.", "Proyecto de juego sobre formas geométricas."],
  "Projeto de jogo voltado à prática da leitura.": ["An educational game for reading practice.", "Un juego educativo para practicar la lectura."],
  "Projeto desenvolvido durante meus estudos no programa Desenvolve Boticário.": ["Project developed during my studies in the Desenvolve Boticário program.", "Proyecto desarrollado durante mis estudios en el programa Desenvolve Boticário."],
  "Jogo": ["Game", "Juego"],
  "Geometria": ["Geometry", "Geometría"],
  "Educação": ["Education", "Educación"],
  "Tecnologia": ["Technology", "Tecnología"],
  "Projeto autoral": ["Original project", "Proyecto propio"],
  "Ferramentas que uso e estudo": ["Tools I use and study", "Herramientas que uso y estudio"],
  "MINHAS TECNOLOGIAS": ["MY TECHNOLOGIES", "MIS TECNOLOGÍAS"],
  "Acessibilidade": ["Accessibility", "Accesibilidad"],
  "Vamos conversar?": ["Let's talk?", "¿Hablamos?"],
  "CONTATO": ["CONTACT", "CONTACTO"],
  "Santo André, São Paulo": ["Santo André, São Paulo", "Santo André, São Paulo"],
  "Portfólio Online ↗": ["Online Portfolio ↗", "Portafolio Online ↗"],
  "Desenvolvido por": ["Developed by", "Desarrollado por"],
};

const traduciveis = [];
const percursoTexto = document.createTreeWalker(document.querySelector("#app"), NodeFilter.SHOW_TEXT);
while (percursoTexto.nextNode()) {
  const no = percursoTexto.currentNode;
  const textoOriginal = no.nodeValue;
  const chave = textoOriginal.replace(/\s+/g, " ").trim();
  if (traducoes[chave] || /^PROJETO \d+$/.test(chave) || /^\d+ \/ PROJETO$/.test(chave)) {
    traduciveis.push({ no, textoOriginal, chave });
  }
}

function mudarIdioma(idioma) {
  const coluna = idioma === "en" ? 0 : 1;
  for (const { no, textoOriginal, chave } of traduciveis) {
    if (idioma === "pt") {
      no.nodeValue = textoOriginal;
      continue;
    }
    const traduzido = traducoes[chave]?.[coluna]
      ?? (chave.startsWith("PROJETO ") ? chave.replace("PROJETO", idioma === "en" ? "PROJECT" : "PROYECTO") : null)
      ?? (chave.includes("/ PROJETO") ? chave.replace("PROJETO", idioma === "en" ? "PROJECT" : "PROYECTO") : chave);
    no.nodeValue = textoOriginal.replace(/\S[\s\S]*\S|\S/, traduzido);
  }
  document.documentElement.lang = idioma === "pt" ? "pt-BR" : idioma;
  document.querySelectorAll("[data-idioma]").forEach(botao => {
    botao.setAttribute("aria-pressed", String(botao.dataset.idioma === idioma));
  });
  const atributos = {
    pt: ["Menu principal", "Idioma do site", "Ativar tema claro", "Ativar tema escuro", "Projeto anterior", "Próximo projeto", "Projetos de Angela Cristina", "Ilustração de Angela trabalhando no computador"],
    en: ["Main menu", "Site language", "Switch to light theme", "Switch to dark theme", "Previous project", "Next project", "Angela Cristina's projects", "Illustration of Angela working at a computer"],
    es: ["Menú principal", "Idioma del sitio", "Activar tema claro", "Activar tema oscuro", "Proyecto anterior", "Proyecto siguiente", "Proyectos de Angela Cristina", "Ilustración de Angela trabajando en la computadora"],
  }[idioma];
  document.querySelector(".cabecalho nav").setAttribute("aria-label", atributos[0]);
  document.querySelector(".botoes-idioma").setAttribute("aria-label", atributos[1]);
  document.querySelector(".botao-tema").setAttribute("aria-label", atributos[document.body.classList.contains("tema-claro") ? 3 : 2]);
  document.querySelector("#anterior").setAttribute("aria-label", atributos[4]);
  document.querySelector("#proximo").setAttribute("aria-label", atributos[5]);
  listaProjetos.setAttribute("aria-label", atributos[6]);
  document.querySelectorAll(".personagem").forEach(area => area.setAttribute("aria-label", atributos[7]));
  localStorage.setItem("portfolio-idioma", idioma);
}

document.querySelectorAll("[data-idioma]").forEach(botao => {
  botao.addEventListener("click", () => mudarIdioma(botao.dataset.idioma));
});

const botaoTema = document.querySelector(".botao-tema");
function mudarTema(claro) {
  document.body.classList.toggle("tema-claro", claro);
  botaoTema.setAttribute("aria-pressed", String(claro));
  botaoTema.textContent = claro ? "☾" : "☀";
  const idioma = document.querySelector('[data-idioma][aria-pressed="true"]').dataset.idioma;
  const rotulos = { pt: ["Ativar tema claro", "Ativar tema escuro"], en: ["Switch to light theme", "Switch to dark theme"], es: ["Activar tema claro", "Activar tema oscuro"] };
  botaoTema.setAttribute("aria-label", rotulos[idioma][claro ? 1 : 0]);
  localStorage.setItem("portfolio-tema", claro ? "claro" : "escuro");
}
botaoTema.addEventListener("click", () => mudarTema(!document.body.classList.contains("tema-claro")));
mudarTema(localStorage.getItem("portfolio-tema") === "claro");
mudarIdioma(["pt", "en", "es"].includes(localStorage.getItem("portfolio-idioma")) ? localStorage.getItem("portfolio-idioma") : "pt");
