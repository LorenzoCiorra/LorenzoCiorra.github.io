gsap.registerPlugin(ScrollTrigger);

// fade sections
gsap.utils.toArray("section").forEach(section=>{
  gsap.from(section,{
    opacity:0,
    y:100,
    duration:1,
    scrollTrigger:{
      trigger:section,
      start:"top 80%"
    }
  })
});

// stagger projects
gsap.from(".project",{
  opacity:0,
  y:50,
  stagger:0.2,
  scrollTrigger:{
    trigger:".projects",
    start:"top 80%"
  }
});

// nav hide on scroll
let lastScroll=0;
const nav=document.querySelector(".nav");

window.addEventListener("scroll",()=>{
  let current=window.pageYOffset;
  if(current>lastScroll){
    nav.style.transform="translateY(-100%)";
  } else {
    nav.style.transform="translateY(0)";
  }
  lastScroll=current;
});
