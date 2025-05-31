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
  /* Reset básico */
  * {
    margin: 0; padding: 0; box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b);
    min-height: 100vh;
    color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Botão fixo no topo - "botão editado no céu" */
  #btnCeu {
    position: fixed;
    top: 15px;
    right: 20px;
    background: linear-gradient(135deg, #8e44ad, #9b59b6);
    border: none;
    border-radius: 50px;
    padding: 12px 25px;
    font-weight: 700;
    font-size: 18px;
    color: white;
    cursor: pointer;
    box-shadow: 0 0 15px rgba(155, 89, 182, 0.7);
    transition: box-shadow 0.4s ease;
    z-index: 1000;
    user-select: none;
    filter: drop-shadow(0 0 3px #cfa7e1);
    animation: floaty 3s ease-in-out infinite;
  }

  #btnCeu:hover {
    box-shadow: 0 0 30px #f7e8ff;
    filter: drop-shadow(0 0 6px #f7e8ff);
  }

  @keyframes floaty {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }

  /* Tela inicial */
  #telaInicial {
    margin-top: 120px;
    background: rgba(255 255 255 / 0.15);
    border-radius: 20px;
    max-width: 800px;
    width: 90%;
    padding: 40px 30px;
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(15px);
    text-align: center;
    animation: fadeInScale 1s ease forwards;
  }

  #telaInicial h1 {
    font-size: 3rem;
    margin-bottom: 25px;
    color: #e6d7f2;
    text-shadow: 0 0 8px #a37cd1;
  }

  #btnComecar {
    background: #9b59b6;
    border: none;
    border-radius: 50px;
    padding: 15px 40px;
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    box-shadow: 0 0 20px #b683d6;
    transition: background 0.3s ease;
    font-weight: 700;
    user-select: none;
  }

  #btnComecar:hover {
    background: #bc80de;
    box-shadow: 0 0 35px #d7acef;
  }

  /* Tela capítulos */
  #telaCapitulos {
    display: none;
    margin-top: 80px;
    max-width: 900px;
    width: 95%;
    background: rgba(255 255 255 / 0.15);
    border-radius: 20px;
    padding: 30px 35px;
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(18px);
    color: #eae7f5;
  }

  /* Barra fixa com título e botões capítulos */
  #barraCapitulos {
    position: sticky;
    top: 0;
    background: rgba(59, 29, 89, 0.85);
    padding: 15px 25px;
    border-radius: 20px 20px 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.4);
    z-index: 900;
  }

  #barraCapitulos h2 {
    flex-basis: 100%;
    font-weight: 800;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 10px;
    color: #d6c9e9;
    text-shadow: 0 0 6px #6f52a7;
  }

  .btnCapitulo {
    background: linear-gradient(135deg, #7d3c98, #b27bd4);
    border: none;
    border-radius: 40px;
    padding: 12px 30px;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    color: white;
    box-shadow: 0 0 15px #a980d5;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    user-select: none;
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

  /* Conteúdo do capítulo */
  #conteudoCapitulo {
    margin-top: 25px;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }

  #imagemCapitulo {
    flex: 1 1 320px;
    max-width: 400px;
    border-radius: 20px;
    box-shadow: 0 0 30px rgba(183, 131, 226, 0.8);
    overflow: hidden;
    user-select: none;
  }

  #imagemCapitulo img {
    width: 100%;
    height: auto;
    display: block;
  }

  #textoCapitulo {
    flex: 2 1 450px;
    background: rgba(63, 27, 98, 0.8);
    border-radius: 20px;
    padding: 25px 35px;
    box-shadow: 0 0 30px rgba(145, 70, 255, 0.7);
    font-size: 1.15rem;
    line-height: 1.5;
    color: #ddd4f7;
    user-select: text;
  }

  #textoCapitulo h3 {
    font-size: 2rem;
    margin-bottom: 15px;
    color: #d9bbff;
    text-shadow: 0 0 10px #8e6ac5;
  }

  /* Áudio invisível */
  audio {
    display: none;
  }

  /* Animações para transição */
  @keyframes fadeInScale {
    0% {
      opacity: 0; transform: scale(0.95);
    }
    100% {
      opacity: 1; transform: scale(1);
    }
  }

  @keyframes slideInFromRight {
    0% {
      opacity: 0; transform: translateX(50px);
    }
    100% {
      opacity: 1; transform: translateX(0);
    }
  }

  @keyframes zoomIn {
    0% {
      opacity: 0; transform: scale(0.8);
    }
    100% {
      opacity: 1; transform: scale(1);
    }
  }

  @keyframes glitchEffect {
    0% {
      clip-path: inset(0 0 80% 0);
      transform: translate(0);
      opacity: 1;
    }
    20% {
      clip-path: inset(10% 0 70% 0);
      transform: translate(-5px, 5px);
      opacity: 0.8;
    }
    40% {
      clip-path: inset(20% 0 60% 0);
      transform: translate(5px, -5px);
      opacity: 1;
    }
    60% {
      clip-path:
