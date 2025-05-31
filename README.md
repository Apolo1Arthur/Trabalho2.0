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
      font-family: 'Arial', sans-serif;
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
      transition: background-image 1s ease-in-out;
    }
    #textBox {
      max-width: 90%;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 15px;
      padding: 20px;
      font-size: 1.4rem;
      line-height: 1.7;
      text-align: center;
      margin-bottom: 40px;
      animation: aparecerTexto 2s ease forwards;
      opacity: 0;
    }
    @keyframes aparecerTexto {
      0% { transform: translateY(30px); opacity: 0; filter: blur(5px); }
      100% { transform: translateY(0); opacity: 1; filter: blur(0); }
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
    <button onclick="irParaSlide(0)">Início</button>
    <button id="prevBtn" onclick="mudarSlide(-1)">Anterior</button>
    <button id="nextBtn" onclick="mudarSlide(1)">Próximo</button>
  </div>
  <audio id="bgMusic" loop autoplay></audio>  <script>
    const slides = [
      {
        img: 'stx.jpg',
        musica: 'musicax.mp3',
        texto: `🌌 Introdução:\nSeja bem-vindo à jornada de uma mulher que não apenas viveu sua história, mas a reescreveu com coragem, resiliência e alma. A cada capítulo, mergulharemos em uma fase da vida de Oprah Winfrey — da escuridão ao estrelato, da dor ao poder transformador da voz. Prepare-se para sentir, refletir e se inspirar.`
      },
      {
        img: 'st1.gif',
        musica: 'musica1.mp3',
        texto: `🌱 Capítulo 1: As raízes\nOprah Gail Winfrey nasceu em 29 de janeiro de 1954, em Kosciusko, Mississippi. Filha de uma mãe adolescente solteira, viveu seus primeiros anos envolta pela pobreza extrema. Criada pela avó em uma fazenda sem água encanada, aprendeu a ler antes dos três anos e encantava a todos recitando versos da Bíblia na igreja. Desde cedo, mostrou-se uma alma velha em corpo de menina, carregando nos olhos curiosidade e sabedoria.`
      },
      {
        img: 'st2.gif',
        musica: 'musica2.mp3',
        texto: `🌧️ Capítulo 2: A tempestade da infância\nA infância de Oprah foi marcada por traumas profundos. Entre os 9 e os 14 anos, foi vítima de diversos abusos. Sentia-se invisível, como uma voz perdida em meio ao silêncio. Mas foi na educação que ela encontrou seu refúgio: livros tornaram-se portais para outros mundos, e a escrita, um grito de liberdade. Aos 14 anos, após engravidar e perder o filho, muitos pensaram que tudo acabaria ali. Mas ali começava sua metamorfose.`
      },
      {
        img: 'st3.gif',
        musica: 'musica3.mp3',
        texto: `📺 Capítulo 3: A primeira luz na televisão\nDeterminada a vencer, Oprah conquistou uma bolsa de estudos, destacando-se na escola e na oratória. Aos 19 anos, tornou-se a primeira mulher negra a apresentar as notícias na TV de Nashville. Enfrentou racismo, machismo e dúvidas, mas sua empatia singular a tornou incomparável. Onde muitos liam scripts, ela enxergava histórias. Onde outros viam números, ela via almas.`
      },
      {
        img: 'st4.gif',
        musica: 'musica4.mp3',
        texto: `🎤 Capítulo 4: O show que virou revolução\nEm 1986, nascia o "The Oprah Winfrey Show". Não era apenas um talk show: era um espelho da sociedade. Oprah abordava temas tabus, chorava com os convidados, celebrava conquistas e enfrentava injustiças com ternura e firmeza. Sua presença transformou o programa em um ritual diário para milhões. Pela primeira vez, o sofrimento tinha palco — e escuta.`
      },
      {
        img: 'st5.gif',
        musica: 'musica5.mp3',
        texto: `📚 Capítulo 5: Império de alma e propósito\nOprah fundou sua própria produtora, Harpo, tornando-se uma das mulheres mais poderosas da mídia. Criou clubes de leitura, estrelou filmes, produziu séries e ergueu escolas na África. Sua fortuna cresceu, mas crescia mais sua missão de elevar consciências. Ela usou sua influência para empoderar, educar e inspirar gerações — um império construído não sobre tijolos, mas sobre valores.`
      },
      {
        img: 'st6.jpg',
        musica: 'musica6.mp3',
        texto: `✨ Capítulo 6: O legado eterno\nHoje, Oprah é sinônimo de superação, compaixão e transformação. Seu legado ecoa em ações sociais, em jovens que acreditam no impossível, em mulheres que reencontram suas vozes. Ela mostrou que vulnerabilidade é força, e que histórias podem curar. A história de Oprah não termina — ela se reinventa, como toda grande alma que veio ao mundo para iluminar.`
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

    function irParaSlide(i) {
      index = i;
      mostrarSlide();
    }

    function mostrarSlide() {
      const atual = slides[index];
      slideDiv.style.backgroundImage = `url('${atual.img}')`;
      textBox.style.opacity = 0;
      setTimeout(() => {
        textBox.textContent = '';
        escreverTexto(atual.texto);
        bgMusic.src = atual.musica;
        bgMusic.play();
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === slides.length - 1;
      }, 300);
    }

    function escreverTexto(texto) {
      let i = 0;
      textBox.textContent = '';
      textBox.style.opacity = 1;
      function digita() {
        if (i < texto.length) {
          textBox.textContent += texto.charAt(i);
          i++;
          setTimeout(digita, 20);
        }
      }
      digita();
    }
  </script></body>
</html>
