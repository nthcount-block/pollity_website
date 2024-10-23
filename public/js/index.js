// import { gsap }  from "gsap";
// import { gsap } from "/node_modules/gsap/index.js"
// import { ScrollTrigger } from "/node_modules/gsap/ScrollTrigger.js";
// Wait for the DOM to fully load
console.log('hhhhhh')

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);


  // Create the animation for the words in the h1
  gsap.from(".integritydiv, .integrityh1 span", {
    scrollTrigger: {
      trigger: ".integritysection", 
      start: "top 80%", 
      end: "top 60%", 
      toggleActions: "play none none none",
    },
    opacity: 0, 
    y: 200, 
    duration: 1.5, 
    ease: "power2.out",
    stagger: 0.1, 
  });

gsap.timeline({
  repeat: -1, // Repeat infinitely
  yoyo: true, // Reverse the animation after each cycle
  ease: "power1.inOut", // Smooth easing
  duration: 6 // Time for one full cycle
})
.to(".groupimg", { x: "calc(100% - 920px)", y: 0 })  // Move to top right
.to(".groupimg", { x: "calc(100% - 920px)", y: "calc(100% - 600px)" })  // Move to bottom right
.to(".groupimg", { x: 0, y: "calc(100% - 600px)" })  // Move to bottom left
.to(".groupimg", { x: 0, y: 0 });  // Move back to top left

gsap.from([".section4 h1", ".section4 p", ".section4 .card"], {
  scrollTrigger: {
    trigger: ".section4",  // Start the animation when ".section4" enters the viewport
    start: "top 80%",      // Start animation when the section reaches 80% from the top of the viewport
    end: "top 60%",        // End when 60% of the viewport is reached
    toggleActions: "play none none none",
  },
  opacity: 0,              // Start with invisible elements
  y: 200,                  // Move the elements upwards by 200px
  duration: 1.5,           // Animation duration
  ease: "power2.out",      // Ease function for smooth motion
  stagger: 0.2,            // Stagger the animation (0.2 seconds between each element's animation start)
});


gsap.timeline({
  repeat: -1,        // Infinite loop
  defaults: { duration: 1, ease: "power1.inOut" }  // Smooth animation
})
.to(".icon1", { x: 100, y: 100 })  // icon1 moves to icon2's position
.to(".icon2", { x: -100, y: 100 }, "<")  // icon2 moves to icon3's position
.to(".icon3", { x: -100, y: -100 }, "<")  // icon3 moves to icon4's position
.to(".icon4", { x: 100, y: -100 }, "<");  // icon4 moves to icon1's position



});



const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  console.log('jhh')
});

// why pollity section
// const whyDiv = document.querySelector('.whydiv1');
// const whyDiv2 = document.querySelector('.whydiv2');
// const whyDiv3 = document.querySelector('.whydiv3');

// whyDiv.addEventListener('click', () => {
//   whyDiv2.classList.toggle('show');
//   // whyDiv3.classList.toggle('show');
//   console.log('he;o')
// });
// whyDiv2.addEventListener('click', () => {
//   whyDiv3.classList.toggle('show');
//   // whyDiv3.classList.toggle('show');
//   console.log('he;o')
// });

const whyDiv1 = document.querySelector('.whydiv');
const whyDiv2 = document.querySelector('.whydiv2');
const whyDiv3 = document.querySelector('.whydiv3');

let clicked = 0; // Counter to track how many clicks

whyDiv1.addEventListener('click', () => {
  if (clicked === 0) {
    whyDiv2.classList.add('show');
    whyDiv1.style.zIndex = 2;  // Lower the z-index of the first card
    whyDiv2.style.zIndex = 3;  // Stack the second card below
  } else if (clicked === 1) {
    whyDiv3.classList.add('show');
    whyDiv2.style.zIndex = 2;  // Lower the z-index of the second card
    whyDiv3.style.zIndex = 3;  // Stack the third card below
  }
  clicked++;
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




  

