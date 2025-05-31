function updateSlide() {
      clickSound.play();

      // Atualiza controles habilitados/desabilitados
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

      // Atualiza fundo
      slideDiv.style.animation = animacoesFundo[currentIndex - 1] || '';
      slideDiv.style.backgroundImage = `url(${imagens[currentIndex]})`;

      // Atualiza texto
      textBox.innerHTML = textos[currentIndex];
      textBox.style.animation = animacoesTexto[currentIndex - 1] || '';
      textBox.style.opacity = 1;

      // Música
      playBackgroundMusic(currentIndex);
    }

    // Botões
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

    // Iniciar após animação do título
    window.addEventListener('load', () => {
      setTimeout(() => {
        currentIndex = 1;
        updateSlide();
      }, 3100); // Espera a animação do título (3s)
    });
</script>

</body>
</html>
