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

    // gsap.to(".atblockvote", {
    //     scrollTrigger: {
    //         trigger: ".atblockvote", // Trigger when the section enters the viewport
    //         start: "top 80%", // Start when the top of the section is at 80% of the viewport
    //         toggleActions: "play none none none", // Control the animation
    //     },
    //     color: "#004B52", // Change to dark green
    //     duration: 1, // Duration of the color change
    //     ease: "power1.inOut" // Easing function
    // });
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

})