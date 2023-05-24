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

// First part : Jap Title effect

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

// First part : Line effect

let path = document.querySelector('path');
let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', () => {
    // What % down is it ?
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    // Length to offset the dashes
    var drawLength = pathLength * scrollPercentage;

    // Draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength;
})

// First part : Contents scrollTrigger

gsap.fromTo('.first_part_content_one h2',{
    x: 0, opacity: 0
}, {
    scrollTrigger: {
        trigger: '.first_part_content_one h2',
        scrub: 1,
        start: "top 50%",
        duration: 20
    },
    x: 100, opacity: 100
    },
)

gsap.fromTo('.first_part_content_one span',{
    x: 100, opacity: 0
}, {
    scrollTrigger: {
        trigger: '.first_part_content_one span',
        scrub: 1,
        start: "top 70%",
        duration: 20
    },
    x: 0, opacity: 100
    },
)

const texts = document.querySelectorAll('.content_bloc section p');

for(let i = 0; i < texts.length; i++){
    gsap.fromTo(texts[i],{
        y: 50, opacity: 0
    }, {
        scrollTrigger: {
            trigger: texts[i],
            scrub: 1,
            start: "top 70%",
        },
        y: 0, opacity: 100
    },
    )
}

const shapes = document.querySelectorAll('#svg_first_part .shape');

for(let i = 0; i < shapes.length; i++){
    gsap.fromTo(shapes[i],{
        x: -100, opacity: 0
    }, {
        scrollTrigger: {
            trigger: shapes[i],
            scrub: 1,
            start: "top 50%",
            end: "bottom 50%"
        },
        x: 0, opacity: 100
    }
    )
}