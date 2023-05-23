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

  // Get the elements
  const influenceSection = document.querySelector('#influence-section');
  const img1 = document.querySelector('.img1');
  const img2 = document.querySelector('.img2');
  const jp = document.querySelector('.jp');

  // Options for the Intersection Observer
  const options = {
    root: null, // Use the viewport as the root
    threshold: 0.5, // Trigger the callback when 50% of the element is visible
  };

  // Callback function when the section is intersecting
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation classes when the section is in the viewport
        img1.classList.add('slidefromright');
        img2.classList.add('slidefrombottom');
        jp.classList.add('slidefromright');
      } else {
        // Remove animation classes when the section is out of the viewport
        img1.classList.remove('slidefromright');
        img2.classList.remove('slidefrombottom');
        jp.classList.remove('slidefromright');
      }
    });
  };

  // Create the Intersection Observer
  const observer = new IntersectionObserver(callback, options);

  // Start observing the influence section
  observer.observe(influenceSection);
