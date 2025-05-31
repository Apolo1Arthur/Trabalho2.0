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
  <title>Apresentação Oprah Winfrey com Capítulos e Animação</title>
  <style>
    * {
      margin:0; padding:0; box-sizing:border-box;
    }
    body, html {
      height: 100%;
      font-family: 'Arial', sans-serif;
      background-size: cover;
      background-position: center;
      color: white;
      text-shadow: 2px 2px 7px black;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background-image 1s ease-in-out;
      background-image: url('st0.jpg');
      user-select: none;
      overflow: hidden;
      position: relative;
    }

    #wrapper {
      display: flex;
      width: 90%;
      max-width: 1000px;
      min-height: 400px;
      background-color: rgba(0,0,0,0.6);
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 0 25px rgba(0,0,0,0.7);
      position: relative;
      z-index: 1;
    }

    #container {
      flex: 1 1 auto;
      padding: 30px 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      z-index: 2;
    }
    h1 {
      font-size: 2.8rem;
      margin-bottom: 20px;
    }
    p {
      font-size: 1.3rem;
      margin-bottom: 30px;
      line-height: 1.5;
    }
    #controls {
      display: flex;
      gap: 15px;
      justify-content: center;
    }
    button {
      padding: 12px 28px;
      font-size: 1.1rem;
      border-radius: 12px;
      border: none;
      cursor: pointer;
      background: linear-gradient(45deg, #ff6a00, #ee0979);
      color: white;
      box-shadow: 0 5px 20px rgba(238, 9, 121, 0.6);
      transition: transform 0.25s ease, background 0.3s ease;
      user-select: none;
    }
    button:hover:not(:disabled) {
      background: linear-gradient(45deg, #ee0979, #ff6a00);
      transform: scale(1.05);
      box-shadow: 0 8px 30px rgba(255, 106, 0, 0.8);
    }
    button:disabled {
      cursor: default;
      background: gray;
      box-shadow: none;
      transform: none;
      opacity: 0.6;
    }

    /* Barra lateral de capítulos */
    #chapters {
      width: 280px;
      background: rgba(0,0,0,0.85);
      overflow-y: auto;
      border-left: 2px solid #ee0979;
      display: flex;
      flex-direction: column;
      padding: 15px;
      position: relative;
      z-index: 2;
    }
    #chapters h2 {
      font-size: 1.6rem;
      text-align: center;
      margin-bottom: 15px;
      color: #ff6a00;
      user-select: none;
    }
    .chapter-btn {
      background: transparent;
      border: 2px solid #ee0979;
      color: white;
      font-size: 1rem;
      padding: 10px 12px;
      margin-bottom: 8px;
      border-radius: 10px;
      text-align: left;
      cursor: pointer;
      transition: background 0.3s ease, color 0.3s ease;
      user-select: none;
    }
    .chapter-btn:hover {
      background: #ff6a00;
      color: black;
      border-color: #ff6a00;
    }
    .chapter-btn.active {
      background: #ee0979;
      color: white;
      border-color: #ee0979;
      cursor: default;
      font-weight: bold;
    }

    /* Scroll custom */
    #chapters::-webkit-scrollbar {
      width: 8px;
    }
    #chapters::-webkit-scrollbar-thumb {
      background: #ee0979;
      border-radius: 4px;
    }
    #chapters::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Responsivo */
    @media (max-width: 768px) {
      #wrapper {
        flex-direction: column;
        max-width: 95%;
        min-height: 600px;
      }
      #chapters {
        width: 100%;
        border-left: none;
        border-top: 2px solid #ee0979;
        flex-direction: row;
        flex-wrap: wrap;
        max-height: 120px;
        overflow-x: auto;
        padding: 10px 5px;
        gap: 8px;
      }
      .chapter-btn {
        flex: 1 1 auto;
        margin-bottom: 0;
        text-align: center;
        font-size: 0.9rem;
        padding: 8px 6px;
      }
      #container {
        padding: 20px 25px;
      }
    }

    /* Animação da fumaça */
    .smoke {
      position: fixed;
      pointer-events: none;
      width: 150px;
      height: 150px;
      background: url('https://i.imgur.com/3xGlcU8.png') no-repeat center/contain; /* fumaça PNG com fundo transparente */
      opacity: 0;
      animation: smokeFade 6s ease forwards;
      filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.6));
      z-index: 3;
      user-select: none;
    }

    @keyframes smokeFade {
      0% {
        opacity: 0;
        transform: scale(0.3) translateY(20px);
      }
      20% {
        opacity: 0.6;
        transform: scale(1) translateY(0);
      }
      80% {
        opacity: 0.6;
        transform: scale(1) translateY(-20px);
      }
      100% {
        opacity: 0;
        transform: scale(0.3) translateY(-40px);
      }
    }
  </style>
</head>
<body>

  <div id="wrapper">
    <div id="container">
      <h1 id="title">Apresentação Interativa</h1>
      <p id="text">Clique em Iniciar para começar a apresentação inspiradora de Oprah Winfrey.</p>
      <div id="controls">
        <button id="btnStart">Iniciar</button>
        <button id="btnBack" disabled>Voltar</button>
        <button id="btnNext" disabled>Próximo</button>
      </div>
    </div>

    <div id="chapters">
      <h2>Capítulos</h2>
      <!-- Botões serão gerados aqui pelo JS -->
    </div>
  </div>

<script>
  const slides = [
    { bg: "st1.gif", title: "Introdução", text: "Oprah Winfrey é um dos maiores exemplos de superação e sucesso. De uma infância pobre ao topo da mídia mundial." },
    { bg: "st2.gif", title: "Infância Difícil", text: "Nasceu em uma família pobre nos EUA. Sofreu abuso, fome e dificuldades escolares, mas nunca desistiu." },
    { bg: "st3.gif", title: "Início da Carreira", text: "Aos 19 anos começou como apresentadora de rádio. Sua empatia a tornou rapidamente querida." },
    { bg: "st4.gif", title: "Ascensão", text: "Criou o The Oprah Winfrey Show, revolucionando o talk show americano e se tornando uma referência mundial." },
    { bg: "st5.gif", title: "Empreendedora", text: "Fundou sua própria produtora e canal, tornando-se a primeira mulher negra bilionária dos EUA." },
    { bg: "st6.jpg", title: "Legado", text: "Além do sucesso financeiro, Oprah é símbolo de inspiração, filantropia e voz ativa por igualdade." }
  ];

  const container = document.getElementById('container');
  const titleEl = document.getElementById('title');
  const textEl = document.getElementById('text');
  const btnStart = document.getElementById('btnStart');
  const btnBack = document.getElementById('btnBack');
  const btnNext = document.getElementById('btnNext');
  const chaptersDiv = document.getElementById('chapters');

  let currentIndex = -1;

  // Cria os botões dos capítulos
  function criarBotoesCapitulos() {
    const oldBtns = chaptersDiv.querySelectorAll('.chapter-btn');
    oldBtns.forEach(btn => btn.remove());
