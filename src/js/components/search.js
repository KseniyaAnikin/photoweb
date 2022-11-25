let search = document.querySelector('.header__search');
let searchForm = document.querySelector('.header__formsearch');
let closeSearch  = searchForm.querySelector('.header__formbtn');

search.addEventListener('click', function(){
searchForm.classList.remove('header__formsearch_disactive');
searchForm.classList.add('header__formsearch_active');
});

closeSearch.addEventListener('click',function(e){
  e.preventDefault();
searchForm.classList.remove('header__formsearch_active');
searchForm.classList.add('header__formsearch_disactive');
});
