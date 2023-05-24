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

/* Jonathan */
/* Bloc Influence */
const influenceSection = document.querySelector('#influence-section');
const horizontal_img = document.querySelector('.horizontal_img');
const vertical_img = document.querySelector('.vertical_img');
const jp_text = document.querySelector('.jp_text');

const options = {
  root: null,
  threshold: 0.5,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      horizontal_img.classList.add('slidefromright');
      vertical_img.classList.add('slidefrombottom');
      jp_text.classList.add('slidefromright');

      observer.unobserve(entry.target);
    } else {
      horizontal_img.classList.remove('slidefromright');
      vertical_img.classList.remove('slidefrombottom');
      jp_text.classList.remove('slidefromright');
    }
  });
};

const observer = new IntersectionObserver(callback, options);

observer.observe(influenceSection);

// Katana scroll
const image = document.querySelector('.scroll-katana');
const initialPosition = -2000;
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const newPosition = initialPosition + scrollPosition;
  image.style.transform = `translateX(${newPosition}px)`;
});

// Fin Jonathan