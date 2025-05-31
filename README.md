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
    /* Estilos (sem alterações aqui para brevidade, você pode manter os seus) */
    /* ... Todo o seu CSS permanece igual ... */
    /* Botão "Ver Capítulos" */
    #chapterBtn {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 10;
      padding: 10px 18px;
      font-size: 1rem;
      border: none;
      border-radius: 10px;
      background-color: rgba(255,255,255,0.8);
      cursor: pointer;
      transition: background-color 0.3s;
    }
    #chapterBtn:hover {
      background-color: white;
    }

    .chapter-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      margin-top: 20px;
    }

    .chapter-link {
      font-size: 1.1rem;
      padding: 10px 20px;
      background-color: rgba(255,255,255,0.1);
      border: 1px solid white;
      border-radius: 10px;
      cursor: pointer;
      transition: background 0.3s;
    }

    .chapter-link:hover {
      background-color: rgba(255,255,255,0.3);
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

<button id="chapterBtn">Ver Capítulos</button>
<div id="titleIntro">História de Oprah Winfrey</div>

<audio id="backgroundMusic" autoplay loop></audio>
<audio id="clickSound" src="ip.wav"></audio>

<script>
  const slideDiv = document.getElementById('slide');
  const bgMusic = document.getElementById('backgroundMusic');
  const clickSound = document.getElementById('clickSound');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const textBox = document.getElementById('textBox');
  const chapterBtn = document.getElementById('chapterBtn');
  const titleIntro = document.getElementById('titleIntro');

  // Total de slides (0: intro, 1–6 capítulos, 7: slide de capítulos)
  const totalSlides = 8;
  let currentIndex = 0;

  const textos = [
    '', // 0 - Introdução
    'Capítulo 1: Oprah nasceu em uma família pobre no Mississippi, enfrentando adversidades desde cedo. Seu talento e determinação a impulsionaram a superar desafios e mudar seu destino.',
    'Capítulo 2: A infância marcada por dificuldades e perseverança moldou sua resiliência e empatia únicas.',
    'Capítulo 3: Com apenas 19 anos, Oprah iniciou sua carreira na TV local, conquistando o público com seu carisma.',
    'Capítulo 4: Apresentando seu próprio talk show, Oprah revolucionou a TV americana com empatia e temas relevantes.',
    'Capítulo 5: Ela expandiu seus negócios e se tornou uma das mulheres mais influentes do mundo.',
    'Capítulo 6: Seu legado vai além do entretenimento, com forte atuação social e inspiração global.',
    'Escolha um capítulo para visitar:',
  ];

  const imagens = [
    '',           // 0 - Intro
    'st0.jpg',    // 1
    'st1.gif',    // 2
    'st2.gif',    // 3
    'st3.gif',    // 4
    'st4.gif',    // 5
    'st5.jpg',    // 6
    'stx.jpg',    // 7 - Slide capítulos
  ];

  const musicas = [
    '',              // 0
    'musica0.mp3',   // 1
    'musica1.mp3',   // 2
    'musica2.mp3',   // 3
    'musica3.mp3',   // 4
    'musica4.mp3',   // 5
    'musica5.mp3',   // 6
    'musicax.mp3',   // 7 - Capítulos
  ];

  const animacoesFundo = [
    '', 'slideFadeZoomIn 2s ease forwards', 'slideBlurIn 2.5s ease forwards',
    'slideSlideFromLeft 2s ease forwards', 'slideRotateIn 2s ease forwards',
    'slideZoomInOut 2.5s ease forwards', 'slideSlideFromBottom 2s ease forwards',
    'slideZoomInOut 2s ease forwards'
  ];

  const animacoesTexto = [
    '', 'textFadeIn 2s ease forwards', 'textSlideFromRight 2s ease forwards',
    'textZoomIn 2s ease forwards', 'textRotateIn 2s ease forwards',
    'textSlideFromTop 2s ease forwards', 'textBlink 3s ease infinite',
    'textFadeIn 2s ease forwards'
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
      textBox.textContent = '';
      textBox.style.opacity = 0;
      textBox.style.animation = '';
    } else {
      titleIntro.style.display = 'none';
      slideDiv.style.backgroundImage = `url(${imagens[currentIndex]})`;
      slideDiv.style.animation = animacoesFundo[currentIndex];
      textBox.innerHTML = textos[currentIndex];
      textBox.style.animation = animacoesTexto[currentIndex];

      // Slide especial: Ver capítulos
      if (currentIndex === 7) {
        renderChapterLinks();
      } else {
        textBox.innerHTML = textos[currentIndex];
      }
    }

    playBackgroundMusic(currentIndex);
  }

  function renderChapterLinks() {
    const list = document.createElement('div');
    list.className = 'chapter-list';
    for (let i = 1; i <= 6; i++) {
      const btn = document.createElement('div');
      btn.className = 'chapter-link';
      btn.textContent = `Ir para Capítulo ${i}`;
      btn.onclick = () => {
        currentIndex = i;
        updateSlide();
      };
      list.appendChild(btn);
    }
    textBox.innerHTML = textos[7];
    textBox.appendChild(list);
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

  chapterBtn.addEventListener('click', () => {
    currentIndex = 7;
    updateSlide();
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
