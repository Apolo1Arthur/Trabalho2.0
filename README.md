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
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Oprah Winfrey - História Interativa</title>
  <style>
    * {margin: 0; padding: 0; box-sizing: border-box;}
    html, body {
      height: 100%; width: 100%; background: black; color: white;
      font-family: 'Segoe UI', sans-serif; overflow: hidden;
    }
    #slide {
      position: absolute; inset: 0;
      background-size: cover; background-position: center;
      display: flex; flex-direction: column;
      justify-content: flex-end; align-items: center;
      padding: 60px 40px; text-align: center;
      animation-fill-mode: forwards;
    }
    #textBox {
      max-width: 800px; padding: 25px 30px;
      background: rgba(0,0,0,0.7); border-radius: 15px;
      font-size: 1.3rem; line-height: 1.6;
      animation-fill-mode: forwards; opacity: 0;
    }
    #controls {
      position: fixed; bottom: 20px;
      left: 50%; transform: translateX(-50%);
      display: flex; gap: 15px;
      z-index: 50;
    }
    button {
      padding: 12px 22px; font-size: 1rem;
      background: rgba(255,255,255,0.85);
      border: none; border-radius: 10px;
      cursor: pointer; transition: 0.3s;
    }
    button:hover:not(:disabled) {
      background: white; color: black;
    }
    button:disabled {
      background: rgba(150,150,150,0.5);
      cursor: default;
    }
    #introSlide {
      position: absolute; inset: 0;
      background: url('st0.jpg') center/cover no-repeat;
      display: flex; flex-direction: column;
      justify-content: center; align-items: center;
      gap: 20px; z-index: 100;
    }
    #introSlide h1 {
      font-size: 3.2rem; color: #fff;
      animation: pulseText 3s ease-in-out infinite;
      text-align: center;
    }
    #startBtn {
      font-size: 1.2rem; padding: 14px 30px;
      border-radius: 12px;
      background-color: rgba(255,255,255,0.9);
    }
    @keyframes pulseText {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.08); opacity: 0.8; }
    }
    @keyframes derreter {
      0% { transform: scaleY(1.3) skewY(5deg); opacity: 0; }
      50% { transform: scaleY(0.8) skewY(-3deg); opacity: 1; }
      100% { transform: scaleY(1) skewY(0); opacity: 1; }
    }
  </style>
</head>
<body>
  <div id="introSlide">
    <h1>História Misteriosa de Oprah Winfrey</h1>
    <button id="startBtn">Iniciar</button>
  </div>  <div id="slide" style="display:none;"></div>
  <div id="textBox"></div>
  <div id="controls" style="display:none;">
    <button id="prevBtn">Anterior</button>
    <button id="chapterBtn">Ver Capítulos</button>
    <button id="nextBtn">Próximo</button>
  </div><audio id="bgMusic" autoplay loop></audio> <audio id="clickSound" src="ip.wav"></audio>

  <script>
    const textos = [
      '',
      'Capítulo 1: O nascimento de Oprah Winfrey... Oprah nasceu no Mississippi, em meio à pobreza e adversidade, mas sua determinação brilhou desde cedo.',
      'Capítulo 2: Infância difícil... Abusos e rejeições marcaram sua infância, mas sua força interior começou a florescer.',
      'Capítulo 3: Primeiros passos na TV... Ainda jovem, Oprah se destacou na televisão local, abrindo caminho com talento único.',
      'Capítulo 4: O talk show que mudou tudo... Seu programa se tornou um marco, abordando temas reais e conectando milhões.',
      'Capítulo 5: O império... Além da TV, criou editoras, rádios e atuou no cinema, tornando-se um ícone global.',
      'Capítulo 6: Filantropia e impacto social... Oprah inspirou e ajudou milhões com doações, educação e exemplo.',
      'Capítulo 7: Um legado eterno... Até hoje, ela segue como símbolo de superação, voz ativa por justiça e igualdade.',
      'Ver Capítulos: Escolha um capítulo para visitar.'
    ];

    const imagens = [
      '', 'st1.gif','st2.gif','st3.gif','st4.gif','st5.gif','st6.jpg','st7.jpg','stx.jpg'
    ];
    const musicas = [
      '', 'musica1.mp3','musica2.mp3','musica3.mp3','musica4.mp3','musica5.mp3','musica6.mp3','musica7.mp3','musicax.mp3'
    ];

    let currentSlide = 0;
    const totalSlides = textos.length - 1;
    const slide = document.getElementById('slide');
    const textBox = document.getElementById('textBox');
    const intro = document.getElementById('introSlide');
    const controls = document.getElementById('controls');
    const bgMusic = document.getElementById('bgMusic');
    const clickSound = document.getElementById('clickSound');

    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const chapterBtn = document.getElementById('chapterBtn');

    function tocarMusica(index) {
      bgMusic.src = musicas[index] || '';
      bgMusic.play();
    }

    function mostrarSlide(index) {
      currentSlide = index;
      clickSound.play();
      slide.style.display = 'flex';
      controls.style.display = 'flex';
      slide.style.backgroundImage = `url(${imagens[index]})`;
      textBox.textContent = '';
      textBox.style.opacity = 0;

      setTimeout(() => {
        textBox.textContent = textos[index];
        textBox.style.animation = 'derreter 1.8s ease';
        textBox.style.opacity = 1;
      }, 200);

      prevBtn.disabled = index <= 1;
      nextBtn.disabled = index >= totalSlides;

      tocarMusica(index);
    }

    document.getElementById('startBtn').onclick = () => {
      intro.style.display = 'none';
      mostrarSlide(1);
    };

    nextBtn.onclick = () => {
      if (currentSlide < totalSlides) mostrarSlide(currentSlide + 1);
    };
    prevBtn.onclick = () => {
      if (currentSlide > 1) mostrarSlide(currentSlide - 1);
    };
    chapterBtn.onclick = () => mostrarSlide(totalSlides);
  </script></body>
</html>
