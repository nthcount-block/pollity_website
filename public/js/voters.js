document.addEventListener("DOMContentLoaded", function () { 
    gsap.registerPlugin(ScrollTrigger);

    const textSpans = document.querySelectorAll('.atblockvote p span, .atblockvote h1 span');

    // Animation for the text spans in voter-content
    gsap.from(".voter-content span ", {
        scrollTrigger: {
            trigger: ".voter-hero",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2
    });

    // Animation for the voter images
    gsap.from(".voter-img-group", {
        scrollTrigger: {
            trigger: ".voter-hero",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: -100,
        duration: 1.5,
        stagger: 0.3
    });

gsap.from(textSpans, {
        scrollTrigger: {
            trigger: ".atblockvote", // Trigger when the section enters the viewport
            start: "top 80%", // Start animation when the section is 80% from the top
            toggleActions: "play none none none", // Control the animation
        },
        opacity: 0, // Start with invisible text
        y: 50, // Move the text 50px upwards
        duration: 1, // Duration of fade-in
        // stagger: 0.3, // Stagger the animations for each word
        onComplete: function() {
            // Once the fade-in is complete, change the color
            textSpans.forEach((span, index) => {
                gsap.to(span, {
                    color: "#004B52", // Change to dark green
                    duration: 1, // Duration of color change
                    delay: index * 0.3 // Stagger the color change
                });
            });
        }
    });

    function isMobile() {
        return window.innerWidth < 768; // You can adjust this width as per your mobile breakpoints
    }
    if (!isMobile()) {
gsap.to(".sliderflex", {
    xPercent: -100 * 3, // Move slider by 100%
    ease: "none",
    duration: 10,   // Duration of the entire loop
    repeat: -1,     // Infinite repeat
    // repeatDelay: 0,
    modifiers: {
        xPercent: gsap.utils.wrap(-100 * 3, 0) // Wrap slider
    },
    stagger: {
        each: 2,
        // repeat: -1
    }
});
gsap.utils.toArray(".sliderflex").forEach((slider) => {
    gsap.fromTo(slider, 
      { scale: 0.8 }, // Initial scale when off-screen
      {
        scale: 1, // Scale up when in view
        scrollTrigger: {
          trigger: slider, // Trigger the scale-up when the slide enters the viewport
          start: "center center", // Start scaling when the slide is centered
          toggleActions: "play none none reverse" // Scale up, but scale down when off-screen
        },
        duration: 0.5, // Animation duration for scaling
        ease: "power1.out"
      }
    );
  });
// Initialize GSAP animation with stagger and scaling
// gsap.utils.toArray(".sliderflex").forEach((slider, i) => {
//     gsap.fromTo(
//         slider, 
//         {
//             xPercent: (i * 100), // Initially place each slider item to its respective position
//             scale: 0.8,          // Make the initial scale smaller for items off-screen
//         },
//         {
//             xPercent: `+=300`,    // Move all slides
//             duration: 6,          // Total duration
//             ease: "none",
//             repeat: -1,           // Infinite repeat
//             stagger: 2,           // Delay between slides
//             modifiers: {
//                 xPercent: gsap.utils.wrap(-100, 100 * (i + 1)) // Wrap slider to loop seamlessly
//             },
//             scale: 1,             // When the item is in view, scale it to normal size
//             onRepeat: function() { // When the item is off-screen, scale it back to 0.8
//                 gsap.to(slider, {
//                     scale: 0.8,
//                     duration: 0.5,
//                     ease: "power1.out"
//                 });
//             }
//         }
//     );
// });
    

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

const cards = document.querySelectorAll('.infocard');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
let currentIndex = 0;

function showCard(index) {
    cards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === index) {
            card.classList.add('active');
        }
    });
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
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
