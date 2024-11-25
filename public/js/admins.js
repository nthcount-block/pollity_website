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
        duration: 1, // Duration of the slide-in
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
        duration: 1, // Duration of the slide-in
        stagger: 0.5, // Stagger the animations for each element
    });

    function isMobile() {
      return window.innerWidth < 768; // You can adjust this width as per your mobile breakpoints
  }

  if (!isMobile()) {
    const sliderContainer = document.querySelector('.adminslidercontainer');
    const slides = document.querySelectorAll('.adminsliderflex');
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
