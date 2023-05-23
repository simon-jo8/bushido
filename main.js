import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

var tlKatana1 = gsap.timeline();
tlKatana1.from(".katana1", {y: -900, duration: 1});
tlKatana1.from(".katana1", {rotation:-360, transformOrigin:"center center", duration:1},"<");

var tlKatana2 = gsap.timeline();
tlKatana2.from(".katana2", {y: -900, duration: 1});
tlKatana2.from(".katana2", {rotation:-360, transformOrigin:"center center", duration:1},"<");



gsap.from('#first',
    {

    })

gsap.to('#first',
    {
        scrollTrigger: {
            scrub: true,
        },
        y: -50,
    }
)
gsap.to('#title',
    {
        scrollTrigger: {
            scrub: true,
        },
        y: -100,
    }
)
gsap.to('#sun',
    {
        scrollTrigger: {
            scrub: true,
        },
        y: 300,
    }
)
gsap.to('#second',
    {
        scrollTrigger: {
            scrub: true,
        },
        y: -200,
    }
)

gsap.to('#third',
    {
        scrollTrigger: {
            scrub: true,
        },
        y: -300,
    }
)

// Bloc Influence Jonathan
const influenceSection = document.querySelector('#influence-section');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const jp = document.querySelector('.jp');

const options = {
  root: null,
  threshold: 0.5,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      img1.classList.add('slidefromright');
      img2.classList.add('slidefrombottom');
      jp.classList.add('slidefromright');

      observer.unobserve(entry.target);
    } else {
      img1.classList.remove('slidefromright');
      img2.classList.remove('slidefrombottom');
      jp.classList.remove('slidefromright');
    }
  });
};

const observer = new IntersectionObserver(callback, options);

observer.observe(influenceSection);