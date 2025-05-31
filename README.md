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
  <title>Apresentação Oprah Winfrey - Versão Turbinada</title>
  <style>
    * {
      margin: 0; padding: 0; box-sizing: border-box;
    }
    body {
      font-family: 'Arial', sans-serif;
      height: 100vh;
      overflow: hidden;
      background-size: cover;
      background-position: center;
      color: white;
      text-shadow: 2px 2px 7px black;
      transition: background-image 1s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url('st0.jpg');
    }
    #container {
      background-color: rgba(0,0,0,0.45);
      padding: 40px 50px;
      border-radius: 20px;
      max-width: 800px;
      text-align: center;
      min-height: 280px;
      position: relative;
      overflow: hidden;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 20px;
      animation-duration: 1.2s;
      animation-fill-mode: forwards;
      opacity: 0;
    }

    p {
      font-size: 1.5rem;
      margin-bottom: 25px;
      max-width: 750px;
      animation-duration: 1.2s;
      animation-fill-mode: forwards;
      opacity: 0;
    }

    button {
      padding: 14px 28px;
      font-size: 1.3rem;
      border-radius: 14px;
      border: none;
      cursor: pointer;
      background: linear-gradient(45deg, #ff6a00, #ee0979);
      color: white;
      box-shadow: 0 5px 20px rgba(238, 9, 121, 0.6);
      transition: transform 0.3s ease, background 0.4s ease;
      position: relative;
      animation: btnPulse 2.5s infinite;
      user-select: none;
    }
    button:hover {
      background: linear-gradient(45deg, #ee0979, #ff6a00);
      transform: scale(1.1);
      box-shadow: 0 8px 30px rgba(255, 106, 0, 0.8);
    }

    /* Animações do texto - diferentes por slide */
    @keyframes fadeUp {
      0% {opacity: 0; transform: translateY(20px);}
      100% {opacity: 1; transform: translateY(0);}
    }
    @keyframes glowText {
      0%, 100% { text-shadow: 0 0 10px #ff6a00, 0 0 20px #ee0979; opacity:1; }
      50% { text-shadow: 0 0 20px #ffb347, 0 0 30px #ff4500; opacity:0.8;}
    }
    @keyframes smokeFade {
      0% {opacity: 0; filter: blur(8px) grayscale(40%);}
      100% {opacity: 1; filter: blur(0) grayscale(0);}
    }
    @keyframes meltText {
      0% {opacity:1; transform: translateY(0);}
      100% {opacity:0; transform: translateY(40px) skewX(15deg);}
    }
    @keyframes tremor {
      0%, 100% {transform: translate(0,0);}
      20% {transform: translate(-2px,2px);}
      40% {transform: translate(2px,-2px);}
      60% {transform: translate(-1px,1px);}
      80% {transform: translate(1px,-1px);}
    }
    @keyframes btnPulse {
      0%,100% {transform: scale(1);}
      50% {transform: scale(1.05);}
    }

    /* Contêiner que fará transição com efeito explodir/fade */
    .fade-out {
      animation: fadeOutExplode 0.7s forwards;
    }
    @keyframes fadeOutExplode {
      0% {opacity: 1; transform: scale(1);}
      100% {opacity: 0; transform: scale(1.4) rotate(20deg);}
    }
    .fade-in {
      animation: fadeInAppear 1s forwards;
    }
    @keyframes fadeInAppear {
      0% {opacity: 0; transform: scale(0.85);}
      100% {opacity: 1; transform: scale(1);}
    }

  </style>
</head>
<body>
  <div id="container">
    <h1 id="title">Apresentação Interativa</h1>
    <p id="text">Bem-vindo! Clique para iniciar a jornada inspiradora de Oprah Winfrey.</p>
    <button id="btn">Iniciar</button>
  </div>

  <audio id="bgMusic" loop></audio>
  <audio id="transitionSound"></audio>
  <audio id="clickSound" src="click.wav"></audio>

  <script>
    const slides = [
      {
        bg: "st1.gif",
        text: "Introdução: Oprah Winfrey é um dos maiores exemplos de superação e sucesso. De uma infância pobre ao topo da mídia mundial.",
        music: "musica.mp3",
        effect: "glowText",
        transitionEffect: "fadeOutExplode",
        clickSound: "click.wav"
      },
      {
        bg: "st2.gif",
        text: "Infância difícil: Nasceu em uma família pobre nos EUA. Sofreu abuso, fome e dificuldades escolares, mas nunca desistiu.",
        music: "musica1.mp3",
        effect: "smokeFade",
        transitionEffect: "fadeOutExplode",
        clickSound: "click2.wav"
      },
      {
        bg: "st3.gif",
        text: "Início da carreira: Aos 19 anos começou como apresentadora de rádio. Sua empatia a tornou rapidamente querida.",
        music: "musica.mp3",
        effect: "fadeUp",
        transitionEffect: "fadeOutExplode",
        clickSound: "click.wav"
      },
      {
        bg: "st4.gif",
        text: "Ascensão: Criou o The Oprah Winfrey Show, revolucionando o talk show americano e se tornando uma referência mundial.",
        music: "musica1.mp3",
        effect: "tremor",
        transitionEffect: "fadeOutExplode",
        clickSound: "click3.wav"
      },
      {
        bg: "st5.gif",
        text: "Empreendedora: Fundou sua própria produtora e canal, tornando-se a primeira mulher negra bilionária dos EUA.",
        music: "musica.mp3",
        effect: "meltText",
        transitionEffect: "fadeOutExplode",
        clickSound: "click.wav"
      },
      {
        bg: "st6.jpg",
        text: "Legado: Além do sucesso financeiro, Oprah é símbolo de inspiração, filantropia e voz ativa por igualdade.",
        music: "musica1.mp3",
        effect: "glowText",
        transitionEffect: "fadeOutExplode",
        clickSound: "click2.wav"
      }
    ];

    const container = document.getElementById("container");
    const title = document.getElementById("title");
    const text = document.getElementById("text");
    const btn = document.getElementById("btn");
    const bgMusic = document.getElementById("bgMusic");
    const transitionSound = document.getElementById("transitionSound");
    const clickSound = document.getElementById("clickSound");

    let index = 0;

    // Função para trocar música com fade out e fade in
    function changeMusic(newSrc) {
      if (bgMusic.src.includes(newSrc)) return; // mesma música, não troca
      let vol = 1;
      const fadeOutInterval = setInterval(() => {
        vol -= 0.1;
        if (vol <= 0) {
          clearInterval(fadeOutInterval);
          bgMusic.src = newSrc;
          bgMusic.play();
          const fadeInInterval = setInterval(() => {
            vol += 0.1;
            if (vol >= 1) {
              clearInterval(fadeInInterval);
            }
            bgMusic.volume = vol;
          }, 100);
        }
        bgMusic.volume = vol;
      }, 100);
    }

    function playTransitionSound(src) {
      transitionSound.src = src;
      transitionSound.currentTime = 0;
      transitionSound.play();
    }

    function playClickSound(src) {
      clickSound.src = src;
      clickSound.currentTime = 0;
      clickSound.play();
    }

    function applyEffect(effectName, element) {
      // Remove animações anteriores
      element.style.animation = 'none';
      void element.offsetWidth; // trigger reflow
      element.style.animation = effectName + ' 1.2s ease forwards';
    }

    function nextSlide() {
      if (index >= slides.length) return;

      playClickSound(slides[index].clickSound);
      container.classList.add('fade-out');

      // Ao terminar a animação fade-out, troca conteúdo e inicia fade-in
      container.addEventListener('animationend', () => {
        container.classList.remove('fade-out');
        container.classList.add('fade-in');

        const slide = slides[index];
        document.body.style.backgroundImage = `url('${slide.bg}')`;
        title.textContent = "Oprah Winfrey";
        text.textContent = slide.text;
        btn.textContent = index === slides.length - 1 ? "Finalizar" : "Continuar";

        applyEffect(slide.effect, text);
        applyEffect(slide.effect, title);

        changeMusic(slide.music);
        playTransitionSound("ip.wav");

        index++;

        container.addEventListener('animationend', () => {
          container.classList.remove('fade-in');
        }, { once: true });
      },
