

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


function isMobile() {
  return window.innerWidth < 768; // Adjust based on mobile breakpoint
}

// if (!isMobile()) {
//   // Target all `.whydiv` elements
//   gsap.utils.toArray('.whydiv').forEach((whydiv, index) => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.why', 
//         start: 'top center', // Start animation when `.why` reaches the center
//         end: '+=100%', // End point of the animation
//         scrub: true, // Allow smooth scroll scrubbing
//         markers: true, // Set to true for debugging
//       }
//     });

//     tl
//       .to(whydiv, {
//         opacity: 1, // Fade in
//         y: -0, // Move to its original position
//         duration: 1,
//         ease: 'power2.out'
//       })
//       .set(whydiv, { zIndex: 3 - index }) // Adjust the z-index as we scroll
//       .to(whydiv, {
//         opacity: 0.7, // Reduce opacity slightly for inactive sections
//         duration: 1,
//         y: -100,
//       }, "+=0.5");
//   });
// }
if (!isMobile()) {
  const sections = document.querySelectorAll('.whydiv'); // Select all sections
const sec = document.querySelectorAll('.why')
sections.forEach((section, index) => {
  let moveUpValue; 
  let zIndexValue = index + 1;
  // First div stays in its original position, second and third move up higher
  if (index === 0) {
    moveUpValue = 0;  // First div doesn't move
    opacity = 0.3
  } else if (index === 1) {
    moveUpValue = -500;  // Second div moves up by 100px
    opacity = 0.7
  } else if (index === 2)  {
    moveUpValue = -1000;  // Third div moves up by 200px
    // opacity = 1
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 90%", // Start when top of section hits 80% of viewport
      end: "top 70%",   // End when top of section hits 20% of viewport
      scrub: true, 
      pin: true,     // Smooth scrubbing
      pinSpacing: false,
      markers: false,   // Enable for debugging if needed
      toggleActions: 'play none none none' // Play forward and reverse on scroll
    }
  });

  // Animation: fade in and move slightly upward
  tl.fromTo(section, 
    { opacity: 0, y: 100, zIndex: zIndexValue }, // Start off-screen (lower)
    { opacity: 1, y: moveUpValue, zIndex: zIndexValue, duration: 5 } // Fade in and move up
  ).to(section, 
    { opacity: 1, duration: 5 }, "+=0.5"); // Fade out slowly after appearing
});
}
})



const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const cancel = document.getElementById('cancel');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  cancel.classList.toggle('active');
});

cancel.addEventListener('click', () => {
  // Hide the sidebar and show hamburger again
  hamburger.classList.remove('active');
  menu.classList.remove('active');
  cancel.classList.remove('active');
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


function isMobile() {
  return window.innerWidth < 768; // Adjust based on mobile breakpoint
}
if (!isMobile()) {
const cards = document.querySelectorAll('.infocard');
let currentCard = 0; // Start with the first card

// Function to update card visibility
function updateCardVisibility() {
    cards.forEach((card, index) => {
        if (index === currentCard) {
            card.classList.add('active'); // Show the active card
        } else {
            card.classList.remove('active'); // Hide non-active cards
        }
    });
}
// if (!isMobile()) {
// Initialize the first card as active
updateCardVisibility();

// Event listener for the "Next" button
document.getElementById('next').addEventListener('click', () => {
    // Move to the next card, loop back to the first card if at the end
    currentCard = (currentCard + 1) % cards.length;
    updateCardVisibility(); // Update visibility
});

// Event listener for the "Prev" button
document.getElementById('prev').addEventListener('click', () => {
    // Move to the previous card, loop back to the last card if at the beginning
    currentCard = (currentCard - 1 + cards.length) % cards.length;
    updateCardVisibility(); // Update visibility
});
}

  

