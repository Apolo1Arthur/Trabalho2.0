echo "# Trabalho2.0" >> README.md 
git init 
git add README.md 
git commit -m "primeiro commit" 
git branch -M main 
git remote add origin https://github.com/Apolo1Arthur/Trabalho2.0.git
 git push -u origin main

<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Opera In Frame - Animação Completa</title>
<style>
  /* Reset básico */
  * {
    margin: 0; padding: 0; box-sizing: border-box;
  }
  html, body {
    height: 100%; width: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: black;
    color: white;
    overflow: hidden;
    user-select: none;
  }
  #slide {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 40px 60px 60px;
    text-align: center;
  }
  #textBox {
    max-width: 900px;
    background: rgba(0,0,0,0.6);
    border-radius: 15px;
    padding: 20px 30px;
    font-size: 1.2rem;
    line-height: 1.5;
    opacity: 0;
  }
  #titleIntro {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.2rem;
    font-weight: bold;
    color: #f2e9dc;
    background-color: black;
    animation: fadeInOut 3s ease forwards;
    padding: 0 20px;
    text-align: center;
    z-index: 100;
  }
  @keyframes fadeInOut {
    0% {opacity: 0;}
    30% {opacity: 1;}
    70% {opacity: 1;}
    100% {opacity: 0;}
  }
  #controls {
    position: fixed;
    bottom: 20px;
    display: flex;
    gap: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
  button {
    padding: 12px 25px;
    font-size: 1.2rem;
    border: none;
    border-radius: 12px;
    background-color: rgba(255,255,255,0.8);
    cursor: pointer;
    user-select: none;
    transition: background-color 0.3s;
  }
  button:hover:not(:disabled) {
    background-color: rgba(255,255,255,1);
  }
  button:disabled {
    background-color: rgba(180,180,180,0.5);
    cursor: default;
    animation: none !important;
  }

  /* Botão Anterior - animação pulse suave */
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 0 8px rgba(255,255,255,0.4);
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 0 15px rgba(255,255,255,0.8);
    }
  }
  #prevBtn:enabled {
    animation: pulse 2.5s ease-in-out infinite;
  }

  /* Botão Próximo - animação leve giro */
  @keyframes spinGlow {
    0% {
      transform: rotate(0deg);
      box-shadow: 0 0 5px rgba(255,255,255,0.5);
    }
    50% {
      transform: rotate(10deg);
      box-shadow: 0 0 20px rgba(255,255,255,1);
    }
    100% {
      transform: rotate(0deg);
      box-shadow: 0 0 5px rgba(255,255,255,0.5);
    }
  }
  #nextBtn:enabled {
    animation: spinGlow 3s ease-in-out infinite;
  }

  /* Animações diferentes para o fundo por slide */
  @keyframes slideFadeZoomIn {
    0% {opacity: 0; transform: scale(1.2);}
    100% {opacity: 1; transform: scale(1);}
  }
  @keyframes slideBlurIn {
    0% {filter: blur(15px); opacity: 0;}
    100% {filter: blur(0); opacity: 1;}
  }
  @keyframes slideSlideFromLeft {
    0% {opacity: 0; transform: translateX(-100%);}
    100% {opacity: 1; transform: translateX(0);}
  }
  @keyframes slideRotateIn {
    0% {opacity: 0; transform: rotate(-15deg) scale(0.8);}
    100% {opacity: 1; transform: rotate(0) scale(1);}
  }
  @keyframes slideZoomInOut {
    0% {opacity: 0; transform: scale(0);}
    50% {opacity: 1; transform: scale(1.1);}
    100% {opacity: 1; transform: scale(1);}
  }
  @keyframes slideSlideFromBottom {
    0% {opacity: 0; transform: translateY(100%);}
    100% {opacity: 1; transform: translateY(0);}
  }

  /* Animações diferentes para o texto por slide */
  @keyframes textFadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
  @keyframes textSlideFromRight {
    0% {opacity: 0; transform: translateX(100%);}
    100% {opacity: 1; transform: translateX(0);}
  }
  @keyframes textZoomIn {
    0% {opacity: 0; transform: scale(0);}
    100% {opacity: 1; transform: scale(1);}
  }
  @keyframes textRotateIn {
    0% {opacity: 0; transform: rotate(15deg);}
    100% {opacity: 1; transform: rotate(0);}
  }
  @keyframes textSlideFromTop {
    0% {opacity: 0; transform: translateY(-100%);}
    100% {opacity: 1; transform: translateY(0);}
  }
  @keyframes textBlink {
    0%, 100% {opacity: 0;}
    50% {opacity: 1;}
  }
