'use strict';

export function gsapAnimation() {

    //Home Animation    
    gsap.registerPlugin(ScrollTrigger);

    //Start
    const startTl = gsap.timeline();   

    startTl.from('.home', { opacity: 0, duration: 1, delay: 3 })
        .from('.header', { opacity: 0, duration: 0.5 });
    
    function adaptiveAnimation(homeEnd, moonY, textY, textDuration, textDelay, sectionStart, footerStart) {

        //Home
        gsap.timeline({
            scrollTrigger: {
                trigger: '.home',
                pin: true,
                start: 'top top',
                end: homeEnd,
                scrub: 1.5,
                duration: 5,
            }
        })
        .to('#moon', { yPercent: moonY, duration: 1 })
        .to('#mountain', { yPercent: 50, opacity: 0, duration: 1 }, '-=1')
        .to('#cloud-left', { xPercent: -130, duration: 1 }, '-=1')
        .to('#cloud-right', { xPercent: 130, duration: 1 }, '-=1')
        .from('.home__text', { yPercent: textY, scale: 0.5, duration: textDuration, delay: textDelay }, '-=1');
        
        //About        
        gsap.timeline({
            scrollTrigger: {
                trigger: '.main__about',
                start: sectionStart,
                end: 'bottom bottom',
                toggleActions: 'restart none none reverse'
            }
        })
        .from('.about__wrapper', {
            duration: 2,
            opacity: 0,
        });

        //Products        
        gsap.timeline({
            scrollTrigger: {
                trigger: '.main__products',
                start: sectionStart,
                end: 'bottom bottom',
                toggleActions: 'restart none none reverse'
            }
        })
        .from('.products__title', {
            duration: 2,
            opacity: 0,
        })
        .from('.products__body', {
            duration: 2,
            opacity: 0,
        }, '-=1')
        .from('.products__btn', {
            duration: 2,
            opacity: 0,
        }, '-=0.5');

        //Services        
        gsap.timeline({
            scrollTrigger: {
                trigger: '.main__services',
                start: sectionStart,
                end: 'bottom bottom',
                toggleActions: 'restart none none reverse'
            }
        })
        .from('.services__title', {
            duration: 2,
            opacity: 0,
        })
        .from('.services__item', {
            stagger: 0.2,
            duration: 2,
            opacity: 0,
        }, '-=1');

        //Contact        
        gsap.timeline({
            scrollTrigger: {
                trigger: '.main__contact',
                start: sectionStart,
                end: 'bottom bottom',
                toggleActions: 'restart none none reverse'
            }
        })
        .from('.contact__wrapper', {
            duration: 2,
            opacity: 0,
        });

        //Blog       
        gsap.timeline({
            scrollTrigger: {
                trigger: '.main__blog',
                start: sectionStart,
                end: 'bottom bottom',
                toggleActions: 'restart none none reverse'
            }
        })
        .from('.blog__title', {
            duration: 2,
            opacity: 0,
        })
        .from('.blog__slider', {
            duration: 2,
            opacity: 0,
        }, '-=1');

        //Footer        
        gsap.timeline({
            scrollTrigger: {
                trigger: '.footer',
                start: footerStart,
                end: 'bottom bottom',
                toggleActions: 'restart none none reverse'
            }
        })
        .from('.footer', {
            duration: 1,
            opacity: 0,
        })
        .from('.footer__column', {
            stagger: 0.2,
            duration: 2,
            opacity: 0,
        }, '-=0.5')
        .from('.footer__credit', {
            duration: 2,
            opacity: 0,
        }, '-=1.5');

    }

    ScrollTrigger.matchMedia({
        "(min-width: 1000px) and (min-height: 1201px)": function () {

            adaptiveAnimation('+=3000', -200, 450, 1, 1, 'top 70%', 'top 80%');

        },
        "(min-width: 992px) and (max-height: 1200px)": function () {

            adaptiveAnimation('+=3000', -120, 400, 1, 0.5, 'top center', 'top 70%');
            
        },
        "(min-width: 760px) and (max-width: 991px)": function () {

            adaptiveAnimation('+=3000', -170, 500, 2, 1, 'top 70%', 'top 80%');
            
        },
        "(max-width: 759px)": function () {

            adaptiveAnimation('+=1700', -220, 660, 2, 1, 'top 50%', 'top 50%');
            
        },
        "all": function () {
            ScrollTrigger.refresh();
        }
    });
}