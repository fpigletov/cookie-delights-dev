'use strict';

export function uploadFromDB() {

    const productsBody = document.querySelector('.products__body');
    const showMoreBtn = document.querySelector('.products__btn');
    const blogWrapper = document.querySelector('.blog__wrapper');
    let productQuantity = 0;
    let dataLength = null;
    
    //Products 
    function loadingProducts(list, quantity) {
            
        fetch('https://fpigletov-db.herokuapp.com/CookiesDelights/')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                dataLength = data.products.length;

                list.innerHTML = '';

                for (let i = 0; i < dataLength; i++) {
                    if (i < quantity) {
                        let item = data.products[i];
                        
                        list.innerHTML += `
                            <li data-product-id="${item.id}" class="products__item item-products">
                                <div class="item-products__image">
                                    <picture>
                                        <source srcset="${item.mainImageWebp}" type="image/webp">
                                        <img loading="lazy" src="${item.mainImageJpg}" alt="${item.mainImageAlt}">
                                    </picture> 
                                </div> 
                                <div class="item-products__content">   
                                    <div class="item-products__top">
                                        <h3 class="item-products__title">${item.title}</h3>
                                        <div class="item-products__info">
                                            <div class="item-products__subtitle">${item.subtitle}</div>
                                            <div class="item-products__price">$${item.price}</div>
                                        </div>                        
                                    </div>                    
                                    <div class="item-products__body">
                                        <button data-btn-id="${item.id}" type="button" class="item-products__btn btn-double product-btn btn-dark" aria-label="Buy Now"><span class="product-btn" data-attr="Buy">Buy</span><span class="product-btn" data-attr="Now">Now</span></button>                     
                                    </div>
                                </div>   
                            </li>
                        `;
                    }
                } 

                ScrollTrigger.refresh();
            })
            .catch(err => alert(err));
    }

    if (productsBody) {
        productQuantity = 6;

        loadingProducts(productsBody, productQuantity);

        showMoreBtn.addEventListener('click', (e) => {
            productQuantity += 3;

            loadingProducts(productsBody, productQuantity);
                
            if (productQuantity >= dataLength) {
                console.log(dataLength);
                showMoreBtn.style.display = 'none';
            } else {
                showMoreBtn.style.display = 'inline-flex';
            }
        });
    }

    //Blog

    if (blogWrapper) {
    
        fetch('https://fpigletov-db.herokuapp.com/CookiesDelights/')
            .then((response) => {
                return response.json();
            })
            .then((blogData) => {
                const blogDataLength = blogData.blog.length;

                blogWrapper.innerHTML = '';

                for (let i = 0; i < blogDataLength; i++) {
                    
                        let blogItem = blogData.blog[i];
                        
                        blogWrapper.innerHTML += `
                            <article data-blog-id="${blogItem.id}" class="blog__item item-blog swiper-slide">
                                <div class="item-blog__image">
                                    <picture>
                                        <source srcset="${blogItem.mainImageWebp}" type="image/webp">
                                        <img loading="lazy" src="${blogItem.mainImageJpg}" alt="${blogItem.mainImageAlt}">
                                    </picture>
                                    <div class="item-blog__icons">
                                        <div class="item-blog__icon icon-calendar">${blogItem.date}</div>
                                        <div class="item-blog__icon icon-user">${blogItem.user}</div>
                                    </div>
                                </div>                               
                                <div class="item-blog__content">
                                    <h4 class="item-blog__title">${blogItem.title}</h4>                        
                                    <button type="button" class="item-blog__btn btn-double blog-open-link btn-light"><span  class="blog-open-link" data-attr="Read">Read</span><span class="blog-open-link" data-attr="More">More</span></button>
                                </div>                
                            </article>                
                        `;
                }

                ScrollTrigger.refresh();
            })
            .catch(err => alert(err));
        
        
    }

}