</style>
</head>
<body>

  <div id="slide"></div>
  <div id="textBox"></div>

  <div id="controls">
    <button id="prevBtn" disabled>Anterior</button>
    <button id="nextBtn">Próximo</button>
  </div>

  <div id="titleIntro">História da Opera In Frame</div>

  <!-- Áudio de fundo e clique -->
  <audio id="backgroundMusic" autoplay loop></audio>
  <audio id="clickSound" src="ip.wav"></audio>

<script>
  const totalSlides = 7; // índice 0 título + 6 capítulos
  let currentIndex = 0;

  const slideDiv = document.getElementById('slide');
  const bgMusic = document.getElementById('backgroundMusic');
  const clickSound = document.getElementById('clickSound');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const textBox = document.getElementById('textBox');
  const titleIntro = document.getElementById('titleIntro');

  // Textos capítulos 1 a 6
  const textos = [
    '', // título índice 0 vazio
    `Capítulo 1: Esta é a introdução da história da Opera In Frame, onde tudo começa de forma misteriosa, com cenas que desafiam a realidade e apresentam os personagens centrais em uma atmosfera enigmática e intrigante.`,
    `Capítulo 2: O enredo se aprofunda, revelando segredos ocultos e conexões inesperadas entre os protagonistas. A narrativa cresce com reviravoltas que prendem a atenção e ampliam o mistério.`,
    `Capítulo 3: As tensões aumentam e os conflitos internos aparecem, explorando a dualidade dos personagens e suas motivações. O clima fica mais denso e a narrativa ganha camadas emocionais complexas.`,
    `Capítulo 4: Um ponto crítico da trama, onde verdades vêm à tona e alianças são testadas. O ritmo acelera e o suspense se intensifica, preparando o terreno para as próximas revelações.`,
    `Capítulo 5: A história atinge seu clímax, com confrontos decisivos e descobertas impactantes. As emoções estão à flor da pele, e o desfecho começa a se desenhar de forma inesperada.`,
    `Capítulo 6: A conclusão que amarra todas as pontas soltas, trazendo respostas e uma reflexão final sobre os temas centrais da obra. Um encerramento que deixa uma marca duradoura no leitor.`
  ];

  // Imagens de fundo (coloque os seus arquivos corretos)
  const imagens = [
    '', // título (fundo preto)
    'st0.jpg',
    'st1.gif',
    'st2.gif',
    'st3.gif',
    'st4.gif',
    'st5.gif',
   'st6.jpg',
    'stx.jpg',
  ];

  // Músicas para cada slide (se quiser)
  const musicas = [
    '', // título não toca música
    'musica0.mp3',
    'musica1.mp3',
    'musica2.mp3',
    'musica3.mp3',
    'musica4.mp3',
    'musica5.mp3',
    'musica6.mp3',
    'musicax.mp3',

    ];

    // Animações diferentes para fundo por slide
    const animacoesFundo = [
      '', // título não tem animação especial
      'slideFadeZoomIn 2s ease forwards',
      'slideBlurIn 2.5s ease forwards',
      'slideSlideFromLeft 2s ease forwards',
      'slideRotateIn 2s ease forwards',
      'slideZoomInOut 2.5s ease forwards',
      'slideSlideFromBottom 2s ease forwards',
    ];

    // Animações diferentes para texto por slide
    const animacoesTexto = [
      '', // título vazio
      'textFadeIn 2s ease forwards',
      'textSlideFromRight 2s ease forwards',
      'textZoomIn 2s ease forwards',
      'textRotateIn 2s ease forwards',
      'textSlideFromTop 2s ease forwards',
      'textBlink 3s ease infinite',
    ];

    function playBackgroundMusic(index) {
      if (musicas[index]) {
        bgMusic.src = musicas[index];
        bgMusic.play();
      } else {
        bgMusic.pause();
        bgMusic.src = '';
      }
    }

    function updateSlide() {
      clickSound.play();

      // Atualiza controles habilitados/desabilitados
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === totalSlides - 1;

      if (currentIndex === 0) {
        // Mostrar título
        titleIntro.style.display = 'flex';
        slideDiv.style.backgroundImage = '';
        slideDiv.style.animation = '';
        textBox.style.opacity = 0;
        textBox.style.opacity = 0;
        textBox.style.animation = '';
        textBox.textContent = '';
      } else {
        // Mostrar capítulo com animações
        titleIntro.style.display = 'none';
        slideDiv.style.backgroundImage = `url(${imagens[currentIndex]})`;
        slideDiv.style.animation = animacoesFundo[currentIndex];

        textBox.textContent = textos[currentIndex];
        textBox.style.opacity = 0;
        textBox.style.animation = animacoesTexto[currentIndex];
        textBox.style.animationFillMode = 'forwards';
      }

      playBackgroundMusic(currentIndex);
    }

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlide();
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateSlide();
      }
    });

    // Remover o título após a animação fadeInOut terminar
    titleIntro.addEventListener('animationend', () => {
      if (currentIndex === 0) {
        titleIntro.style.display = 'none';
      }
    });

    // Inicia a apresentação no slide 0 (título)
    updateSlide();
  </script>
