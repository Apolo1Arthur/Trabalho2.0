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
  <meta charset="UTF-8">
  <title>Apresentação Oprah Winfrey</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Arial', sans-serif;
      height: 100vh;
      overflow: hidden;
      background-size: cover;
      background-position: center;
      color: white;
      text-shadow: 2px 2px 5px black;
      transition: background-image 1s ease-in-out;
    }

    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      text-align: center;
      padding: 30px;
      background-color: rgba(0, 0, 0, 0.4);
      animation: fadeIn 1s ease-in;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 20px;
      animation: popIn 1s ease-in-out;
    }

    p {
      font-size: 1.5rem;
      max-width: 800px;
      margin-bottom: 20px;
      animation: slideIn 1s ease-in-out;
    }

    button {
      padding: 12px 24px;
      font-size: 1.2rem;
      margin-top: 20px;
      cursor: pointer;
      border: none;
      border-radius: 12px;
      background: linear-gradient(to right, #ff6a00, #ee0979);
      color: white;
      box-shadow: 0 4px 15px rgba(0,0,0,0.5);
      transition: transform 0.3s, background 0.5s;
      animation: pulse 2s infinite;
    }

    button:hover {
      transform: scale(1.05);
      background: linear-gradient(to right, #ee0979, #ff6a00);
    }

    @keyframes fadeIn {
      from {opacity: 0;}
      to {opacity: 1;}
    }

    @keyframes popIn {
      0% { transform: scale(0.7); opacity: 0; }
      100% { transform: scale(1); opacity: 1; }
    }

    @keyframes slideIn {
      0% { transform: translateY(50px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
  </style>
</head>
<body style="background-image: url('st0.jpg');">
  <div class="container" id="content">
    <h1>Apresentação Interativa</h1>
    <p>Bem-vindo! Clique para iniciar a jornada inspiradora de Oprah Winfrey.</p>
    <button onclick="nextSlide()">Iniciar</button>
  </div>

  <audio id="bgMusic" loop></audio>
  <audio id="transitionSound" src="ip.wav"></audio>

  <script>
    const slides = [
      {
        bg: "st1.gif",
        text: "Introdução: Oprah Winfrey é um dos maiores exemplos de superação e sucesso. De uma infância pobre ao topo da mídia mundial.",
        music: "musica.mp3"
      },
      {
        bg: "st2.gif",
        text: "Infância difícil: Nasceu em uma família pobre nos EUA. Sofreu abuso, fome e dificuldades escolares, mas nunca desistiu.",
        music: "musica1.mp3"
      },
      {
        bg: "st3.gif",
        text: "Início da carreira: Aos 19 anos começou como apresentadora de rádio. Sua empatia a tornou rapidamente querida.",
        music: "musica.mp3"
      },
      {
        bg: "st4.gif",
        text: "Ascensão: Criou o The Oprah Winfrey Show, revolucionando o talk show americano e se tornando uma referência mundial.",
        music: "musica1.mp3"
      },
      {
        bg: "st5.gif",
        text: "Empreendedora: Fundou sua própria produtora e canal, tornando-se a primeira mulher negra bilionária dos EUA.",
        music: "musica.mp3"
      },
      {
        bg: "st6.jpg",
        text: "Legado: Além do sucesso financeiro, Oprah é símbolo de inspiração, filantropia e voz ativa por igualdade.",
        music: "musica1.mp3"
      }
    ];

    let index = 0;

    function nextSlide() {
      if (index >= slides.length) return;

      const slide = slides[index];
      document.body.style.backgroundImage = `url('${slide.bg}')`;

      const container = document.getElementById("content");
      container.innerHTML = `
        <h1>Oprah Winfrey</h1>
        <p>${slide.text}</p>
        <button onclick="nextSlide()">Continuar</button>
      `;

      // Efeito sonoro de transição
      const sound = document.getElementById("transitionSound");
      sound.currentTime = 0;
      sound.play();

      // Música de fundo
      const music = document.getElementById("bgMusic");
      music.src = slide.music;
      music.play();

      index++;
    }
  </script>
</body>
</html>
