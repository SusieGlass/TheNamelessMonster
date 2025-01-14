// Déclenche l'ouverture des rideaux après un délai
window.addEventListener('load', () => {
  const stage = document.querySelector('.stage');
  const audio = new Audio('assets/audio/nameless monster - audio.mp3');

  setTimeout(() => {
      stage.classList.add('open');
      audio.play();
  }, 1500); // Délai de 1 seconde avant l'ouverture
});


// Récupère les paragraphes et le bouton
const paragraphs = document.querySelectorAll('.story-paragraph');
const nextButton = document.getElementById('next-button');

// Variable pour suivre le paragraphe courant
let currentIndex = 0;

// Fonction pour afficher le prochain paragraphe
function showNextParagraph() {
    // Cache le paragraphe actuel (si nécessaire)
    if (currentIndex > 0) {
        paragraphs[currentIndex - 1].classList.remove('visible');
    }

    // Affiche le paragraphe suivant
    if (currentIndex < paragraphs.length) {
        paragraphs[currentIndex].classList.add('visible');
        currentIndex++;
    } else {
        // Si tous les paragraphes ont été affichés, désactive le bouton
        nextButton.disabled = true;
        nextButton.innerText = "Fin de l'histoire";
    }
}

// Ajoute un écouteur d'événement au bouton
nextButton.addEventListener('click', showNextParagraph);

// Affiche le premier paragraphe au démarrage
showNextParagraph();
