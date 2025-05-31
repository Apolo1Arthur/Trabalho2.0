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
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>História de Oprah Winfrey</title>
  <style>
    * {
      margin: 0; padding: 0; box-sizing: border-box;
    }
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
      backdrop-filter: blur(4px);
      animation: aparecerTexto 2s ease forwards;
    }
    @keyframes aparecerTexto {
      0% { transform: scale(0.8); opacity: 0; filter: blur(4px); }
      100% { transform: scale(1); opacity: 1; filter: blur(0); }
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

    /* Estilo da introdução com vídeo */
    #intro {
      position: absolute;
      inset: 0;
      z-index: 20;
      overflow: hidden;
    }
    #introVideo {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
    }
    #introOverlay {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    #introOverlay h1 {
      font-size: 3rem;
      margin-bottom: 20px;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 20px;
      border-radius: 15px;
    }
    #introOverlay button {
      font-size: 1.3rem;
    }
  </style>
</head>
<body>

  <!-- INTRODUÇÃO COM VÍDEO -->
  <div id="intro">
    <video autoplay loop muted playsinline id="introVideo">
      <source src="intro.mp4" type="video/mp4" />
      Seu navegador não suporta vídeo em HTML5.
    </video>
    <div id="introOverlay">
      <h1>História de Oprah Winfrey</h1>
      <button onclick="iniciar()">Iniciar</button>
    </div>
  </div>

  <!-- SLIDE PRINCIPAL -->
  <div id="slide"></div>
  <div id="textBox"></div>

  <!-- CONTROLES -->
  <div id="controls">
    <button id="prevBtn" onclick="mudarSlide(-1)">Anterior</button>
    <button id="nextBtn" onclick="mudarSlide(1)">Próximo</button>
  </div>

  <!-- MÚSICA DE FUNDO -->
  <audio id="bgMusic" loop autoplay></audio>

  <script>
    const slides = [
      {
        img: 'st1.gif',
        musica: 'musica1.mp3',
        texto: `Capítulo 1: O Nascimento\n
Oprah Gail Winfrey nasceu em 29 de janeiro de 1954, em Kosciusko, Mississippi, em meio à pobreza rural e às estruturas raciais do sul dos EUA. Criada por sua avó até os seis anos, vivia em uma casa simples sem encanamento interno. Desde pequena, mostrou sinais de um intelecto aguçado e uma força interior notável. Enquanto outras crianças brincavam, Oprah lia a Bíblia em voz alta e contava histórias para os animais da fazenda.`
      },
      {
        img: 'st2.gif',
        musica: 'musica2.mp3',
        texto: `Capítulo 2: A Infância Sombria\n
Ao mudar-se para viver com a mãe em Milwaukee, sua vida mudou drasticamente. Viveu em bairros violentos e sofreu abusos que deixaram cicatrizes profundas. Apesar disso, encontrou consolo nos livros e na escola. A educação se tornou seu santuário, e suas notas a destacaram entre os colegas. A jovem Oprah já compreendia que seu destino não seria comum.`
      },
      {
        img: 'st3.gif',
        musica: 'musica3.mp3',
        texto: `Capítulo 3: Os Primeiros Passos na Televisão\n
Aos 19 anos, Oprah conquistou um feito raro para uma mulher negra: se tornou âncora de um telejornal local em Nashville. Sua presença carismática e natural diante das câmeras logo chamou a atenção. Mesmo sem formação tradicional, sua empatia transbordava, e ela sabia ouvir como poucos. Esse talento abriria portas gigantescas.`
      },
      {
        img: 'st4.gif',
        musica: 'musica4.mp3',
        texto: `Capítulo 4: A Revolução na TV\n
Em 1986, nasce o “The Oprah Winfrey Show”. Com ele, Oprah transformou a televisão diurna. Abordando temas como racismo, abuso, espiritualidade e cura emocional, ela criou um espaço seguro para vozes silenciadas. Não era só um programa, era um movimento. Oprah fazia as pessoas chorarem, rirem e, acima de tudo, refletirem.`
      },
      {
        img: 'st5.gif',
        musica: 'musica5.mp3',
        texto: `Capítulo 5: O Império de Mídia e Coração\n
Oprah não parou na TV. Criou sua própria produtora, lançou um clube do livro que impulsionava autores desconhecidos às listas de best-sellers, estrelou filmes e tornou-se referência de negócios e generosidade. Sua fundação já investiu milhões em causas sociais e educação, especialmente para meninas negras. Ela provou que é possível ser rica e compassiva.`
      },
      {
        img: 'st6.jpg',
        musica: 'musica6.mp3',
        texto: `Capítulo 6: O Legado\n
Hoje, Oprah é sinônimo de resiliência, liderança e luz. Seu legado transcende a fama. Ela inspira gerações a se amarem, a buscarem a verdade e a usarem suas vozes. Como ela mesma diz: “Transforme suas feridas em sabedoria.” E foi isso que ela fez — e nos ensinou a fazer também.`
      }
    ];

    let index = 0;
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
      textBox.innerHTML = '';
      digitarTexto(atual.texto);
      bgMusic.src = atual.musica;
      bgMusic.play();
      prevBtn.disabled = index === 0;
      nextBtn.disabled = index === slides.length - 1;
    }

    function digitarTexto(texto) {
      let i = 0;
      function escrever() {
        if (i < texto.length) {
          textBox.innerHTML += texto.charAt(i);
          i++;
          setTimeout(escrever, 20);
        }
      }
      escrever();
    }
  </script>
</body>
</html>
