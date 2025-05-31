echo "# Trabalho2.0" >> README.md 
git init 
git add README.md 
git commit -m "primeiro commit" 
git branch -M main 
git remote add origin https://github.com/Apolo1Arthur/Trabalho2.0.git
 git push -u origin main

       
<!DOCTYPE html><html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Oprah Winfrey: Superação e Sucesso</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap');* {
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(to right, #1e1e2f, #3b2d50);
  color: #fff;
  margin: 0;
  padding: 20px;
  text-align: center;
  overflow-x: hidden;
}

h1 {
  font-size: 2.5em;
  color: #f4c430;
  text-shadow: 2px 2px 5px #000;
}

button {
  margin: 10px;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background: #9b59b6;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.3s;
}

button:hover {
  background: #8e44ad;
  transform: scale(1.05);
}

.content {
  display: none;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 30px;
  margin: 30px auto;
  max-width: 800px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  text-align: left;
  animation: fadeIn 1s ease forwards;
}

h2 {
  color: #f4c430;
  margin-bottom: 15px;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 10px;
}

p {
  line-height: 1.6;
}

#gif-container {
  margin-top: 30px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
  transition: all 0.5s ease;
}

#gif-container img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

  </style>
</head>
<body>  <h1>Oprah Winfrey: Superação e Sucesso</h1>  <div>
    <button onclick="showContent('intro', 'gifs/st1.gif', 'musica1.mp3')">Introdução</button>
    <button onclick="showContent('infancia', 'gifs/st2.gif', 'musica2.mp3')">Infância e Dificuldades</button>
    <button onclick="showContent('carreira', 'gifs/st3.gif', 'musica3.mp3')">Início da Carreira</button>
    <button onclick="showContent('conquistas', 'gifs/st4.gif', 'musica4.mp3')">Empreendedorismo e Conquistas</button>
    <button onclick="showContent('licoes', 'gifs/st5.gif', 'musica5.mp3')">Lições para Administração</button>
    <button onclick="showContent('conclusao', 'gifs/st6.jpg', 'musica6.mp3')">Conclusão</button>
  </div>  <div id="gif-container">
    <img id="gif" src="gifs/st1.gif" alt="GIF ilustrativo" />
  </div>  <div id="intro" class="content">
    <h2>Introdução</h2>
    <p>Nesta narrativa fantástica, vamos mergulhar no universo de Oprah Winfrey — uma lenda viva que moldou sua própria história com as próprias mãos. Em meio ao caos e à pobreza, ela não apenas sobreviveu: ela floresceu. Essa jornada é sobre coragem, revolução pessoal e uma mulher que transformou o mundo com sua voz.</p>
  </div>  <div id="infancia" class="content">
    <h2>Infância e Dificuldades</h2>
    <ul>
      <li>Nascida em 1954 no Mississippi, em um ambiente de pobreza extrema.</li>
      <li>Criada por sua avó, em uma casa sem água encanada ou eletricidade.</li>
      <li>Sofreu abusos físicos e emocionais por familiares próximos.</li>
      <li>Ficou grávida aos 14 anos, perdendo o bebê ao nascer.</li>
      <li>Mesmo diante de tudo, mantinha o brilho nos olhos e a esperança nos estudos.</li>
    </ul>
  </div>  <div id="carreira" class="content">
    <h2>Início da Carreira</h2>
    <ul>
      <li>Ingressou no rádio aos 17 anos com uma voz marcante e carisma natural.</li>
      <li>Subiu rapidamente na televisão local com empatia e presença impactante.</li>
      <li>Superou preconceitos raciais e de gênero em uma época conservadora.</li>
      <li>Em 1986, lançou o icônico <i>The Oprah Winfrey Show</i>, redefinindo a televisão mundial.</li>
    </ul>
  </div>  <div id="conquistas" class="content">
    <h2>Empreendedorismo e Conquistas</h2>
    <ul>
      <li>Criou sua própria produtora, Harpo Productions, controlando todo seu conteúdo.</li>
      <li>Tornou-se a primeira mulher negra bilionária do mundo.</li>
      <li>Lançou a própria emissora: Oprah Winfrey Network (OWN).</li>
      <li>Influenciou milhões por meio de livros, revistas e programas sociais.</li>
      <li>Fundou escolas para jovens meninas na África do Sul.</li>
    </ul>
  </div>  <div id="licoes" class="content">
    <h2>Lições para a Administração</h2>
    <ul>
      <li><strong>Resiliência:</strong> Oprah é sinônimo de reinvenção diante da dor.</li>
      <li><strong>Empatia:</strong> sua capacidade de ouvir e compreender criou conexões reais com o público.</li>
      <li><strong>Marca pessoal:</strong> transformou sua identidade em um império multimídia.</li>
      <li><strong>Visão estratégica:</strong> soube expandir com inteligência para diversas plataformas.</li>
    </ul>
  </div>  <div id="conclusao" class="content">
    <h2>Conclusão</h2>
    <p>A história de Oprah Winfrey nos lembra que sucesso não é sorte, é decisão. É escolha corajosa após cada queda. Seu legado é uma carta de amor à humanidade — de que é possível vencer o impossível. Que cada um de nós carregue essa centelha de transformação!</p>
  </div><audio id="audio" src="" preload="auto"></audio>

  <script>
    function showContent(id, gifPath, musicPath) {
      const sections = document.querySelectorAll('.content');
      sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('fadeIn');
      });

      const current = document.getElementById(id);
      current.style.display = 'block';
      current.classList.add('fadeIn');

      const gif = document.getElementById('gif');
      gif.style.opacity = 0;
      setTimeout(() => {
        gif.src = gifPath;
        gif.style.opacity = 1;
      }, 300);

      const audio = document.getElementById('audio');
      audio.src = musicPath;
      audio.play();
    }
  </script></body>
