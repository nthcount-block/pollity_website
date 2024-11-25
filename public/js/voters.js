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
        duration: 0.2, // Duration of fade-in
        // stagger: 0.3, // Stagger the animations for each word
        onComplete: function() {
            // Once the fade-in is complete, change the color
            textSpans.forEach((span, index) => {
                gsap.to(span, {
                    color: "#004B52", // Change to dark green
                    duration: 0.1, // Duration of color change
                    delay: index * 0.1 // Stagger the color change
                });
            });
        }
    });

    function isMobile() {
        return window.innerWidth < 768; // You can adjust this width as per your mobile breakpoints
    }
    if (!isMobile()) {

const sliderContainer = document.querySelector('.slidercontainer');
const slides = document.querySelectorAll('.sliderflex');
let currentIndex = 0;

function showSlide(index) {
  const offset = -index * 100; // Calculate the offset for the current slide
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${offset}%)`;
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length; // Move to next slide, loop back to start
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Move to previous slide, loop to end
  showSlide(currentIndex);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000); // Adjust time as needed
}


const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".votercontainer", // Element that triggers the animation
    start: "top 80%", // Trigger when top of container is 80% from the top of viewport
    // end: "top 30%", // Animation ends when top of container reaches 30%
    scrub: 1.5, // Smoothly animate as you scroll
  },
  defaults: { duration: 1, ease: "power3.out" },

});

// Animate the image first
// timeline.to(".group1img", { opacity: 1, duration: 0.5 });
// Scale down the container
timeline.to(".votercontainer", { scale: 0.95, duration: 1.5 });

// Animate the left section coming from the left
timeline.to(".voterleft-section", { x: 0, opacity: 1 }, "<");

// Animate the right section coming from the right
timeline.to(".voterright-section", { x: 0, opacity: 1}, "<");
 

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


const features = document.querySelectorAll('.voterfeature');
let index = 0;

function animateFeatures() {
  // Remove all animation classes from all features
  features.forEach((feature) => {
    feature.classList.remove('expanding', 'shrinking');
  });

  // Add shrinking class to the current feature
  features[index].classList.add('shrinking');

  // After the shrinking animation, switch to expanding class
  setTimeout(() => {
    features[index].classList.remove('shrinking');
    features[index].classList.add('expanding');

    // Move to the next feature index
    index = (index + 1) % features.length;
  }, 500); // Adjust this to match your shrinking transition duration
}

// Start the interval animation
setInterval(animateFeatures, 2000); // Adjust this interval for the desired timing
