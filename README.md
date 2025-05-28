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
  <title>Oprah Winfrey - Superação</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }body, html {
  height: 100%;
  overflow: hidden;
}

.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background-color: black;
}

.background {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
}

.background.active {
  opacity: 1;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

.content {
  padding: 30px;
  max-width: 800px;
  animation: fadeInUp 1s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

button {
  margin-top: 40px;
  padding: 12px 24px;
  font-size: 18px;
  background-color: #ff6a00;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s;
}

button:hover {
  background-color: #ff8c1a;
  transform: scale(1.05);
}

  </style>
</head>
<body>
  <div class="container">
    <img id="bg0" class="background active" src="st1.gif" />
    <img id="bg1" class="background" src="st2.gif" />
    <img id="bg2" class="background" src="st3.gif" />
    <img id="bg3" class="background" src="st4.gif" />
    <img id="bg4" class="background" src="st5.gif" />
    <img id="bg5" class="background" src="st6.jpg" /><div class="overlay"></div>

<div class="content">
  <h1 id="titulo">Oprah Winfrey - Uma História de Superação</h1>
  <p id="texto">
    Oprah nasceu em extrema pobreza, em uma área rural do Mississippi. Enfrentou abusos, discriminação e rejeição desde a infância. Ainda assim, transformou sua dor em força.
  </p>
  <button onclick="proximoSlide()">Próximo</button>
</div>

  </div><audio id="player"></audio>

  <script>
    const titulos = [
      "Oprah Winfrey - Uma História de Superação",
      "Infância Difícil",
      "Ascensão na Carreira",
      "O Sucesso como Empresária",
      "Impacto na Sociedade",
      "Legado e Inspiração"
    ];

    const textos = [
      "Oprah nasceu em extrema pobreza, em uma área rural do Mississippi. Enfrentou abusos, discriminação e rejeição desde a infância. Ainda assim, transformou sua dor em força.",
      "Foi criada pela avó até os 6 anos, depois por uma mãe ausente. Sofreu abuso sexual de parentes e teve uma adolescência marcada por traumas e instabilidade.",
      "Apesar dos desafios, Oprah se destacou como comunicadora. Tornou-se apresentadora de TV e conquistou o público com sua sinceridade e empatia.",
      "Fundou sua própria produtora, Harpo Productions. Tornou-se a primeira mulher negra bilionária dos EUA e um ícone da mídia mundial.",
      "Oprah usou sua influência para apoiar causas sociais, educação e empoderamento feminino. Tornou-se referência global em liderança e superação.",
      "Hoje, Oprah é símbolo de resiliência e exemplo de como é possível vencer, mesmo vindo das condições mais difíceis."
    ];

    const musicas = [
      "musica.mp3",
      "musica1.mp3",
      "musica.mp3",
      "musica1.mp3",
      "musica.mp3",
      "musica1.mp3"
    ];

    let index = 0;

    function proximoSlide() {
      const titulo = document.getElementById("titulo");
      const texto = document.getElementById("texto");
      const player = document.getElementById("player");

      document.getElementById(`bg${index}`).classList.remove("active");

      index = (index + 1) % titulos.length;

      document.getElementById(`bg${index}`).classList.add("active");
      titulo.textContent = titulos[index];
      texto.textContent = textos[index];

      player.src = musicas[index];
      player.play();
    }
  </script></body>
</html>