</body>
</html>
   

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <title>Opera In Frame</title>
  <style>
    * {
      margin: 0; padding: 0; box-sizing: border-box;
    }
    html, body {
      height: 100%; width: 100%;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      overflow: hidden;
      background-color: black;
      color: white;
    }
    #slide {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      transition: background-image 1s ease-in-out;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      padding: 40px 60px 60px 60px;
      text-align: center;
    }
    #textBox {
      max-width: 900px;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 15px;
      padding: 20px 30px;
      font-size: 1.2rem;
      line-height: 1.5;
      opacity: 0;
      transition: opacity 1s ease-in-out;
      user-select: none;
    }
    #textBox.visible {
      opacity: 1;
    }
    #titleIntro {
      position: absolute;
      inset: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3.2rem;
      font-weight: bold;
      color: #f2e9dc;
      background-color: black;
      animation: fadeInOut 3s ease forwards;
      user-select: none;
      padding: 0 20px;
      text-align: center;
      z-index: 100;
    }
    @keyframes fadeInOut {
      0% {opacity: 0;}
      30% {opacity: 1;}
      70% {opacity: 1;}
      100% {opacity: 0;}
    }
    #controls {
      position: fixed;
      bottom: 20px;
      display: flex;
      gap: 20px;
      z-index: 10;
    }
    button {
      padding: 12px 25px;
      font-size: 1.2rem;
      border: none;
      border-radius: 12px;
      background-color: rgba(255, 255, 255, 0.8);
      cursor: pointer;
      transition: background-color 0.3s;
      user-select: none;
    }
    button:hover:not(:disabled) {
      background-color: rgba(255, 255, 255, 1);
    }
    button:disabled {
      background-color: rgba(180, 180, 180, 0.5);
      cursor: default;
    }
  </style>
