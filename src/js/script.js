'use strict';

// import { uploadFromDB } from './components/upload';
import { productsLogic } from './components/products';
import { modal } from './components/modules';
import { gsapAnimation } from './components/animation';
import { searchLogic } from './components/search';
import { headerActions } from './components/header';
import { blogSlider } from './components/sliders';


window.addEventListener('DOMContentLoaded', () => {

    //Header
    headerActions();
    
    //Animation
    gsapAnimation();

    //Search
    searchLogic();    

    //Upload from DB
    // uploadFromDB();

    //Products Logic
    productsLogic();

    //Login
    modal('[data-user]', '.login-modal');

    // Checkout
    modal('.checkout-link', '.checkout-modal');

    //Why Modal
    modal('.why-link', '.why-modal');

    //Blog Modal    
    modal('.blog-open-link', '.blog-modal');
    
    // Checkout Select
    const select = document.querySelector('.modal-block__select');

    const choices = new Choices(select, {
        shouldSort: false,
        position: 'bottom',
        searchEnabled: false,
    });

    //Blog slider
    blogSlider();
    
});









