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
  <title>História de Oprah Winfrey</title>
  <style>
    * {margin: 0; padding: 0; box-sizing: border-box;}
    html, body {
      width: 100%;
      height: 100%;
      overflow: hidden;
      font-family: sans-serif;
      background-color: black;
      color: white;
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
      padding: 40px;
      text-align: center;
      animation: fadeIn 1s ease forwards;
    }
    #textBox {
      max-width: 800px;
      background-color: rgba(0,0,0,0.6);
      border-radius: 15px;
      padding: 25px;
      font-size: 1.6rem;
      line-height: 1.5;
      animation: floatText 4s ease-in-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes floatText {
      0% {transform: translateY(50px) scale(0.9); opacity: 0;}
      50% {transform: translateY(0) scale(1.05); opacity: 1;}
      100% {transform: translateY(0) scale(1); opacity: 1;}
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
      border: none;
      border-radius: 10px;
      font-size: 1.1rem;
      cursor: pointer;
      background: rgba(255,255,255,0.8);
      transition: background 0.3s;
    }
    button:hover {
      background: white;
    }
    #introSlide {
      position: absolute;
      inset: 0;
      background: url('st0.jpg') no-repeat center center/cover;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      z-index: 999;
    }
    #introSlide h1 {
      font-size: 3rem;
      margin-bottom: 30px;
      text-shadow: 2px 2px 10px black;
    }
    #startBtn {
      padding: 15px 30px;
      font-size: 1.3rem;
      border-radius: 15px;
      background-color: #fff;
      color: #000;
    }
  </style>
</head>
<body>

<div id="introSlide">
  <h1>História de Oprah Winfrey</h1>
  <button id="startBtn">Iniciar</button>
</div>

<div id="slide">
  <div id="textBox"></div>
</div>

<div id="controls" style="display:none;">
  <button id="chapterBtn">Ver Capítulos</button>
  <button id="prevBtn">Anterior</button>
  <button id="nextBtn">Próximo</button>
</div>

<audio id="bgMusic" autoplay loop></audio>
<audio id="clickSound" src="ip.wav"></audio>

<script>
  const slides = [
    { imagem: 'st0.jpg', musica: 'musica0.mp3', texto: '' },
    { imagem: 'st1.gif', musica: 'musica1.mp3', texto: 'Capítulo 1:\nOprah nasceu em meio à pobreza no Mississippi. Ainda criança, enfrentou abusos e dificuldades, mas demonstrava desde cedo uma inteligência e talento notáveis.' },
    { imagem: 'st2.gif', musica: 'musica2.mp3', texto: 'Capítulo 2:\nSua adolescência foi marcada por superações. Oprah venceu as estatísticas e ganhou uma bolsa de estudos, tornando-se repórter aos 19 anos.' },
    { imagem: 'st3.gif', musica: 'musica3.mp3', texto: 'Capítulo 3:\nCom sua empatia e autenticidade, Oprah conquistou o público, tornando-se apresentadora de talk show e rapidamente se destacou em todo o país.' },
    { imagem: 'st4.gif', musica: 'musica4.mp3', texto: 'Capítulo 4:\nSeu programa, “The Oprah Winfrey Show”, revolucionou a TV americana e deu voz a temas profundos e sociais com coragem e humanidade.' },
    { imagem: 'st5.gif', musica: 'musica5.mp3', texto: 'Capítulo 5:\nAlém da televisão, Oprah criou uma fundação, incentivou a leitura e investiu em educação, inspirando milhões com sua jornada.' },
    { imagem: 'stx.jpg', musica: 'musicax.mp3', texto: 'Capítulos:\n1. Infância difícil\n2. Adolescência e superação\n3. Início da carreira\n4. O show de Oprah\n5. Impacto social' }
  ];

  let current = 0;

  const slide = document.getElementById('slide');
  const textBox = document.getElementById('textBox');
  const music = document.getElementById('bgMusic');
  const click = document.getElementById('clickSound');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const chapterBtn = document.getElementById('chapterBtn');
  const controls = document.getElementById('controls');
  const introSlide = document.getElementById('introSlide');
  const startBtn = document.getElementById('startBtn');

  function updateSlide(index) {
    const s = slides[index];
    slide.style.backgroundImage = `url('${s.imagem}')`;
    textBox.innerText = s.texto;
    music.src = s.musica;
    music.play();
    click.play();
  }

  prevBtn.onclick = () => {
    if (current > 1) {
      current--;
      updateSlide(current);
    }
  };

  nextBtn.onclick = () => {
    if (current < slides.length - 1) {
      current++;
      updateSlide(current);
    }
  };

  chapterBtn.onclick = () => {
    current = slides.length - 1; // vai pro slide de capítulos
    updateSlide(current);
  };

  startBtn.onclick = () => {
    introSlide.style.display = 'none';
    controls.style.display = 'flex';
    current = 1;
    updateSlide(current);
  };
</script>

</body>
</html>
