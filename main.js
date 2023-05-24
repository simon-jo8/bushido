import './sass/style.scss';
import './manga.js';
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lottie from 'lottie-web';
import Splitting from 'splitting';

gsap.registerPlugin(ScrollTrigger);
Splitting();




function launch(){
    var tlLoading = gsap.timeline({
        onComplete: function() {
            tlFloating.play();
            tlGrass.play();// start the floating animation after the apparition
            ScrollTrigger.create({
                trigger: '.parallax',
                start: 'top bottom',
                end: 'bottom top',
                onEnter: () => {
                    tlFloating.resume();
                    tlGrass.resume();
                },
                onLeave: () => {
                    tlFloating.pause();
                    tlGrass.pause();
                },
                onEnterBack: () => {
                    tlFloating.resume();
                    tlGrass.resume();
                },
                onLeaveBack: () => {
                    tlFloating.pause();
                    tlGrass.pause();
                }
            });
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
            gsap.to('#titleJapan',
                {
                    scrollTrigger: {
                        scrub: true,
                    },
                    y: -80,
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
        }
    });


    var animation = lottie.loadAnimation({
        container: document.querySelector('.porte'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'https://lottie.host/9c8585cd-8c24-4747-a49f-1c3b6dd7181b/APMvAro7yB.json',
    });

    animation.addEventListener('DOMLoaded', function(){
        // Go to the end of the animation
        animation.goToAndStop(animation.getDuration(true), true);
        // Set direction to reverse
        animation.setDirection(-1);
        // Play the animation
    });

    tlLoading.from(".ground1", {y: 900, duration: 1,ease: Power1.easeOut});
    tlLoading.from(".ground2", {y: 900, duration: 1.2,ease: Power1.easeOut},"<");
    tlLoading.from(".grass1", {y: 900, duration: 1.2,ease: Power1.easeOut},"<");
    tlLoading.from(".grass2", {y: 900, duration: 1.2,ease: Power1.easeOut},"<");
    tlLoading.from(".ground3", {y: 900, duration: 1.4,ease: Power1.easeOut},"<");
    tlLoading.from("#sun", {y:900, duration:2,delay:-1},);
    tlLoading.from(".porte", {opacity: 0, duration: 1,ease: Power1.easeOut},"<");

    tlLoading.from(".porte svg", {y: 900, duration: 1,ease: Power1.easeOut});
    tlLoading.call(() => animation.play());
    tlLoading.from(".pagode", {x: 400, duration: 1,ease: Power1.easeOut},"<");

    tlLoading.from(".katana1", {y: -900, duration: 1},"<");
    tlLoading.from(".katana1", {rotation:-360, transformOrigin:"center center", duration:1},"<");
    tlLoading.from(".katana2", {y: -900, duration: 1,delay:0.5},"<");
    tlLoading.from(".katana2", {rotation:-720, transformOrigin:"center center", duration:1},"<");


    var tlFloating = gsap.timeline({repeat:-1, yoyo:true, paused: true}); // start paused
    tlFloating.to("#sun", {y:'+=20', duration:2});


    var tlGrass = gsap.timeline({repeat:-1, yoyo:true, paused: true}); // start paused
    tlGrass.to(".grass1", {skewX:'+=20', skewY:"+=5", duration:4});
    tlGrass.to(".grass2", {skewX:'+=20', skewY:"+=10", duration:4},"<");

}


window.addEventListener("load", (event) => {
    var loading = lottie.loadAnimation({
        container: document.querySelector('#lottieLoading'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'https://lottie.host/ce803afc-c267-4e27-a2b7-d1a78c489090/Njm0J8HPgp.json',
    });
    loading.play();
    setTimeout(function(){
        loading.destroy();
        document.querySelector('#loading').classList.add('hidden');
        launch();
    },3000)
});

document.querySelector('#titleCut').addEventListener('click', function() {
    var audio = new Audio('/katana.aac');
    audio.play();
    setTimeout(function(){
        document.querySelector('#titleCut').classList.add('cut');
        document.querySelector('#flash').classList.add('active');
    },500)
    setTimeout(function(){
        document.querySelector('#flash').classList.remove('active');
    },1000)
    setTimeout(function(){
        document.querySelector('#titleCut').classList.remove('cut');
    },3800)
})
document.querySelector('.katana1').addEventListener('click', function() {
    var tlKatana = gsap.timeline();
    tlKatana.to('.katana1', { y: -200, duration: 0.5, ease: Power1.easeOut }) // katana jumps
        .to('.katana1', { rotation: 360, transformOrigin: "center center", duration: 0.5 }, 0) // starts rotating
        .to('.katana1', { y: 0, duration: 0.5, ease: Power1.easeIn },"-=0.1") // comes back down
        .to('.katana1', { rotation: 0, transformOrigin: "center center", duration: 0.5 } ,"-=0.5"); // ends rotation
});

document.querySelector('.katana2').addEventListener('click', function() {
    var tlKatana2 = gsap.timeline();
    tlKatana2.to('.katana2', { y: -100, duration: 0.5, ease: Power1.easeOut }) // katana jumps
        .to('.katana2', { rotation: 280, transformOrigin: "center center", duration: 1 }, 0) // starts rotating
        .to('.katana2', { y: 0, duration: 0.5, ease: Power1.easeIn },"-=0.1") // comes back down
        .to('.katana2', { rotation: 0, transformOrigin: "center center", duration: 0.5 }, "-=0.5"); // ends rotation
});


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
