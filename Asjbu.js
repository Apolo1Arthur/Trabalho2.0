// Iniciar após clicar em "Iniciar"
startBtn.addEventListener('click', () => {
  currentIndex = 1;
  updateSlide();
});

// Atualização de slide
function updateSlide() {
  clickSound.play();

  // Botões
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === totalSlides - 1;

  // Título
  if (currentIndex === 0) {
    slideDiv.style.backgroundImage = 'none';
    textBox.style.opacity = 0;
    titleIntro.style.display = 'flex';
    playBackgroundMusic(0);
    return;
  } else {
    titleIntro.style.display = 'none';
  }

  slideDiv.style.animation = animacoesFundo[currentIndex - 1] || '';
  slideDiv.style.backgroundImage = `url(${imagens[currentIndex]})`;

  textBox.innerHTML = textos[currentIndex];
  textBox.style.animation = animacoesTexto[currentIndex - 1] || '';
  textBox.style.opacity = 1;

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
