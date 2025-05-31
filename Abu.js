function updateSlide() {
  clickSound.play();

  // Atualiza controles habilitados/desabilitados
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === totalSlides - 1;

  // Atualiza imagem de fundo
  slideDiv.style.backgroundImage = imagens[currentIndex] ? `url(${imagens[currentIndex]})` : '';
  slideDiv.style.animation = animacoesFundo[currentIndex] || 'none';

  // Atualiza texto
  textBox.innerText = textos[currentIndex] || '';
  textBox.style.animation = animacoesTexto[currentIndex] || 'none';
  textBox.style.opacity = 1;

  // Atualiza música
  playBackgroundMusic(currentIndex);
}

// Botões de navegação
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlide();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateSlide();
  }
});

// Inicia com o slide de introdução
window.onload = () => {
  setTimeout(() => {
    titleIntro.style.display = 'none';
    updateSlide();
  }, 3500); // tempo da animação do título
};
