'use strict';

export function headerActions() {
    const headerMenu = document.querySelector('.header__menu');            
    const burger = document.querySelector('.header__burger');  
    const searchBtn = document.querySelector('.header__search-btn');
    const closeSearchBtn = document.querySelector('.search-form__close');
    const search = document.querySelector('.header__search'); 
    const header = document.querySelector('.header'); 
    const headerIcons = document.querySelector('.header__icons'); 
    const headerUserBtn = document.querySelector('.header__user'); 
    const headerSearchBtn = document.querySelector('.header__search-btn'); 
    const headerCart = document.querySelector('.header__cart'); 
    const home = document.querySelector('.home'); 
    const products = document.querySelector('.products'); 
    const services = document.querySelector('.services'); 
    const blog = document.querySelector('.blog'); 
    const footer = document.querySelector('.footer'); 
    const preloader = document.querySelector('.preloader');     
    const wrapper = document.querySelector('.wrapper');
    const scrollWidth = window.innerWidth - wrapper.offsetWidth + 'px';  
    const elems = document.body.querySelectorAll('*');
    const searchElems = search.querySelectorAll('*');

    //Header Dinamic Adaptiv
    function dinamicAdaptiv() {
        const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
        if (viewportWidth <= 480) {            
            headerIcons.append(headerSearchBtn, headerUserBtn);
        } else {
            headerCart.before(headerSearchBtn, headerUserBtn);
        }
    }

    window.addEventListener('resize', () => {
        dinamicAdaptiv();
    });

    //Preloader
    window.addEventListener('load', () => {       
        dinamicAdaptiv();
        
        setTimeout(() => {            
            if (!preloader.classList.contains('done')) {
                preloader.classList.add('done');
            }
        }, 3000);
    });

    function headerMenuActions() {
        if (headerMenu.classList.contains('active')) {
            document.body.style.paddingRight = scrollWidth;
            header.style.paddingRight = scrollWidth;
            document.body.classList.add('hidden');

        } else {
            document.body.classList.remove('hidden');
            document.body.style.paddingRight = '';
            header.style.paddingRight = '';
        }
    }

    //Header
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        headerMenu.classList.toggle('active');
        
        headerMenuActions();
        
    });

    //Smooth Scroll
    function smoothScroll(element) {
        const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
        let elementTopOffset = 0;

        if (viewportWidth > 480) {
            elementTopOffset = element.offsetTop - 70;
        } else {
            elementTopOffset = element.offsetTop - 65;
        }

        window.scroll({
            left: 0,
            top: elementTopOffset,
            behavior: 'smooth'
        });
    }

    function removeClasses() {
        if (headerMenu.classList.contains('active')) {
            headerMenu.classList.remove('active');        
        }

        if (burger.classList.contains('active')) {
            burger.classList.remove('active');       
        } 
    }

    //Search

    searchBtn.addEventListener('click', () => {          
        search.classList.add('active');
        document.body.classList.add('hidden');
        document.body.style.paddingRight = scrollWidth;
        header.style.paddingRight = scrollWidth;
        
            
        elems.forEach(item => {
            if (item !== search && item !== wrapper && item !== header &&
                item !== document.querySelector('.header__container') &&
                item !== document.querySelector('.header__body')) { 
                
                item.inert = true;
            }
        });
        
        searchElems.forEach(item => {                    
            item.inert = false;            
        });

        document.querySelector('.search-form__input').focus();
        
    });

    function defaultSettings() {
        document.body.classList.remove('hidden');
        document.body.style.paddingRight = '';
        header.style.paddingRight = '';
        document.querySelector('.search-form__results').innerHTML = '';

        elems.forEach(item => {                    
            item.inert = false;            
        });        
    }

    closeSearchBtn.addEventListener('click', () => {        
        search.classList.remove('active');
        defaultSettings();
        searchBtn.focus();
    });

    window.addEventListener('scroll', () => {

        if (window.scrollY > 0) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    }); 
    
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            if (search.classList.contains('active')) {
                search.classList.remove('active');
                defaultSettings();
                searchBtn.focus();
            }

            if (headerMenu.classList.contains('active')) {
                headerMenu.classList.remove('active');
                headerMenuActions();
            }

            if (burger.classList.contains('active')) {
                burger.classList.remove('active');
            }
        }
    });

    document.addEventListener('click', (e) => {
        const target = e.target;
        
       //Smooth Scroll
        if (target.classList.contains('home-link')) {            
            e.preventDefault();
            removeClasses();
            smoothScroll(home); 
            headerMenuActions();
        }

        
        if (target.classList.contains('products-link')) {            
            e.preventDefault();
            removeClasses();
            smoothScroll(products);

            if (search.classList.contains('active')) {
                search.classList.remove('active'); 
                defaultSettings();                
            }

            document.querySelector('.item-products__btn').focus();
        }

        if (target.classList.contains('services-link')) {            
            e.preventDefault();
            removeClasses();
            smoothScroll(services);
            headerMenuActions();
        }

        if (target.classList.contains('blog-link')) {            
            e.preventDefault();
            removeClasses();
            smoothScroll(blog);
            headerMenuActions();
            document.querySelector('.item-blog__btn').focus();
        }

        if (target.classList.contains('contacts-link')) {            
            e.preventDefault();
            removeClasses();
            smoothScroll(footer);
            headerMenuActions();
            document.querySelector('.footer-column__link').focus();            
        }

        if (target.classList.contains('header__search-btn')) {            
            e.preventDefault();
            removeClasses();
        }

        if (target.classList.contains('header__user')) {            
            e.preventDefault();
            removeClasses();
        }

        if (!target.closest('.header__menu') && !target.closest('.header__burger') &&
            burger.classList.contains('active')) {
            removeClasses();
            headerMenuActions();
        }

        if (!target.closest('.header__search') && !target.classList.contains('header__search-btn') &&
            search.classList.contains('active')) {
            search.classList.remove('active');
            defaultSettings();
        }
        
    });
}