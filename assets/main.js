//ScrollTrigger Register Plugin
gsap.registerPlugin(ScrollTrigger);

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-open");

const handleClick = () => {
  hamburger.classList.toggle("hamburger--active");
  nav.classList.toggle("nav-open--active");
};
hamburger.addEventListener("click", handleClick);

gsap.from("#long-heading", 0.5, {
  x: "-100%",
  ease: Power4.easeInOut,
});
gsap.from("#hero-h1", 1, {
  y: "-100%",
  opacity: 0,
  ease: Power4.easeOut,
  delay: 0.5,
});
gsap.from("#hero-h1-stroke", 1, {
  y: "-100%",
  opacity: 0,
  ease: Power4.easeOut,
  delay: 0.5,
});
gsap.from("#hero-h2", 1, {
  y: "-100%",
  opacity: 0,
  ease: Power4.easeOut,
  delay: 1,
});
gsap.from("#hero-h2-stroke", 1, {
  y: "-100%",
  opacity: 0,
  ease: Power4.easeOut,
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
    trigger: "#hero-h1",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true,
  },
});
