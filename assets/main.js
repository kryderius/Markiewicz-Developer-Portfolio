//ScrollTrigger Register Plugin
gsap.registerPlugin(ScrollTrigger);

/*
$("html").easeScroll({
  frameRate: 75,
  animationTime: 1500,
  stepSize: 80,
  pulseAlgorithm: 1,
  pulseScale: 6,
  pulseNormalize: 1,
  accelerationDelta: 20,
  accelerationMax: 1,
  keyboardSupport: true,
  arrowScroll: 50,
  touchpadSupport: true,
  fixedBackground: true,
});
*/
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-open");

const handleClick = () => {
  hamburger.classList.toggle("hamburger--active");
  nav.classList.toggle("nav-open--active");
};
hamburger.addEventListener("click", handleClick);

gsap.from("#long-heading", 1, {
  x: "-100%",
  ease: Power2.easeInOut,
});
gsap.from("#hero-h1", 1, {
  y: "-100%",
  opacity: 0,
  ease: Power4.easeInOut,
  delay: 0.5,
});
gsap.from("#hero-h1-stroke", 1, {
  y: "-100%",
  opacity: 0,
  ease: Power4.easeInOut,
  delay: 0.5,
});
gsap.from("#hero-h2", 1, {
  y: "-100%",
  opacity: 0,
  ease: Power4.easeInOut,
  delay: 1,
});
gsap.from("#hero-h2-stroke", 1, {
  y: "-100%",
  opacity: 0,
  ease: Power4.easeInOut,
  delay: 1,
});

gsap.from(".hero-text-area p", 1, {
  x: "-100%",
  ease: Power4.easeInOut,
  delay: 1,
});
gsap.to("#img-span", 2, { x: "100%", ease: Power4.easeInOut, delay: 0.2 });

gsap.to("#hero-img", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top", // the default values
    // end: "bottom top",
    scrub: true,
  },
});

gsap.from("#designer", 1.5, {
  x: "60%",
  ease: "none",
  scrollTrigger: {
    trigger: ".portfolio",
    start: "top bottom", // the default values
    end: "center bottom",
    scrub: true,
  },
});
gsap.from("#portfolio-h3", 1.5, {
  y: "100%",
  ease: Power4.easeInOut,
  scrollTrigger: {
    trigger: ".portfolio-header",
    start: "top bottom", // the default values
    // end: "bottom top",
  },
});
gsap.to(".portfolio-img-span", 1, {
  x: "100%",
  ease: Power4.easeInOut,
  scrollTrigger: {
    trigger: ".portfolio-img",
    start: "top 75%", // the default values
    // end: "bottom top",
  },
});
gsap.to(".cleantime-img-span", 1, {
  x: "100%",
  ease: Power4.easeInOut,
  scrollTrigger: {
    trigger: ".cleantime-img",
    start: "top 75%", // the default values
    // end: "bottom top",
  },
});
gsap.to(".agachem-img-span", 1, {
  x: "100%",
  ease: Power4.easeInOut,
  scrollTrigger: {
    trigger: ".agachem-img",
    start: "top 75%", // the default values
    // end: "bottom top",
  },
});
gsap.from("#h3-left", 1, {
  y: "100%",
  opacity: 0,
  ease: Power4.easeInOut,
  scrollTrigger: {
    trigger: ".left",
    start: "top 75%", // the default values
    // end: "bottom top",
  },
});
gsap.from("#h5-right", 1, {
  x: "-100%",
  ease: Power4.easeInOut,
  scrollTrigger: {
    trigger: ".right",
    start: "top 75%", // the default values
    // end: "bottom top",
  },
});
gsap.from("#card-h5", 1, {
  y: "100%",
  ease: Power4.easeInOut,
  scrollTrigger: {
    trigger: ".card",
    start: "top 75%", // the default values
    // end: "bottom top",
  },
});
gsap.from("#card-h5-stroke", 1, {
  y: "100%",
  ease: Power4.easeInOut,
  scrollTrigger: {
    trigger: ".card",
    start: "top 75%", // the default values
    // end: "bottom top",
  },
});
gsap.to("#card-img", 1.5, {
  y: "10%",
  ease: "none",
  scrollTrigger: {
    trigger: ".card",
    start: "top 75%", // the default values
    end: "bottom bottom",
    scrub: true,
  },
});
gsap.from("#graphic", 1.5, {
  x: "-60%",
  ease: "none",
  scrollTrigger: {
    trigger: ".offer",
    start: "top bottom", // the default values
    end: "bottom bottom",
    scrub: true,
  },
});
gsap.from("#offer-h3", 1.5, {
  y: "100%",
  ease: Power4.easeInOut,
  scrollTrigger: {
    trigger: ".offer-heading",
    start: "top bottom", // the default values
    // end: "bottom top",
  },
});
