const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

const cards = document.querySelectorAll('.info-card');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentCard = 0;

function updateCards() {
    cards.forEach((card, index) => {
        card.classList.remove('active');
        if (index === currentCard) {
            card.classList.add('active');
        }
    });
}

nextButton.addEventListener('click', () => {
    currentCard = (currentCard + 1) % cards.length;
    updateCards();
});

prevButton.addEventListener('click', () => {
    currentCard = (currentCard - 1 + cards.length) % cards.length;
    updateCards();
});

updateCards(); // Initialize with the first card active

function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.icon');
  
    if (answer.style.display === "block") {
      answer.style.display = "none";
      icon.textContent = "+";
    } else {
      answer.style.display = "block";
      icon.textContent = "-";
    }
  }
  