</head>
<body>

  <div id="slide"></div>
  <div id="textBox"></div>

  <div id="controls">
    <button id="prevBtn" disabled>Anterior</button>
    <button id="nextBtn">Próximo</button>
  </div>

  <div id="titleIntro">História da Opera In Frame</div>

  <!-- Áudio de fundo -->
  <audio id="backgroundMusic" autoplay loop></audio>
  <!-- Som de clique -->
  <audio id="clickSound" src="ip.wav"></audio>

  <script>
    const totalSlides = 7; // 0 = título, 1 a 6 capítulos
    let currentIndex = 0;

    const slideDiv = document.getElementById('slide');
    const bgMusic = document.getElementById('backgroundMusic');
    const clickSound = document.getElementById('clickSound');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const textBox = document.getElementById('textBox');
    const titleIntro = document.getElementById('titleIntro');

    // Textos para cada capítulo (1 a 6)
    const chaptersText = [
      "", // 0 = título só, sem texto
      `1º Capítulo: O Início da Jornada
      A Opera In Frame começa com a introdução de uma protagonista misteriosa, cujos segredos são revelados gradualmente. A narrativa nos conduz por um cenário repleto de símbolos enigmáticos e imagens evocativas, onde cada detalhe carrega um significado oculto. Neste capítulo, somos apresentados ao ambiente que dará forma aos acontecimentos posteriores, dando o tom de mistério e expectativa para a história que se desenrolará.`,

      `2º Capítulo: Revelações e Conflitos
      As primeiras revelações trazem à tona conflitos internos da personagem principal, que precisa lidar com escolhas difíceis. A trama se aprofunda nos relacionamentos e nas motivações que guiam as ações, revelando camadas de complexidade emocional. O cenário se torna mais intenso e os elementos visuais refletem a tensão crescente.`,

      `3º Capítulo: Desafios e Transformações
      Conforme a narrativa avança, a protagonista enfrenta obstáculos que desafiam suas crenças e valores. Essa parte é marcada por transformações significativas, tanto no enredo quanto na ambientação, que se torna mais dinâmica e cheia de nuances. O texto convida o leitor a refletir sobre a natureza da mudança e a importância da perseverança.`,

      `4º Capítulo: Segredos do Passado
      Um mergulho no passado revela segredos que explicam os eventos atuais, conectando fios da história que antes pareciam desconexos. As imagens ganham um tom mais sombrio e as músicas acompanham essa atmosfera de descoberta e suspense, enriquecendo a experiência imersiva.`,

      `5º Capítulo: Confronto Final
      O clímax da história se aproxima com um confronto decisivo que testará todos os personagens envolvidos. O texto ganha um ritmo mais acelerado, refletindo a urgência dos acontecimentos. A combinação de som e imagem cria uma tensão palpável, preparando o terreno para a conclusão.`,

      `6º Capítulo: Epílogo e Reflexões
      Encerrando a narrativa, o epílogo traz reflexões sobre as jornadas vividas, deixando perguntas abertas para o futuro. O tom é contemplativo, com uma mistura de melancolia e esperança, enquanto as últimas imagens e sons evocam um sentimento de encerramento e continuidade.` 
    ];

    function loadSlide(index) {
      // Se index = 0: tela título (sem imagem e música normais)
      if (index === 0) {
        slideDiv.style.backgroundImage = `url('st0.jpg')`;
        textBox.classList.remove('visible');
        bgMusic.pause();
        bgMusic.src = "";
        prevBtn.disabled = true;
        nextBtn.disabled = false;
        // Mostra título animado e depois some
        titleIntro.style.display = 'flex';
        setTimeout(() => {
          titleIntro.style.display = 'none';
        }, 3000);
        return;
      }

      // Para os capítulos 1 a 6:
      titleIntro.style.display = 'none';

      // Troca imagem
      const imageName = `st${index}.jpg`;
      slideDiv.style.backgroundImage = `url('${imageName}')`;

      // Troca música
      const musicName = `musica${index}.mp3`;
      bgMusic.src = musicName;
      bgMusic.play();

      // Toca som de clique
      clickSound.currentTime = 0;
      clickSound.play();

      // Texto do capítulo
      textBox.textContent = chaptersText[index];
      // Aparece com fade
      textBox.classList.remove('visible');
      setTimeout(() => {
        textBox.classList.add('visible');
      }, 100);

      // Ajusta estado dos botões
      prevBtn.disabled = (index === 1);
      nextBtn.disabled = (index === totalSlides - 1);
    }

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        loadSlide(currentIndex);
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
        loadSlide(currentIndex);
      }
    });

    // Inicializa na tela do título
    loadSlide(currentIndex);
  </script>

</body>
</html>



<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Intro Misteriosa</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background: black;
      color: white;
      font-family: 'Segoe UI', sans-serif;
      overflow: hidden;
    }

    .intro-container {
      position: relative;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url('fundo_misterioso.gif');
      background-size: cover;
      background-position: center;
    }

    .text {
      position: absolute;
      font-size: 2rem;
      text-align: center;
      max-width: 80%;
      opacity: 0;
      animation: fadeInOut 4s ease-in-out forwards;
    }

    @keyframes fadeInOut {
      0% { opacity: 0; transform: translateY(20px) scale(0.9); filter: blur(4px); }
      25% { opacity: 1; transform: translateY(0px) scale(1); filter: blur(0); }
      75% { opacity: 1; }
      100% { opacity: 0; transform: translateY(-20px) scale(0.9); filter: blur(4px); }
    }
  </style>
