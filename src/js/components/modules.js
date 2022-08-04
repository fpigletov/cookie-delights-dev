'use strict';

//Modals 
export function modal(triggerSelector, contentSelector) {
    const modal = document.querySelector('.modal');
    const modalCloseBtn = modal.querySelector('.modal__close');
    const header = document.querySelector('.header'); 
    const wrapper = document.querySelector('.wrapper'); 
    const modalContent = modal.querySelector(contentSelector);    
    const trigger = document.querySelectorAll(triggerSelector);              
    const scrollWidth = window.innerWidth - wrapper.offsetWidth + 'px';   
    let lastFocusedEl;
    
    const openModal = () => {            
        modal.classList.add('active');
        modalContent.classList.add('active');
        modalContent.scrollTop = 0;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = scrollWidth;
        header.style.paddingRight = scrollWidth;
        lastFocusedEl = document.activeElement;
        
        Array.from(document.body.children).forEach(item => {
            if (item !== modal) {
                item.inert = true;
            }
        });        
    };

    const closeModal = () => {
        modal.classList.remove('active');
        modalContent.scrollTop = 0;
        modalContent.classList.remove('active');
        document.body.style.overflow = '';   
        document.body.style.paddingRight = '';
        header.style.paddingRight = '';  
        
        Array.from(document.body.children).forEach(item => {
            if (item !== modal) {
                item.inert = false;
            }
        });        
    };

    trigger.forEach(item => {
        item.addEventListener('click', (e) => {                
            if (e.target) {
                e.preventDefault();                    
            }                
            openModal();
        });   
    });

    
    document.addEventListener('click', (e) => {
        if (triggerSelector === '.blog-open-link' && e.target.classList.contains('blog-open-link')) {
            openModal();
        }

        if (e.target === modal && modal.classList.contains('active') && modalContent.classList.contains('active')) {
            closeModal();
            lastFocusedEl.focus();
        }

        if (e.target.classList.contains('to-products')) {             
            closeModal();
            document.querySelector('.item-products__btn').focus();
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('active') && modalContent.classList.contains('active')) {
            closeModal();
            lastFocusedEl.focus();
        }
    });
    
    modalCloseBtn.addEventListener('click', () => {
        if (modal.classList.contains('active') && modalContent.classList.contains('active')) {
            closeModal();
            lastFocusedEl.focus();
        }
    });
}