</html>







<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Oprah Winfrey: Superação e Sucesso</title>
<style>
  body, html {
    margin: 0; padding: 0; height: 100%; background: #222; color: #eee;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow-x: hidden;
  }
  #btnCeu {
    position: fixed; top: 15px; right: 20px; z-index: 1000;
    background: linear-gradient(135deg, #8e44ad, #9b59b6);
    border-radius: 40px; padding: 12px 28px; font-weight: 700;
    font-size: 18px; color: white; border: none;
    box-shadow: 0 0 15px rgba(155, 89, 182, 0.7);
    filter: drop-shadow(0 0 3px #cfa7e1);
    user-select: none;
    animation: floaty 3s ease-in-out infinite;
    transition: box-shadow 0.3s ease;
    display: none;
    cursor: pointer;
  }
  #btnCeu:hover {
    box-shadow: 0 0 30px #f7e8ff;
    filter: drop-shadow(0 0 6px #f7e8ff);
  }
  @keyframes floaty {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }
  #telaInicial {
    position: relative; width: 100vw; height: 100vh;
    background: url('ST0.JPG') center/cover no-repeat;
    display: flex; align-items: flex-end; justify-content: center;
    padding-bottom: 60px;
  }
  #btnComecar {
    background: linear-gradient(135deg, #9b59b6, #d46de1);
    border: none; border-radius: 50px; padding: 18px 48px;
    font-size: 2rem; color: white; font-weight: 800;
    box-shadow: 0 0 35px #d887f2;
    user-select: none; filter: drop-shadow(0 0 8px #c36cef);
    transition: all 0.3s ease;
    cursor: pointer;
  }
  #btnComecar:hover {
    filter: drop-shadow(0 0 15px #e8abff);
    transform: scale(1.1);
  }
  #telaCapitulos {
    position: relative; width: 100vw; height: 100vh;
    background: #111; display: none;
    flex-direction: column; align-items: center; padding: 60px 20px 40px;
    overflow: hidden;
  }
  #barraCapitulos {
    display: flex; flex-wrap: wrap; justify-content: center; gap: 18px;
    margin-bottom: 40px; max-width: 900px;
  }
  .btnCapitulo {
    background: linear-gradient(135deg, #7d3c98, #b27bd4);
    border: none; border-radius: 40px; padding: 14px 30px;
    font-size: 1.2rem; font-weight: 700; color: white;
    box-shadow: 0 0 15px #a980d5;
    user-select: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }
  .btnCapitulo:hover {
    box-shadow: 0 0 30px #d1b9f2;
    transform: scale(1.1);
  }
  .btnCapitulo.active {
    background: linear-gradient(135deg, #d96de7, #9b38d2);
    box-shadow: 0 0 35px #f3bbff;
    transform: scale(1.15);
  }
  #conteudoCapitulo {
    position: relative; max-width: 900px; width: 100%; min-height: 420px;
    background: #22003d; border-radius: 25px; box-shadow: 0 0 70px #9b38d2;
    overflow: hidden; display: flex; align-items: center; justify-content: center;
    color: #eee; padding: 25px;
  }
  #imagemCapitulo {
    max-width: 50%; max-height: 380px;
    border-radius: 20px; box-shadow: 0 0 35px #b27bd4;
    user-select: none; object-fit: contain;
  }
  #textoCapitulo {
    max-width: 45%; margin-left: 30px;
    font-size: 1.15rem; line-height: 1.5;
    text-shadow: 0 0 10px #7f3da1;
    overflow-y: auto; max-height: 380px;
    position: relative;
  }
  #textoCapitulo h3 {
    font-size: 2rem; margin-bottom: 10px;
    color: #d6a5f5; text-shadow: 0 0 15px #a86fcd;
  }

  /* EFEITOS VISUAIS DO TEXTO (cada um vai ser ativado dinamicamente) */

  /* 1 - Derretendo */
  .efeito-derretendo {
    animation: derretimento 1.5s forwards;
  }
  @keyframes derretimento {
    0% { filter: none; opacity: 1; transform: translateY(0); }
    50% { filter: blur(2px); opacity: 0.5; transform: translateY(10px) skewX(8deg); }
    100% { filter: blur(10px); opacity: 0; transform: translateY(40px) skewX(25deg); }
  }

  /* 2 - Explosão de partículas (simulação) */
  .efeito-explosao {
    position: relative;
    animation: explodeText 1.5s forwards;
  }
  @keyframes explodeText {
    0% { opacity: 1; filter: none; transform: translate(0) scale(1); }
    100% {
      opacity: 0;
      filter: blur(6px);
      transform:
        translate(calc(var(--rand-x, 0) * 30px), calc(var(--rand-y, 0) * 30px))
        rotate(calc(var(--rand-rot, 0) * 360deg))
        scale(1.5);
    }
  }

  /* 3 - Fumaça subindo e sumindo */
  .efeito-fumaca {
    animation: fumacaSobe 2s forwards;
    color: #ddd;
    text-shadow: 0 0 6px #aaa;
  }
  @keyframes fumacaSobe {
    0% { opacity: 1; filter: none; transform: translateY(0) scale(1); }
    100% { opacity: 0; filter: blur(8px); transform: translateY(-60px) scale(1.2); }
  }

  /* 4 - Brilho pulsante + luzes piscando */
  .efeito-brilho {
    animation: brilhoPulsante 2.5s ease-in-out infinite;
    text-shadow:
      0 0 8px #f3b8ff,
      0 0 20px #d958ff,
      0 0 40px #8f2eff;
    color: #ffccff;
  }
  @keyframes brilhoPulsante {
    0%, 100% { text-shadow:
      0 0 8px #f3b8ff,
      0 0 20px #d958ff,
      0 0 40px #8f2eff; color: #ffccff; }
    50% { text-shadow: none; color: #bb99cc; }
  }

  /* 5 - Distorção glitch */
  .efeito-glitch {
    position: relative;
    color: #eee;
    animation: glitchAnim 1.2s linear infinite;
  }
  .efeito-glitch::before, .efeito-glitch::after {
    content: attr(data-text);
    position: absolute;
    left: 0; top: 0;
    width: 100%;
    overflow: hidden;
    clip-path: polygon(0 2%, 100% 2%, 100% 15%, 0 15%);
  }
  .efeito-glitch::before {
    left: 2px;
    text-shadow: -2px 0 red;
    animation: glitchAnimTop 1.2s linear infinite;
  }
  .efeito-glitch::after {
    left: -2px;
    text-shadow: -2px 0 cyan;
    animation: glitchAnimBottom 1.2s linear infinite;
  }
  @keyframes glitchAnim {
    0%, 20%, 40%, 60%, 80%, 100% { transform: translate(0); }
    10%, 30%, 50%, 70%, 90% { transform: translate(-2px, 2px); }
  }
  @keyframes glitchAnimTop {
    0%, 20%, 40%, 60%, 80%, 100% { clip-path: polygon(0 2%, 100% 2%, 100% 15%, 0 15%); }
    10%, 30%, 50%, 70%, 90% { clip-path: polygon(0 5%, 100% 5%, 100% 10%, 0 10%); }
  }
  @keyframes glitchAnimBottom {
    0%, 20%, 40%, 60%, 80%, 100% { clip-path: polygon(0 85%, 100% 85%, 100% 98%, 0 98%); }
    10%, 30%, 50%, 70%, 90
