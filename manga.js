import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    var images = document.getElementsByClassName('case');

    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function() {
            this.classList.toggle('clicked');
        });
    }
});


gsap.from('.case-1', { 
    y: '-200',
    opacity: 0,
    scrollTrigger: {
        start: 'top 80%',
        end: 'bottom 100%',
        trigger: '.case-8',
        opacity: 1,
        toggleActions: 'play none none none'
    }
})

gsap.from('.case-8', { 
    x: '-200',
    opacity: 0,
    scrollTrigger: {
        start: 'top 50%',
        end: 'bottom 80%',
        trigger: '.case-8',
        opacity: 1,
        toggleActions: 'play none none none'
    }
})

gsap.from('.case-9', { 
    x: '200',
    opacity: 0,
    scrollTrigger: {
        start: 'top 50%',
        end: 'bottom 80%',
        trigger: '.case-9',
        opacity: 1,
        toggleActions: 'play none none none'
    }
})
gsap.from('.case-10', { 
    x: '-200',
    opacity: 0,
    scrollTrigger: {
        start: 'top 50%',
        end: 'bottom 80%',
        trigger: '.case-10',
        opacity: 1,
        toggleActions: 'play none none none'
    }
})
gsap.from('.case-12', { 
    x: '200',
    opacity: 0,
    scrollTrigger: {
        start: 'top 80%',
        end: 'bottom 100%',
        trigger: '.case-12',
        opacity: 1,
        toggleActions: 'play none none none'
    }
})
gsap.from('.case-3', { 
    y: '200',
    opacity: 0,
    scrollTrigger: {
        start: 'top 80%',
        end: 'bottom 100%',
        trigger: '.case-3',
        opacity: 1,
        toggleActions: 'play none none none'
    }
})
gsap.from('.case-4', { 
    x: '200',
    opacity: 0,
    scrollTrigger: {
        start: 'top 80%',
        end: 'bottom 100%',
        trigger: '.case-3',
        opacity: 1,
        toggleActions: 'play none none none'
    }
})
gsap.from('.case-5', { 
    x: '-200',
    opacity: 0,
    scrollTrigger: {
        start: 'top 80%',
        end: 'bottom 100%',
        trigger: '.case-3',
        opacity: 1,
        toggleActions: 'play none none none'
    }
})
gsap.from('.case-6', { 
    y: '-200',
    opacity: 0,
    scrollTrigger: {
        start: 'top 50%',
        end: 'bottom 100%',
        trigger: '.case-6',
        opacity: 1,
        toggleActions: 'play none none none'
    }
})
gsap.from('.case-7', { 
    y: '300',
    opacity: 0,
    scrollTrigger: {
        start: 'top 50%',
        end: 'bottom 100%',
        trigger: '.case-6',
        opacity: 1,
        toggleActions: 'play none none none'
    }
})