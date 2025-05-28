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
  <title>Oprah Winfrey - História de Sucesso</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-image 1s ease-in-out;
  position: relative;
  overflow-x: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 0;
  transition: background-color 0.5s ease;
}

.container {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 50px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: fadeIn 1s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.buttons {
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

button {
  padding: 14px 30px;
  border: none;
  border-radius: 25px;
  background: linear-gradient(145deg, #ff8c7a, #ff4f4f);
  color: white;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, background 0.3s ease;
}

button:hover {
  transform: scale(1.08);
  background: linear-gradient(145deg, #ff4f4f, #ff8c7a);
}

.content {
  font-size: 19px;
  line-height: 1.8;
  display: none;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  padding: 30px;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
  animation: fadeSlide 0.8s ease forwards;
}

@keyframes fadeSlide {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #ffdbdb;
}

  </style>
</head>
<body>
  <div class="overlay"></div>
  <div class="container">
    <div class="buttons">
      <button onclick="showContent(0)">Introdução</button>
      <button onclick="showContent(1)">Infância</button>
      <button onclick="showContent(2)">Início da Carreira</button>
      <button onclick="showContent(3)">Empreendedorismo</button>
      <button onclick="showContent(4)">Lições</button>
      <button onclick="showContent(5)">Conclusão</button>
    </div><div class="content" id="content0">
  <h2>Introdução</h2>
  <p>Neste trabalho, vamos conhecer a inspiradora história de Oprah Winfrey, uma mulher que superou a pobreza extrema, os abusos na infância e o racismo para se tornar uma das empresárias e comunicadoras mais influentes do mundo. Sua trajetória mostra como a determinação e a inteligência emocional podem transformar vidas e inspirar milhões de pessoas.</p>
</div>

<div class="content" id="content1">
  <h2>Infância e Dificuldades</h2>
  <p>Oprah nasceu em 1954, no Mississippi (EUA), durante a segregação racial. Criada pela avó em extrema pobreza, vestia roupas feitas de sacos de batata. Sofreu abusos sexuais durante a infância e engravidou aos 14 anos, perdendo o bebê pouco depois. Apesar disso, manteve o foco nos estudos e desenvolveu uma paixão pela comunicação.</p>
</div>

<div class="content" id="content2">
  <h2>Início da Carreira</h2>
  <p>Aos 17 anos, Oprah conseguiu um emprego em uma rádio local. Logo passou para a TV, onde se destacou como comunicadora. Sua grande virada foi em 1986, ao lançar o "The Oprah Winfrey Show", que se tornou um marco na televisão e a catapultou para o sucesso.</p>
</div>

<div class="content" id="content3">
  <h2>Empreendedorismo e Conquistas</h2>
  <p>Oprah fundou sua própria empresa, a Harpo Productions, e criou um império de mídia. Lançou revistas, livros, filmes e seu próprio canal de TV. Foi a primeira mulher negra bilionária segundo a Forbes. Seu trabalho filantrópico também é destaque, principalmente na educação de meninas.</p>
</div>

<div class="content" id="content4">
  <h2>Lições para a Administração</h2>
  <p>Oprah é exemplo de resiliência, visão estratégica e liderança empática. Construiu uma marca pessoal poderosa, baseada em confiança e autenticidade. Sua história mostra como é possível empreender com propósito e impacto social.</p>
</div>

<div class="content" id="content5">
  <h2>Conclusão</h2>
  <p>Oprah Winfrey é a prova de que é possível transformar dor em sucesso. Superou barreiras sociais, econômicas e raciais, tornando-se uma referência mundial de liderança e empreendedorismo. Sua jornada inspira qualquer um que deseja vencer com propósito.</p>
</div>

  </div><audio id="audioPlayer"></audio>

  <script>
    const contents = document.querySelectorAll('.content');
    const audio = document.getElementById('audioPlayer');
    const gifs = ['st1.gif', 'st2.gif', 'st3.gif', 'st4.gif', 'st5.gif', 'st6.jpg'];
    const musics = ['musica.mp3', 'musica1.mp3', 'musica1.mp3', 'musica1.mp3', 'musica1.mp3', 'musica1.mp3'];

    function showContent(index) {
      contents.forEach((c, i) => {
        c.style.display = i === index ? 'block' : 'none';
      });
      document.body.style.backgroundImage = `url('${gifs[index]}')`;
      audio.src = musics[index];
      audio.play();
    }
  </script></body>
</html>
