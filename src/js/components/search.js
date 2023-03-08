'use strict';

export function searchLogic() {
    const searchForm = document.querySelector('.search-form__body');    
    const searchInput = document.querySelector('.search-form__input');
    const resultsBody = document.querySelector('.search-form__results');
    const categoriesBtns = document.querySelectorAll('.categories-search__btn');

    searchInput.addEventListener('input', (e) => {
        searchInput.value = searchInput.value.replace(/[^a-z]/ig, ''); 
    });

    searchForm.addEventListener('submit', (e) => {        
        e.preventDefault();

        search(searchInput.value);
        searchInput.value = '';
    });

    categoriesBtns.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            search(item.textContent);
        });
    });

    function falseResult() {
        resultsBody.innerHTML = '<div class="search-results__false">No results</div>';
    }

    function search(text) {         
        if (text === '') {
            falseResult();
        } else {
            
            if (text.length > 0) {   
                resultsBody.innerHTML = '<ul class="search-results__body"></ul>';
                const results = document.querySelector('.search-results__body');
                
                const searchResults = document.querySelectorAll('.item-products__title');
                let filteredResults = [];
                searchResults.forEach(item => {
                    
                    if (item.textContent.toLowerCase().includes(text.toLowerCase())) {
                        filteredResults.push(item.textContent);
                    }
                });  

                if (filteredResults.length > 0) {

                    filteredResults.forEach(item => {

                        results.innerHTML += `
                            <li class="search-results__item">
                                <a href="#" class="search-results__link products-link btn-dark">${item}</a>
                            </li>
                        `;
                    });

                } else {

                    falseResult();
                    
                }
                
                    
            } else {
                falseResult();
            }
        }        
    }
}