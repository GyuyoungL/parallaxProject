gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".bg",
    pin: true,
    scrub: 1,
  },
  autoAlpha: 0,
});
tl.from(".bg-circle", { x: -600, opacity: 0, duration: 0.4 });

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".effect_eight",
    pin: true,
    scrub: 1,
    toggleActions: "play pause play reset",
  },
  autoAlpha: 0,
});

tl2 
  .from(".shape", { x: 1000, y: -1000, opacity: 0, scale: 0.2, duration: 0.5 }, "-=0.5")
  .to(".shape", { display: "none", duration: 10, scale: 0 })

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".effect_ten",
    pin: true,
    scrub: 1,
  },
  autoAlpha: 0,
});
tl4.from(".background", { opacity: 0, duration: 0.4 })
.from(".foreground", {  opacity: 0, duration: 0.4 })
.to(".foreground", { x:300,duration: 10, scale: 0.2 })
.to(".astronaut_section", {  display: "none", duration: 10, scale: 0 },  "-=1")

var imageEl = document.querySelector('.astronaut3');

function getSrc(scrollPos) {
  console.log(scrollPos)
  if (scrollPos < 14700) return './img/astronaut_1.png';
  if (scrollPos < 15800) return './img/astronaut_2.png';
  if (scrollPos < 16800) return './img/astronaut_3.png';
  }

window.addEventListener('scroll', function() {
  imageEl.src = getSrc(window.scrollY);
});