</head>
<body>
  <div class="intro-container" id="intro">
    <!-- Textos serão inseridos via JS -->
  </div>

  <script>
    const textos = [
      "O silêncio grita onde não há mais esperança.",
      "Cada passo ecoa memórias esquecidas.",
      "O vazio observa, esperando ser preenchido.",
      "Nada é por acaso... nem mesmo isso.",
      "Você está pronto para ver o que há por trás?",
      "Clique para começar..."
    ];

    const container = document.getElementById('intro');

    let i = 0;

    function mostrarTexto() {
      if (i >= textos.length) {
        container.innerHTML = `<button onclick="window.location.href='apresentacao.html'" style="padding: 12px 24px; font-size: 1.2rem; border: none; background: darkred; color: white; cursor: pointer; border-radius: 10px;">Iniciar</button>`;
        return;
      }

      const textoDiv = document.createElement('div');
      textoDiv.className = 'text';
      textoDiv.style.animationDelay = '0s';
      textoDiv.innerText = textos[i];
      container.appendChild(textoDiv);

      setTimeout(() => {
        textoDiv.remove();
        i++;
        mostrarTexto();
      }, 4000);
    }

    window.onload = () => {
      mostrarTexto();
    };
  </script>
</body>
</html>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Apresentação</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html, body {
      height: 100%;
      width: 100%;
      overflow: hidden;
      font-family: Arial, sans-serif;
    }

    #introScreen {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url('st0.jpg');
      background-size: cover;
      background-position: center;
      z-index: 10;
      animation: fadeIn 1.5s ease-in;
    }

    #introScreen button {
      padding: 20px 40px;
      font-size: 1.8rem;
      background: rgba(0, 0, 0, 0.7);
      border: 2px solid white;
      border-radius: 20px;
      color: white;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
    }

    #introScreen button:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: scale(1.05);
    }

    #slide {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-size: cover;
      background-position: center;
      transition: background-image 1s ease-in-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  </style>
</head>
<body>

  <!-- Tela de introdução -->
  <div id="introScreen">
    <button onclick="startPresentation()">Iniciar Apresentação</button>
  </div>

  <!-- Slide principal -->
  <div id="slide"></div>

  <!-- Áudio da música principal -->
  <audio id="backgroundMusic" autoplay loop></audio>

  <!-- Áudio do som de clique -->
  <audio id="transitionSound" src="ip.wav"></audio>

  <script>
    let index = 0;
    const totalSlides = 10; // Ajuste se tiver mais/menos slides

    function startPresentation() {
      document.getElementById("introScreen").style.display = "none";
      showSlide(index);
    }

    function showSlide(i) {
      const slide = document.getElementById("slide");
      const bgMusic = document.getElementById("backgroundMusic");
      const clickSound = document.getElementById("transitionSound");

      // Nome dos arquivos conforme o padrão
      const bgImage = `st${i}.jpg`;
      const altImage = `st${i}.gif`;
      const music = `musica${i}.mp3`;

      // Tenta usar .jpg, se não existir tenta .gif
      slide.style.backgroundImage = `url('${bgImage}')`;

      // Toca som de clique
      clickSound.currentTime = 0;
      clickSound.play();

      // Troca música
      bgMusic.src = music;
      bgMusic.play();

      // Aguarda 10 segundos e avança
      setTimeout(() => {
        index++;
        if (index < totalSlides) {
          showSlide(index);
        } else {
          endPresentation();
        }
      }, 10000); // 10 segundos por slide
    }

    function endPresentation() {
      const slide = document.getElementById("slide");
      slide.style.backgroundImage = "url('fim.jpg')"; // Imagem final

      const bgMusic = document.getElementById("backgroundMusic");
      bgMusic.src = "musicaFinal.mp3"; // Música final, se desejar
      bgMusic.play();
    }
  </script>
</body>
</html>

