let burger = document.querySelector('.header__navbtn');
let menu = document.querySelector('.header__nav');
let link = menu.querySelectorAll('.header__link');
let closeBurger = menu.querySelector('.menuclose');


burger.addEventListener('click', function(){
menu.classList.add('header__nav_active');
menu.classList.remove('header__nav_disactive');
document.body.classList.toggle('stop-scroll');
});

link.forEach(function(el){
  el.addEventListener('click', function(){
    menu.classList.remove('header__nav_active');
    document.body.classList.remove('stop-scroll');
  });

  closeBurger.addEventListener('click', function(){
    menu.classList.add('header__nav_disactive');
    document.body.classList.remove('stop-scroll');
  });
})
