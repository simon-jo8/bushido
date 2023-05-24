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

// First part : Jap Title

const tl = gsap.timeline();

tl.from(".line span", 1.8, {
  y: 100,
  ease: "power4.out",
  delay: 1,
  skewY: 7,
  stagger: {
    amount: 0.3
  }
})

let path = document.querySelector('path');
let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + ' ' + pathLength;

path.style.strokeDashoffset = pathLength;

// Animate first part title

gsap.to('.text_parallax',
    {
        scrollTrigger: {
            scrub: true,
        },
        y: -100,
    }
)


// gsap.to('.text_parallax span',
//     {
//         scrollTrigger: {
//             scrub: true,
//         },
//         y: -200,
//     }
// )

window.addEventListener('scroll', () => {

    // What % down is it ?
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    // Length to offset the dashes
    var drawLength = pathLength * scrollPercentage;

    // Draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength;
})

const paths = document.querySelectorAll('#svg_first_part .shape');
console.log(paths);

for(let i = 0; i < 3; i++){
    gsap.fromTo(paths[i],{
        x: -100, opacity: 0,
    }, {
        scrollTrigger: {
            trigger: paths[i],
            markers: true,
            scrub: 1,
            start: "top 50%",
            end: "bottom bottom"
        },
        x: 0, opacity: 100
    })
}