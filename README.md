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
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Oprah Winfrey - História Interativa</title>
  <style>
    * {margin: 0; padding: 0; box-sizing: border-box;}
    html, body {
      width: 100%; height: 100%;
      font-family: 'Segoe UI', sans-serif;
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
      justify-content: center;
      align-items: center;
      flex-direction: column;
      animation-fill-mode: forwards;
    }

    #intro {
      position: absolute;
      inset: 0;
      background-image: url("st0.jpg");
      background-size: cover;
      background-position: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      z-index: 20;
    }

    #intro h1 {
      font-size: 3rem;
      background: rgba(0, 0, 0, 0.6);
      padding: 20px;
      border-radius: 15px;
      animation: textZoomIn 2s ease forwards;
    }

    #startBtn {
      margin-top: 20px;
      padding: 15px 30px;
      font-size: 1.3rem;
      border: none;
      border-radius: 12px;
      background-color: rgba(255,255,255,0.9);
      color: black;
      cursor: pointer;
      animation: pulse 2s infinite;
    }

    #textBox {
      max-width: 800px;
      margin-top: auto;
      margin-bottom: 100px;
      background: rgba(0, 0, 0, 0.6);
      padding: 20px 30px;
      border-radius: 15px;
      font-size: 1.2rem;
      line-height: 1.6;
      animation-fill-mode: forwards;
      text-align: center;
    }

    #controls {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 15px;
      z-index: 10;
    }

    button {
      padding: 12px 20px;
      font-size: 1rem;
      border: none;
      border-radius: 10px;
      background-color: rgba(255,255,255,0.9);
      color: black;
      cursor: pointer;
      transition: transform 0.3s;
    }

    button:hover:not(:disabled) {
      transform: scale(1.05);
    }

    button:disabled {
      background-color: rgba(150,150,150,0.5);
      cursor: not-allowed;
    }

    /* Animações */
    @keyframes textZoomIn {
      0% { transform: scale(0); opacity: 0; }
      100% { transform: scale(1); opacity: 1; }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); box-shadow: 0 0 10px white; }
      50% { transform: scale(1.05); box-shadow: 0 0 20px white; }
    }

    @keyframes textWiggle {
      0% { transform: rotate(0deg); }
      25% { transform: rotate(1deg); }
      50% { transform: rotate(-1deg); }
      75% { transform: rotate(1deg); }
      100% { transform: rotate(0deg); }
    }
  </style>
</head>
<body>

<div id="intro">
  <h1>História de Oprah Winfrey</h1>
  <button id="startBtn">Iniciar</button>
</div>

<div id="slide">
  <div id="textBox"></div>
</div>

<div id="controls" style="display: none;">
  <button id="prevBtn">Anterior</button>
  <button id="chapterBtn">Ver Capítulos</button>
  <button id="nextBtn">Próximo</button>
</div>

<audio id="bgMusic" autoplay loop></audio>
<audio id="clickSound" src="ip.wav"></audio>

<script>
  const textos = [
    "",
    "Capítulo 1: O nascimento de Oprah Winfrey em circunstâncias desafiadoras...\n\nOprah nasceu no Mississippi em meio à pobreza extrema, enfrentando adversidades desde o início. Mas seu brilho e determinação mudariam o curso de sua vida.",
    "Capítulo 2: A infância marcada por dificuldades e perseverança...\n\nAbusada e rejeitada, Oprah encontrou refúgio nos livros e em sua própria voz. Ela transformou dor em força.",
    "Capítulo 3: Os primeiros passos na televisão...\n\nCom apenas 19 anos, Oprah entrou no jornalismo televisivo e logo mostrou seu carisma único.",
    "Capítulo 4: O sucesso estrondoso do talk show...\n\nThe Oprah Winfrey Show revolucionou a TV, misturando empatia, emoção e temas sociais.",
    "Capítulo 5: Envolvimento em causas sociais...\n\nOprah fundou escolas, doou milhões e usou sua influência para inspirar justiça e educação.",
    "Capítulo 6: Legado e impacto cultural...\n\nDe figura televisiva a ícone global, Oprah representa resiliência, empoderamento e humanidade.",
    "Ver Capítulos:\n\nClique nos botões para explorar cada parte da história de Oprah."
  ];

  const imagens = [
    "st0.jpg", "st1.jpg", "st2.jpg", "st3.jpg", "st4.jpg", "st5.jpg", "st6.jpg", "stx.jpg"
  ];

  const musicas = [
    "musica0.mp3", "musica1.mp3", "musica2.mp3", "musica3.mp3",
    "musica4.mp3", "musica5.mp3", "musica6.mp3", "musicax.mp3"
  ];

  let index = 0;
  const total = textos.length - 1;

  const intro = document.getElementById("intro");
  const slide = document.getElementById("slide");
  const textBox = document.getElementById("textBox");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const chapterBtn = document.getElementById("chapterBtn");
  const controls = document.getElementById("controls");
  const bgMusic = document.getElementById("bgMusic");
  const clickSound = document.getElementById("clickSound");
  const startBtn = document.getElementById("startBtn");

  function updateSlide() {
    slide.style.backgroundImage = `url(${imagens[index]})`;
    textBox.textContent = textos[index];
    textBox.style.animation = "textWiggle 1s ease";
    setTimeout(() => {
      textBox.style.animation = "";
    }, 1000);

    bgMusic.src = musicas[index];
    bgMusic.play();

    prevBtn.disabled = index <= 1;
    nextBtn.disabled = index >= total - 1;
  }

  startBtn.onclick = () => {
    clickSound.play();
    intro.style.display = "none";
    controls.style.display = "flex";
    index = 1;
    updateSlide();
  };

  nextBtn.onclick = () => {
    if (index < total) {
      index++;
      clickSound.play();
      updateSlide();
    }
  };

  prevBtn.onclick = () => {
    if (index > 1) {
      index--;
      clickSound.play();
      updateSlide();
    }
  };

  chapterBtn.onclick = () => {
    index = total;
    clickSound.play();
    updateSlide();
  };
</script>

</body>
</html>
