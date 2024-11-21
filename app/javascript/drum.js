window.addEventListener('keydown', function(e) {
  console.log("Touche appuyée : ", e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if (!audio) {
      console.log("Aucun son trouvé pour cette touche.");
      return;
    }
  
    audio.currentTime = 0; // Remet le son à 0 pour pouvoir le rejouer immédiatement
    audio.play();
    console.log("Lecture du son pour la touche : ", e.keyCode);
    
    key.classList.add('playing');
  
    audio.addEventListener('ended', function() {
      key.classList.remove('playing');
    });
  });
  