// Novo índice para o slide inicial (índice 0)
let index = 0;

const slides = [
  { 
    img: 'stx.jpg', 
    musica: 'musicax.mp3', 
    texto: `Bem-vindo à fascinante jornada da vida de Oprah Winfrey, uma mulher que transformou dor em poder, silêncio em voz, e sonhos em legados eternos. Neste espaço misterioso e encantado, escolha um capítulo para desvelar a saga dessa força da natureza que inspirou o mundo com sua luz.`
  },
  {
    img: 'st1.gif',
    musica: 'musica1.mp3',
    texto: `Capítulo 1: No coração humilde do Mississippi, nasceu Oprah, uma menina destinada a desafiar as probabilidades. Entre sombras de pobreza e ecos de esperança, ela cresceu com a chama do impossível queimando intensamente em seu peito, pronta para reacender vidas com sua história.`
  },
  {
    img: 'st2.gif',
    musica: 'musica2.mp3',
    texto: `Capítulo 2: A infância de Oprah foi um palco de desafios profundos — pobreza, abusos e silêncios quebrados pela leitura e aprendizado. Nas páginas dos livros, encontrou refúgio e a chave para um futuro onde a voz poderia ser ouvida, alta e clara.`
  },
  {
    img: 'st3.gif',
    musica: 'musica3.mp3',
    texto: `Capítulo 3: Aos 19 anos, Oprah entrou no universo da televisão, um terreno novo onde sua empatia e carisma brotaram como flores raras. Seu sorriso sincero e coração aberto conquistaram a tela, e a partir dali, nada seria como antes.`
  },
  {
    img: 'st4.gif',
    musica: 'musica4.mp3',
    texto: `Capítulo 4: A estreia do talk show foi uma revolução silenciosa. Com uma sensibilidade única, Oprah abordou temas profundos, tocando almas, desvendando histórias ocultas e construindo um legado de conexão verdadeira com seu público.`
  },
  {
    img: 'st5.gif',
    musica: 'musica5.mp3',
    texto: `Capítulo 5: Expandindo horizontes, Oprah mergulhou em livros, cinema e causas sociais, consolidando-se como uma mulher de negócios brilhante e uma filantropa incansável. Seu nome tornou-se sinônimo de transformação e esperança.`
  },
  {
    img: 'st6.jpg',
    musica: 'musica6.mp3',
    texto: `Capítulo 6: Seu legado transcende o tempo — um legado de empoderamento, transformação e inspiração que reverbera por gerações. Oprah Winfrey é a personificação viva do poder que nasce do amor, da coragem e da fé no impossível.`
  }
];

// Função para voltar ao slide inicial
function voltarInicio() {
  index = 0;
  mostrarSlide();
}

// Atualiza mostrarSlide para habilitar/desabilitar botão 'Início' conforme necessário
function mostrarSlide() {
  const atual = slides[index];
  slideDiv.style.backgroundImage = `url('${atual.img}')`;
  textBox.textContent = atual.texto;
  bgMusic.src = atual.musica;
  bgMusic.play();

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === slides.length - 1;
  voltarInicioBtn.disabled = index === 0;
}
