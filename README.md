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
  <title>Oprah Winfrey - Animação Completa</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
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
      animation-fill-mode: forwards;
      white-space: pre-line;
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
      transition: background-color 0.3s;
    }
    button:hover:not(:disabled) {
      background-color: rgba(255,255,255,1);
    }
    button:disabled {
      background-color: rgba(180,180,180,0.5);
      cursor: default;
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); box-shadow: 0 0 8px rgba(255,255,255,0.4); }
      50% { transform: scale(1.05); box-shadow: 0 0 15px rgba(255,255,255,0.8); }
    }
    #prevBtn:enabled { animation: pulse 2.5s ease-in-out infinite; }
    @keyframes spinGlow {
      0% { transform: rotate(0deg); box-shadow: 0 0 5px rgba(255,255,255,0.5); }
      50% { transform: rotate(10deg); box-shadow: 0 0 20px rgba(255,255,255,1); }
      100% { transform: rotate(0deg); box-shadow: 0 0 5px rgba(255,255,255,0.5); }
    }
    #nextBtn:enabled { animation: spinGlow 3s ease-in-out infinite; }

    /* Animações fundo */
    @keyframes slideFadeZoomIn { 0% {opacity: 0; transform: scale(1.2);} 100% {opacity: 1; transform: scale(1);} }
    @keyframes slideBlurIn { 0% {filter: blur(15px); opacity: 0;} 100% {filter: blur(0); opacity: 1;} }
    @keyframes slideSlideFromLeft { 0% {opacity: 0; transform: translateX(-100%);} 100% {opacity: 1; transform: translateX(0);} }
    @keyframes slideRotateIn { 0% {opacity: 0; transform: rotate(-15deg) scale(0.8);} 100% {opacity: 1; transform: rotate(0) scale(1);} }
    @keyframes slideZoomInOut { 0% {opacity: 0; transform: scale(0);} 50% {opacity: 1; transform: scale(1.1);} 100% {opacity: 1; transform: scale(1);} }
    @keyframes slideSlideFromBottom { 0% {opacity: 0; transform: translateY(100%);} 100% {opacity: 1; transform: translateY(0);} }

    /* Animações texto */
    @keyframes textFadeIn { 0% {opacity: 0;} 100% {opacity: 1;} }
    @keyframes textSlideFromRight { 0% {opacity: 0; transform: translateX(100%);} 100% {opacity: 1; transform: translateX(0);} }
    @keyframes textZoomIn { 0% {opacity: 0; transform: scale(0);} 100% {opacity: 1; transform: scale(1);} }
    @keyframes textRotateIn { 0% {opacity: 0; transform: rotate(15deg);} 100% {opacity: 1; transform: rotate(0);} }
    @keyframes textSlideFromTop { 0% {opacity: 0; transform: translateY(-100%);} 100% {opacity: 1; transform: translateY(0);} }
    @keyframes textBlink { 0%, 100% {opacity: 0;} 50% {opacity: 1;} }
  </style>
</head>
<body>
  <div id="slide"></div>
  <div id="textBox"></div>
  <div id="controls">
    <button id="prevBtn" disabled>Anterior</button>
    <button id="nextBtn">Próximo</button>
  </div>
  <div id="titleIntro">História de Oprah Winfrey</div>
  <audio id="backgroundMusic" autoplay loop></audio>
  <audio id="clickSound" src="ip.wav"></audio>

  <script>
    const totalSlides = 7;
    let currentIndex = 0;

    const slideDiv = document.getElementById('slide');
    const bgMusic = document.getElementById('backgroundMusic');
    const clickSound = document.getElementById('clickSound');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const textBox = document.getElementById('textBox');
    const titleIntro = document.getElementById('titleIntro');

    const textos = [
      '',
      'Capítulo 1: O nascimento de Oprah Winfrey em circunstâncias desafiadoras...\nOprah Winfrey nasceu em uma família pobre no Mississippi, enfrentando adversidades desde cedo. Seu talento e determinação a impulsionaram a superar desafios e mudar seu destino.',
      'Capítulo 2: A infância marcada por dificuldades e perseverança...\nDesde cedo, Oprah enfrentou abusos e dificuldades familiares, mas sua força interior a guiou rumo à superação.',
      'Capítulo 3: Os primeiros passos na televisão e o talento nato...\nCom apenas 19 anos, Oprah começou na televisão local. Sua empatia e presença cativante abriram portas importantes na mídia.',
      'Capítulo 4: O sucesso estrondoso de seu talk show e o impacto na cultura...\nO The Oprah Winfrey Show revolucionou a televisão, tornando-se um dos programas mais influentes do mundo.',
      'Capítulo 5: Envolvimento em causas sociais e empoderamento feminino...\nOprah usou sua fama para promover justiça social, educação e inspirar milhões de mulheres ao redor do mundo.',
      'Capítulo 6: Legado de inspiração e transformação de vidas...\nMesmo após o fim do talk show, Oprah continua influenciando gerações por meio de seu trabalho, filantropia e liderança.'
    ];

    const imagens = [
      '', 'st0.jpg', 'st1.gif', 'st2.gif', 'st3.gif', 'st4.gif', 'st5.jpg'
    ];

    const musicas = [
      '', 'musica0.mp3', 'musica1.mp3', 'musica2.mp3', 'musica3.mp3', 'musica4.mp3', 'musica5.mp3'
    ];

    const animacoesFundo = [
      '', 'slideFadeZoomIn 2s ease forwards', 'slideBlurIn 2.5s ease forwards',
      'slideSlideFromLeft 2s ease forwards', 'slideRotateIn 2s ease forwards',
      'slideZoomInOut 2.5s ease forwards', 'slideSlideFromBottom 2s ease forwards'
    ];

    const animacoesTexto = [
      '', 'textFadeIn 2s ease forwards', 'textSlideFromRight 2s ease forwards',
      'textZoomIn 2s ease forwards', 'textRotateIn 2s ease forwards',
      'textSlideFromTop 2s ease forwards', 'textBlink 3s ease infinite'
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
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === totalSlides - 1;

      if (currentIndex === 0) {
        titleIntro.style.display = 'flex';
        slideDiv.style.backgroundImage = '';
        slideDiv.style.animation = '';
        textBox.textContent = '';
        textBox.style.opacity = 0;
        textBox.style.animation = '';
      } else {
        titleIntro.style.display = 'none';
        slideDiv.style.backgroundImage = `url(${imagens[currentIndex]})`;
        slideDiv.style.animation = animacoesFundo[currentIndex];
        textBox.textContent = textos[currentIndex];
        textBox.style.animation = animacoesTexto[currentIndex];
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

    titleIntro.addEventListener('animationend', () => {
      if (currentIndex === 0) {
        titleIntro.style.display = 'none';
      }
    });

    updateSlide();
  </script>
</body>
</html>
