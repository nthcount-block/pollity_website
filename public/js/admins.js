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

})