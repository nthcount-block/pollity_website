document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    const elements = document.querySelectorAll('.admin-hero h1, .admin-hero p, .admin-hero button, .admin-hero img');
    const containers = document.querySelectorAll('.whycontainer');

    gsap.from(elements, {
        scrollTrigger: {
            trigger: ".admin-hero", // Trigger when the section enters the viewport
            start: "top 80%", // Start animation when the section is 80% from the top
            toggleActions: "play none none none", // Control the animation
        },
        opacity: 0, // Start with invisible elements
        y: 200, // Move the elements 50px upwards
        duration: 1.5, // Duration of the slide-in
        stagger: 0.5, // Stagger the animations for each element
    });
    gsap.from(containers, {
        scrollTrigger: {
            trigger: ".adminswhy", // Trigger when the section enters the viewport
            start: "top 80%", // Start animation when the section is 80% from the top
            toggleActions: "play none none none", // Control the animation
        },
        opacity: 0, // Start with invisible elements
        y: 200, // Move the elements 50px upwards
        duration: 1.5, // Duration of the slide-in
        stagger: 0.5, // Stagger the animations for each element
    });

    function isMobile() {
      return window.innerWidth < 768; // You can adjust this width as per your mobile breakpoints
  }

  if (!isMobile()) {
gsap.to(".adminsliderflex", {
  xPercent: -100 * 2, // Move slider by 100%
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
  gsap.utils.toArray(".adminsliderflex").forEach((slider) => {
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
