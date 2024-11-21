// Gestion des événements du clavier
window.addEventListener('keydown', function (e) {
    playSound(e.keyCode);
  });
  
  // Gestion des événements de clic sur les boutons
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    key.addEventListener('click', function () {
      const keyCode = this.getAttribute('data-key');
      playSound(keyCode);
    });
  });
  
  // Fonction de lecture du son et d'animation des touches
  function playSound(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  
    if (!audio) {
      console.log("Aucun son trouvé pour cette touche.");
      return;
    }
  
    audio.currentTime = 0; // Remet le son à 0 pour pouvoir le rejouer immédiatement
    audio.play();
    console.log("Lecture du son pour la touche : ", keyCode);
  
    key.classList.add('playing');
  
    audio.addEventListener('ended', function () {
      key.classList.remove('playing');
    });
  }
  