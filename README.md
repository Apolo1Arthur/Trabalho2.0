echo "# Trabalho2.0" >> README.md 
git init 
git add README.md 
git commit -m "primeiro commit" 
git branch -M main 
git remote add origin https://github.com/Apolo1Arthur/Trabalho2.0.git
 git push -u origin main


    
    <!DOCTYPE html><html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>História de Oprah Winfrey</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body {
      width: 100%; height: 100%;
      background-color: black;
      font-family: Arial, sans-serif;
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
      justify-content: center;
      align-items: center;
      padding: 40px;
      animation-fill-mode: forwards;
    }
    #textBox {
      max-width: 90%;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 15px;
      padding: 20px;
      font-size: 1.5rem;
      line-height: 1.6;
      text-align: center;
      margin-bottom: 40px;
      animation: aparecerTexto 2s ease forwards;
    }
    @keyframes aparecerTexto {
      0% { transform: scale(0.8); opacity: 0; }
      100% { transform: scale(1); opacity: 1; }
    }
    #controls {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 20px;
      z-index: 10;
    }
    button {
      padding: 12px 20px;
      border: none;
      border-radius: 8px;
      background: rgba(255,255,255,0.8);
      font-size: 1rem;
      cursor: pointer;
      transition: 0.3s;
    }
    button:hover:not(:disabled) {
      background: white;
    }
    button:disabled {
      opacity: 0.4;
      cursor: default;
    }
    #intro {
      position: absolute;
      inset: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url('st0.jpg') center/cover no-repeat;
      z-index: 20;
      flex-direction: column;
      background-color: black;
    }
    #intro h1 {
      font-size: 3rem;
      margin-bottom: 20px;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 20px;
      border-radius: 15px;
    }
    #intro button {
      font-size: 1.3rem;
    }
  </style>
</head>
<body>
  <div id="intro">
    <h1>História de Oprah Winfrey</h1>
    <button onclick="iniciar()">Iniciar</button>
  </div>
  <div id="slide"></div>
  <div id="textBox"></div>
  <div id="controls">
    <button id="prevBtn" onclick="mudarSlide(-1)">Anterior</button>
    <button id="nextBtn" onclick="mudarSlide(1)">Próximo</button>
  </div>
  <audio id="bgMusic" loop autoplay></audio>
  <script>
    const slides = [
      { img: 'stx.jpg', musica: 'musicax.mp3', texto: 'Escolha um capítulo para explorar a história de Oprah Winfrey.' },
      { img: 'st1.gif', musica: 'musica1.mp3', texto: 'Capítulo 1: O nascimento de Oprah Winfrey em circunstâncias desafiadoras. Ela nasceu em uma família pobre no Mississippi e desde cedo enfrentou dificuldades.' },
      { img: 'st2.gif', musica: 'musica2.mp3', texto: 'Capítulo 2: Infância marcada por pobreza e abusos. Oprah encontrou refúcio na educação e nos livros.' },
      { img: 'st3.gif', musica: 'musica3.mp3', texto: 'Capítulo 3: Início na TV aos 19 anos. Sua empatia e carisma rapidamente a tornaram popular.' },
      { img: 'st4.gif', musica: 'musica4.mp3', texto: 'Capítulo 4: Estreia do talk show que mudaria a TV americana. Oprah abordava temas profundos com sensibilidade.' },
      { img: 'st5.gif', musica: 'musica5.mp3', texto: 'Capítulo 5: Expansão para livros, cinema e causas sociais. Uma mulher de negócios e filantropa.' },
      { img: 'st6.jpg', musica: 'musica6.mp3', texto: 'Capítulo 6: Legado de transformação e empoderamento. Oprah continua inspirando gerações.' }
    ];let index = 0;

const slideDiv = document.getElementById('slide');
const textBox = document.getElementById('textBox');
const bgMusic = document.getElementById('bgMusic');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function iniciar() {
  document.getElementById('intro').style.display = 'none';
  index = 0;
  mostrarSlide();
}

function mudarSlide(direcao) {
  index += direcao;
  if (index < 0) index = 0;
  if (index >= slides.length) index = slides.length - 1;
  mostrarSlide();
}

function mostrarSlide() {
  const atual = slides[index];
  slideDiv.style.backgroundImage = `url('${atual.img}')`;
  textBox.textContent = atual.texto;
  bgMusic.src = atual.musica;
  bgMusic.play();
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === slides.length - 1;
}

  </script>
</body>
</html>
