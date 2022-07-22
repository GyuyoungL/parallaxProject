// timeline effect
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

let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".step1",
    pin: true,
    scrub: 1, 
    toggleActions: "play pause play reset",
  },
  autoAlpha: 0,
  onComplete: () => {
    console.log("yay");
  },
});

tl1
  .from(".checklist", { scale: 0.2, opacity: 0, duration: 3 })
  .from(".checklist0", { opacity: 0, duration: 1 })
  .to(".checklist0 .image-wrapper .checked", { display: "block", delay: 10, duration: 10, autoAlpha: 1 })
  .from(".checklist1", { opacity: 0, duration: 1 }, "-=1") 
  .to(".checklist1 .image-wrapper .checked", { display: "block", delay: 10, duration: 10, autoAlpha: 1 })
  .from(".checklist2", { opacity: 0, duration: 1 })
  .to(".checklist2 .image-wrapper .checked", { display: "block", delay: 10, duration: 10, autoAlpha: 1 })
  .from(".checklist3", { opacity: 0, duration: 1 })
  .to(".checklist3 .image-wrapper .checked", { display: "block", delay: 10, duration: 10, autoAlpha: 1 })
  .from(".checklist4", { opacity: 0, duration: 1 })
  .to(".checklist4 .image-wrapper .checked", { display: "block", delay: 10, duration: 10, autoAlpha: 1 });

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".step2",
    pin: true,
    scrub: 1,
    toggleActions: "play pause play reset",
  },
  autoAlpha: 0,
});

tl2 
  .from(".shape", { x: 300, y: -800, opacity: 0, scale: 0.2, duration: 0.5 }, "-=0.5")
  .to(".shape", { display: "none", duration: 10, scale: 0 })
  .from(".registration", { opacity: 0, duration: 1.5, scale: 0.2, autoAlpha: 1 }) 
  .from(".register1", { opacity: 0, duration: 1.5 })
  .from(".register2", { opacity: 0, duration: 1.5 })
  .from(".register3", { opacity: 0, duration: 1.5 })
  .from(".register4", { opacity: 0, duration: 1.5 });

let tl3 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".step3",
      pin: true,
      scrub: 1,
    },
    autoAlpha: 0,
  })
  .to(
    ".rocket",
    3.5,
    {
      transformOrigin: "50% 50%",
      ease: Expo.easeIn,
    },
    "start"
  )
  .from(".scene", { opacity: 0, scale: 0.2, duration: 0.5 }, "-=0.5")
  .to(".scene", { y: -500, display: "none", duration: 10 })
  .from(".step3 h2", { opacity: 0, duration: 1.5 }) 
  .from(".shape-parent p", { opacity: 0, duration: 0.5 }, "-=1") 
  .from(".wind", { opacity: 0, duration: 0.5 }) 
  .from(".wind2", { opacity: 0, duration: 0.5 })
  .from(".star1", { opacity: 0, duration: 0.5 })
  .from(".star2", { opacity: 0, duration: 0.5 })
  .from(".star3", { opacity: 0, duration: 0.5 })
  .from(".star4", { opacity: 0, duration: 0.5 })
  .from(".dots", { opacity: 0, duration: 0.5 }); 


  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".step4",
      pin: true,
      scrub: 1,
    },
    autoAlpha: 0,
  });
  tl4.from(".background", { opacity: 0, duration: 0.4 })
  .from(".foreground", {  opacity: 0, duration: 0.4 })
  .to(".foreground", { x:300,duration: 10, scale: 0.2 })
  .to(".astronaut_section", {  display: "none", duration: 10, scale: 0 },  "-=1")
  .from(".creation", { opacity: 0, duration: 1.5 }) 
  .from(".creation1", { opacity: 0, duration: 1.5 })
  .from(".creation2", { opacity: 0, duration: 1.5 })
  .from(".creation3", { opacity: 0, duration: 1.5 })

  let tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".step5",
      pin: true,
      scrub: 1,
    },
    autoAlpha: 0,
  });

  tl5.from(".card", { opacity: 0, duration: 0.4 })
  .from(".bg_night", { opacity: 0, duration: 0.4 })
  .from(".moon2" , {opacity:0, duration:1.5})
  .from(".baby_astronaut",{opacity:0, duration:1.5} )
  .to(".baby_astronaut",{ y:200, x:100, duration: 10 } )
  .to(".baby_astronaut",{ y:300, x:50, duration: 10 } )
  .to(".bg_night", { display: "none"})
  .from(".submission-parent",{opacity:0, duration:1.0})

  let tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".step6",
      scrub: 1,
    },
    autoAlpha: 0,
  });
  tl6.from(".scrollable", { opacity: 0, duration: 0.4 })

function stars() {
  let count = 20;
  let scene = document.querySelector(".scene");
  let i = 0;
  while (i < count) {
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);
    let duration = Math.random() * 1;
    let h = Math.random() * 100;
    star.style.left = x + "px";
    star.style.width = 1 + "px";
    star.style.height = 50 + h + "px";
    star.style.animationDuration = duration + "s";
    scene.appendChild(star);
    i++;
  }
}
stars();

// scroll bar
document.addEventListener("DOMContentLoaded",function(){
  let progressBarInner = document.querySelector(".progress-bar-inner");

  window.addEventListener('scroll', function(){
    let h = document.documentElement;

    let st = h.scrollTop || this.document.body.scrollTop;       
    let sh = h.scrollHeight || this.document.body.scrollHeight; 

    let percentage = st / (sh-h.clientHeight) * 100;            
    let roundedPercentage = Math.round(percentage)              

    progressBarInner.style.width = percentage + "%";
    progressBarInner.innerText = roundedPercentage+"%";
  })
})


// sticky effect on scroll
var imageEl = document.querySelector('.astronaut3');

function getSrc(scrollPos) {
  if (scrollPos < 11832) return './img/astronaut_1.png';
  if (scrollPos < 12791) return './img/astronaut_2.png';
  if (scrollPos < 13766) return './img/astronaut_3.png';
  if (scrollPos < 14648) return './img/astronaut_4.png';
  return './img/astronaut_6.png';
  }

window.addEventListener('scroll', function() {
  imageEl.src = getSrc(window.scrollY);
});

smoothScroll()

