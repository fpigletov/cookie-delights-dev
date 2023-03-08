'use strict';

export function blogSlider() {
    new Swiper('.blog__slider', {  
        loop: true, 
        grabCursor: true,
        spaceBetween: 20,   
        speed: 800,
        autoplay: {
            delay: 3000,
        },
        watchSlidesProgress: true,
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1.1,        
            },
            576: {
                slidesPerView: 2.2,
            },
            992: {
                slidesPerView: 3,
            }            
        }
    });
}