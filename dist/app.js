"use strict";var e=document.querySelector(".header__navbtn"),o=document.querySelector(".header__nav"),t=o.querySelectorAll(".header__link"),r=o.querySelector(".menuclose");e.addEventListener("click",(function(){o.classList.add("header__nav_active"),o.classList.remove("header__nav_disactive"),document.body.classList.toggle("stop-scroll")})),t.forEach((function(e){e.addEventListener("click",(function(){o.classList.remove("header__nav_active"),document.body.classList.remove("stop-scroll")})),r.addEventListener("click",(function(){o.classList.add("header__nav_disactive"),document.body.classList.remove("stop-scroll")}))})),ymaps.ready((function(){var e=new ymaps.Map("map",{center:[55.765882066722156,37.60959188903804],zoom:14,controls:["geolocationControl","zoomControl"],breakpoints:{500:{center:[55.76977615776208,37.62792003430169]}}});e.behaviors.disable("scrollZoom");var o=new ymaps.Placemark([55.76977615776208,37.62792003430169],{},{iconLayout:"default#image",iconImageHref:"images/mappoint.svg",iconImageSize:[12,12],iconImageOffset:[-15,-44]});e.geoObjects.add(o),e.controls.remove("zoomControl"),e.controls.remove("geolocationControl")})),document.querySelectorAll(".js-scroll-link").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),function(e,o){if(!(o&&window.getWindowWidth()>window.MOBILE_WIDTH)){var t=e.getAttribute("href").substring(1);if(Boolean(t)){var r=document.getElementById(t).getBoundingClientRect().top;window.scrollBy({top:r,behavior:"smooth"})}}}(this,!1)}))}));var a=document.querySelector(".header__search"),c=document.querySelector(".header__formsearch"),n=c.querySelector(".header__formbtn");a.addEventListener("click",(function(){c.classList.remove("header__formsearch_disactive"),c.classList.add("header__formsearch_active")})),n.addEventListener("click",(function(e){e.preventDefault(),c.classList.remove("header__formsearch_active"),c.classList.add("header__formsearch_disactive")}));