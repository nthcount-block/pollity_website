const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

// const cards = document.querySelectorAll('.info-card');
// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');
// let currentCard = 0;

// function updateCards() {
//     cards.forEach((card, index) => {
//         card.classList.remove('active');
//         if (index === currentCard) {
//             card.classList.add('active');
//         }
//     });
// }

// nextButton.addEventListener('click', () => {
//     currentCard = (currentCard + 1) % cards.length;
//     updateCards();
// });

// prevButton.addEventListener('click', () => {
//     currentCard = (currentCard - 1 + cards.length) % cards.length;
//     updateCards();
// });

// updateCards(); // Initialize with the first card active

// const nextBtn = document.getElementById('next');
// const prevBtn = document.getElementById('prev');
// const card1 = document.getElementById('card-1');
// const card2 = document.getElementById('card-2');

// nextBtn.addEventListener('click', () => {
//     card1.style.transform = 'translateX(-120%)';
//     card2.style.transform = 'translateX(0)';
//     card1.style.opacity = '0.5';
//     card2.style.opacity = '1';
// });

// prevBtn.addEventListener('click', () => {
//     card1.style.transform = 'translateX(0)';
//     card2.style.transform = 'translateX(120%)';
//     card1.style.opacity = '1';
//     card2.style.opacity = '0.5';
// });
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const card1 = document.getElementById('card-1');
const card2 = document.getElementById('card-2');

let isCard1Active = true; // Track which card is active

function updateCards() {
    if (isCard1Active) {
        card1.style.transform = 'translateX(0)';
        card1.style.opacity = '1';
        card2.style.transform = 'translateX(120%)';
        card2.style.opacity = '0.5';
        card2.style.display = 'none'
    } else {
        card1.style.transform = 'translateX(-120%)';
        card1.style.opacity = '0.5';
        card2.style.transform = 'translateX(0)';
        card2.style.opacity = '1';
        // card1.style.display ='none'
    }
}

nextBtn.addEventListener('click', () => {
    isCard1Active = !isCard1Active;
    updateCards();
});

prevBtn.addEventListener('click', () => {
    isCard1Active = !isCard1Active;
    updateCards();
});



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
  

