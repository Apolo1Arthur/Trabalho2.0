echo "# Trabalho2.0" >> README.md 
git init 
git add README.md 
git commit -m "primeiro commit" 
git branch -M main 
git remote add origin https://github.com/Apolo1Arthur/Trabalho2.0.git
 git push -u origin main

       <!DOCTYPE html><html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Oprah Winfrey - Superação e Sucesso</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Segoe UI', sans-serif;
      color: white;
      overflow: hidden;
    }
    .screen {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: none;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      padding: 2rem;
      background-size: cover;
      background-position: center;
      animation: fadeIn 1.2s ease-in-out;
    }
    .active {
      display: flex;
    }
    button {
      margin-top: 2rem;
      padding: 1rem 2rem;
      font-size: 1.2rem;
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border: 2px solid white;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.4s ease;
    }
    button:hover {
      transform: scale(1.1);
      background: white;
      color: black;
    }
    h1, p {
      margin-bottom: 1rem;
      animation: floatIn 1.4s ease forwards;
    }
    .sparkle {
      position: absolute;
      width: 10px;
      height: 10px;
      background: white;
      border-radius: 50%;
      pointer-events: none;
      animation: sparkleMove 2s infinite;
    }@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes floatIn {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes sparkleMove {
  0% { transform: scale(1) translateY(0); opacity: 1; }
  100% { transform: scale(0.3) translateY(-200px); opacity: 0; }
}

  </style>
</head>
<body>
  <audio id="clickSound" src="ip.wav"></audio>
  <audio id="musicPlayer" loop></audio>  <div id="screen0" class="screen active" style="background-image: url('st0.jpg');">
    <h1>Bem-vindo à Jornada de Oprah Winfrey</h1>
    <p>Clique para começar a descobrir essa história inspiradora.</p>
    <button onclick="nextScreen(1)">Iniciar</button>
  </div>  <div id="screen1" class="screen" style="background-image: url('st1.gif');">
    <h1>Introdução</h1>
    <p>Oprah Winfrey é um exemplo de superação e sucesso. De uma infância pobre ao estrelato mundial.</p>
    <button onclick="nextScreen(2)">Próximo</button>
  </div>  <div id="screen2" class="screen" style="background-image: url('st2.gif');">
    <h1>Infância e Dificuldades</h1>
    <p>Ela nasceu em uma área rural no Mississippi e enfrentou pobreza extrema e abusos na infância.</p>
    <button onclick="nextScreen(3)">Próximo</button>
  </div>  <div id="screen3" class="screen" style="background-image: url('st3.gif');">
    <h1>O Início da Carreira</h1>
    <p>Começou como apresentadora de rádio aos 17 anos e logo se destacou por sua empatia e voz forte.</p>
    <button onclick="nextScreen(4)">Próximo</button>
  </div>  <div id="screen4" class="screen" style="background-image: url('st4.gif');">
    <h1>O Sucesso</h1>
    <p>Apresentando o programa "The Oprah Winfrey Show", se tornou uma das mulheres mais influentes do mundo.</p>
    <button onclick="nextScreen(5)">Próximo</button>
  </div>  <div id="screen5" class="screen" style="background-image: url('st5.gif');">
    <h1>Legado</h1>
    <p>Além da televisão, Oprah se tornou uma empresária, filantropa e inspiração global.</p>
    <button onclick="nextScreen(6)">Finalizar</button>
  </div>  <div id="screen6" class="screen" style="background-image: url('st6.jpg');">
    <h1>Obrigado por assistir!</h1>
    <p>Esperamos que a trajetória de Oprah inspire você a nunca desistir dos seus sonhos.</p>
  </div>  <script>
    const sounds = ["musica1.mp3", "musica2.mp3", "musica3.mp3", "musica4.mp3", "musica5.mp3", "musica6.mp3"];
    let currentScreen = 0;

    function nextScreen(index) {
      document.getElementById("clickSound").play();
      document.getElementById(`screen${currentScreen}`).classList.remove("active");
      document.getElementById(`screen${index}`).classList.add("active");
      document.getElementById("musicPlayer").src = sounds[index - 1] || "";
      document.getElementById("musicPlayer").play();
      currentScreen = index;
      generateSparkle();
    }

    function generateSparkle() {
      for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        sparkle.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 70%)`;
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 2000);
      }
    }

    setInterval(() => {
      if (document.querySelector(`.screen.active`)) {
        const randomEffect = document.createElement("div");
        randomEffect.className = "sparkle";
        randomEffect.style.left = Math.random() * window.innerWidth + 'px';
        randomEffect.style.top = Math.random() * window.innerHeight + 'px';
        document.body.appendChild(randomEffect);
        setTimeout(() => randomEffect.remove(), 2000);
      }
    }, 5000);
  </script></body>
</html>
