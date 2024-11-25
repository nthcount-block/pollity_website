
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  function isMobile() {
    return window.innerWidth < 768; // Adjust based on mobile breakpoint
  }

  const whyDivs = document.querySelectorAll(".whydiv");
  const whyHeader = document.querySelector(".whyh1");

  let headerTriggerPosition = whyHeader.getBoundingClientRect().top + window.scrollY;

  const adjustCards = () => {
    if (isMobile()) {
      // Reset styles on mobile
      whyDivs.forEach((div) => {
        div.style.transform = ""; // Reset transform
        div.style.opacity = ""; // Reset opacity
      });
      return; // Do not run the animation logic on mobile
    }
    const scrollPosition = window.scrollY;

    whyDivs.forEach((div, index) => {
      // Calculate the scroll-triggered offset, starting when the header is in view
      const offset = scrollPosition - headerTriggerPosition;

      if (offset > index * 200) {
        // Slide cards up progressively
        div.style.transform = `translateY(-${index * 600}px)`;
        div.style.opacity = "1"; // Ensure full visibility
      } else if (offset > (index - 1) * 200) {
        // Smooth transition when scrolling forward
        // const dynamicY = Math.min(offset - (index - 1) * 200, 200);
        div.style.transform =  `translateY(-${index * 600}px)`;
        div.style.opacity = "1";
      } else {
        // Reset position if scrolled back up
        const reverseIndex = whyDivs.length - index - 1;
        div.style.transform =`translateY(${200 + reverseIndex * 100}px)`;
        div.style.opacity = "0"; // Hide when not in view
      }
    });
  };

  // Attach the scroll event listener
  window.addEventListener("scroll", adjustCards);
  adjustCards(); // Initial position adjustment


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

  gsap
    .timeline({
      repeat: -1, // Repeat infinitely
      yoyo: true, // Reverse the animation after each cycle
      ease: "power1.inOut", // Smooth easing
      duration: 6, // Time for one full cycle
    })
    .to(".groupimg", { x: "calc(100% - 920px)", y: 0 }) // Move to top right
    .to(".groupimg", { x: "calc(100% - 920px)", y: "calc(100% - 600px)" }) // Move to bottom right
    .to(".groupimg", { x: 0, y: "calc(100% - 600px)" }) // Move to bottom left
    .to(".groupimg", { x: 0, y: 0 }); // Move back to top left

  gsap.from([".section4 h1", ".section4 p", ".section4 .card"], {
    scrollTrigger: {
      trigger: ".section4", // Start the animation when ".section4" enters the viewport
      start: "top 80%", // Start animation when the section reaches 80% from the top of the viewport
      end: "top 60%", // End when 60% of the viewport is reached
      toggleActions: "play none none none",
    },
    opacity: 0, // Start with invisible elements
    y: 200, // Move the elements upwards by 200px
    duration: 1.5, // Animation duration
    ease: "power2.out", // Ease function for smooth motion
    stagger: 0.2, // Stagger the animation (0.2 seconds between each element's animation start)
  });

  gsap
    .timeline({
      repeat: -1, // Infinite loop
      defaults: { duration: 1, ease: "power1.inOut" }, // Smooth animation
    })
    .to(".icon1", { x: 100, y: 100 }) // icon1 moves to icon2's position
    .to(".icon2", { x: -100, y: 100 }, "<") // icon2 moves to icon3's position
    .to(".icon3", { x: -100, y: -100 }, "<") // icon3 moves to icon4's position
    .to(".icon4", { x: 100, y: -100 }, "<"); // icon4 moves to icon1's position

 
  

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".container", // Element that triggers the animation
      start: "top 80%", // Trigger when top of container is 80% from the top of viewport
      // end: "top 30%", // Animation ends when top of container reaches 30%
      scrub: 1.5, // Smoothly animate as you scroll
    },
    defaults: { duration: 1, ease: "power3.out" },

  });

  // Animate the image first
  // timeline.to(".group1img", { opacity: 1, duration: 0.5 });
 // Scale down the container
 timeline.to(".container", { scale: 0.95, duration: 1.5 });

  // Animate the left section coming from the left
  timeline.to(".left-section", { x: 0, opacity: 1 }, "<");

  // Animate the right section coming from the right
  timeline.to(".right-section", { x: 0, opacity: 1}, "<");
   


});

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const cancel = document.getElementById("cancel");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  cancel.classList.toggle("active");
});

cancel.addEventListener("click", () => {
  // Hide the sidebar and show hamburger again
  hamburger.classList.remove("active");
  menu.classList.remove("active");
  cancel.classList.remove("active");
});

function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  const icon = element.querySelector(".icon");

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
// if (!isMobile()) {



const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const cards = document.querySelectorAll('.infocard');
let currentIndex = 0;

// Initial setup
prevButton.disabled = true; // Disable prev button initially

// Event listener for 'next' button
nextButton.addEventListener('click', () => {
  // Apply shrinking effect to the current card
  cards[currentIndex].classList.add('shrinking');

  // Update index to the next card after the animation duration
  setTimeout(() => {
    // Move to the next card
    currentIndex = (currentIndex + 1) % cards.length;

    // Reset classes and apply expanding class to the new current card
    cards.forEach(card => {
      card.classList.remove( 'expanding', 'shrinking2', 'expanding2');
    });

    cards[currentIndex].classList.add('expanding');

    // Update button states
    nextButton.disabled = (currentIndex === cards.length - 1); // Disable next if last card
    prevButton.disabled = (currentIndex === 0); // Enable prev if not the first card
  }, 0); // Adjust the timeout to match the CSS transition duration
});

// Event listener for 'prev' button
prevButton.addEventListener('click', () => {
  // Apply shrinking effect to the current card
  cards[currentIndex].classList.add('shrinking2');

  // Update index to the previous card after the animation duration
  setTimeout(() => {
    // Move to the previous card
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;

    // Reset classes and apply expanding2 class to the new current card
    cards.forEach(card => {
      card.classList.remove('shrinking', 'expanding', 'shrinking2', 'expanding2');
    });

    cards[currentIndex].classList.add('expanding2');

    // Update button states
    nextButton.disabled = (currentIndex === cards.length - 1); // Disable next if last card
    prevButton.disabled = (currentIndex === 0); // Enable prev if not the first card
  }, 0); // Adjust the timeout to match the CSS transition duration
});


// }


