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
  <title>História de Oprah Winfrey</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body {
      height: 100%; width: 100%;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: black;
      color: white;
      overflow: hidden;
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
      padding: 40px 60px 80px;
      text-align: center;
    }
    #textBox {
      max-width: 900px;
      background: rgba(0,0,0,0.6);
      border-radius: 15px;
      padding: 20px 30px;
      font-size: 1.3rem;
      line-height: 1.6;
      animation: textIntro 2s ease forwards;
    }
    #controls, #extraControls {
      position: fixed;
      bottom: 20px;
      display: none;
      gap: 15px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
    }
    button {
      padding: 12px 22px;
      font-size: 1.1rem;
      border: none;
      border-radius: 10px;
      background-color: rgba(255,255,255,0.85);
      cursor: pointer;
      transition: transform 0.2s, background-color 0.3s;
    }
    button:hover:not(:disabled) {
      transform: scale(1.05);
      background-color: white;
    }
    button:disabled {
      background-color: rgba(180,180,180,0.4);
      cursor: default;
    }
    #startScreen {
      position: absolute;
      inset: 0;
      background-image: url('st0.jpg');
      background-size: cover;
      background-position: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      z-index: 100;
    }
    #startBtn {
      margin-top: 20px;
      padding: 15px 30px;
      font-size: 1.4rem;
      border-radius: 20px;
      background-color: white;
      color: black;
      font-weight: bold;
      box-shadow: 0 0 10px white;
    }

    /* Texto derretido/animado */
    .meltText {
      font-size: 1.3rem;
      animation: melt 2s ease forwards;
    }
    @keyframes melt {
      0% { transform: scaleY(1.2) skewY(2deg); filter: blur(2px); opacity: 0; }
      50% { transform: scaleY(0.8) skewY(-3deg); filter: blur(1px); opacity: 1; }
      100% { transform: scaleY(1) skewY(0); filter: blur(0); opacity: 1; }
    }

    /* Slide animações */
    .slideIn { animation: fadeSlide 2s ease forwards; }
    @keyframes fadeSlide {
      from { opacity: 0; transform: scale(1.1); }
      to { opacity: 1; transform: scale(1); }
    }

  </style>
</head>
<body>

<div id="startScreen">
  <h1 style="font-size:3rem; text-shadow: 0 0 15px white;">História de Oprah Winfrey</h1>
  <button id="startBtn">Iniciar</button>
</div>

<div id="slide"></div>
<div id="textBox" class="meltText"></div>

<div id="controls">
  <button id="prevBtn">Anterior</button>
  <button id="nextBtn">Próximo</button>
</div>

<div id="extraControls">
  <button id="chapterBtn">Ver Capítulos</button>
</div>

<audio id="backgroundMusic" autoplay loop></audio>
<audio id="clickSound" src="ip.wav"></audio>

<script>
  const slide = document.getElementById('slide');
  const textBox = document.getElementById('textBox');
  const startScreen = document.getElementById('startScreen');
  const startBtn = document.getElementById('startBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const chapterBtn = document.getElementById('chapterBtn');
  const controls = document.getElementById('controls');
  const extraControls = document.getElementById('extraControls');
  const bgMusic = document.getElementById('backgroundMusic');
  const clickSound = document.getElementById('clickSound');

  const textos = [
    "", // 0 - início
    "Capítulo 1: Oprah nasceu no Mississippi em uma família pobre, superando desafios desde cedo.",
    "Capítulo 2: Uma infância de dificuldades e abusos moldou sua força e empatia.",
    "Capítulo 3: Aos 19 anos, sua carreira começou na TV local, onde seu carisma brilhou.",
    "Capítulo 4: Com seu talk show, Oprah impactou a cultura americana profundamente.",
    "Capítulo 5: Tornou-se uma empresária poderosa e símbolo de empoderamento feminino.",
    "Capítulo 6: Seu legado vai além da mídia — é um ícone de transformação e generosidade.",
    "Menu de Capítulos: Selecione um capítulo para visitar diretamente."
  ];

  const imagens = [
    "", "st1.jpg", "st2.gif", "st3.gif", "st4.gif", "st5.gif", "st6.jpg", "stx.jpg"
  ];

  const musicas = [
    "", "musica1.mp3", "musica2.mp3", "musica3.mp3", "musica4.mp3", "musica5.mp3", "musica6.mp3", "musicax.mp3"
  ];

  let currentIndex = 0;

  function updateSlide() {
    clickSound.play();
    if (currentIndex === 0) return;

    slide.className = 'slideIn';
    textBox.className = 'meltText';

    slide.style.backgroundImage = `url(${imagens[currentIndex]})`;
    textBox.textContent = textos[currentIndex];

    bgMusic.src = musicas[currentIndex];
    bgMusic.play();

    prevBtn.disabled = currentIndex === 1;
    nextBtn.disabled = currentIndex >= textos.length - 2;
  }

  prevBtn.onclick = () => {
    if (currentIndex > 1) {
      currentIndex--;
      updateSlide();
    }
  };

  nextBtn.onclick = () => {
    if (currentIndex < textos.length - 2) {
      currentIndex++;
      updateSlide();
    }
  };

  startBtn.onclick = () => {
    startScreen.style.display = 'none';
    currentIndex = 1;
    controls.style.display = 'flex';
    extraControls.style.display = 'flex';
    updateSlide();
  };

  chapterBtn.onclick = () => {
    currentIndex = textos.length - 1; // índice do menu de capítulos
    updateSlide();
  };
</script>
</body>
</html>
