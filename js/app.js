document.addEventListener('DOMContentLoaded', function(){let navbar = document.getElementById('nav__bg').classList,active_class ="navbar_scrolled";window.addEventListener('scroll', _e => {if(pageYOffset > 500) navbar.add(active_class); else navbar.remove(active_class);});$(function(){$('.slider__type').slick({slidesToShow: 6, slidesToScroll: 3, autoplay: true, autoplaySpeed: 2000, arrows: true, responsive: [{breakpoint: 1250, settings: {slidesToScroll: 2, slidesToShow: 4,}}, {breakpoint: 910, settings: {slidesToScroll: 3, slidesToShow: 3,}}, {breakpoint: 780, settings: {slidesToScroll: 2, slidesToShow: 2,}}, {breakpoint: 431, settings: {slidesToScroll: 1, slidesToShow: 1,}}],});});let dropdownHome = function (){let delivery__header = document.querySelectorAll('.delivery__header');delivery__header.forEach(item => {item.addEventListener('click', active__dropdown);});function active__dropdown() {this.parentElement.classList.toggle('active__dropdown');};};dropdownHome();let header__burger = document.querySelector('.header__burger'), header__nav = document.querySelector('.header__nav');header__burger.addEventListener('click', () =>{header__nav.classList.toggle('active__burger');header__burger.classList.toggle('active__burger');});let dropdownQuest = function (){   let questHeader = document.querySelectorAll('.quest__header');   questHeader.forEach(item =>{   item.addEventListener('click', active__dropdown);});   function active__dropdown(){   this.parentElement.classList.toggle('active__dropdown'); };};dropdownQuest();let loginPopup = document.querySelector('.popup__login'), loginPopupLink = document.querySelector('.nav__link--login'), loginPopupClose = document.querySelectorAll('.login__popup-close'), loginPopupBg = document.querySelectorAll('.login__popup-bg'), registerPopup = document.querySelector('.register__popup'), registerPopupLink = document.querySelector('.register__popup-link'), registerLoginLink = document.querySelector('.register__login-link'), resetPopup = document.querySelector('.reset__popup'), resetPopupLink = document.querySelector('.reset__popup-link'), resetLoginLink = document.querySelector('.reset__login-link'), codePopup = document.querySelector('.code__popup'), codePopupLink  = document.querySelector('.code__popup-link');document.addEventListener('click', (e) => {
    if (e.target === loginPopupLink){
      loginPopup.classList.add('popup__active');
      registerPopup.classList.remove('popup__active');
      resetPopup.classList.remove('popup__active');
    } else if(e.target === codePopupLink){
      e.preventDefault();
      codePopup.classList.add('popup__active');
      resetPopup.classList.remove('popup__active');
    }
  });document.addEventListener('click', (e) => {
    if (e.target === registerPopupLink){
      registerPopup.classList.add('popup__active');
      loginPopup.classList.remove('popup__active');
    } else if (e.target === resetPopupLink){
      resetPopup.classList.add('popup__active');
      loginPopup.classList.remove('popup__active');
    }
  });document.addEventListener('click', (e) => {
    if (e.target === resetLoginLink){
      loginPopup.classList.add('popup__active');
      resetPopup.classList.remove('popup__active');
    } else if (e.target === registerLoginLink){
      loginPopup.classList.add('popup__active');
      registerPopup.classList.remove('popup__active');
    }
  });function popup__active (){
    this.parentElement.classList.remove('popup__active');
  }loginPopupClose.forEach(item => {
    item.addEventListener('click', popup__active);
  });loginPopupBg.forEach(item => {
    item.addEventListener('click', popup__active);
  });let position = 0;const sliderToShow = 1, sliderToScroll = 1, sliderContainer = $('.swiper'), sliderTrack = $('.swiper-wrapper'), sliderItem = $('.swiper-slide'), sliderItemCount = sliderItem.length, sliderBtnPrev = $('.swiper__left-btn'), sliderBtnNext = $('.swiper__right-btn'), sliderItemWidth = sliderContainer.width() / sliderToShow, sliderMovePosition = sliderToScroll * sliderItemWidth;sliderItem.each(function (index, sliderItem){$(sliderItem).css({minWidth: sliderItemWidth,});});sliderBtnPrev.click(function (){position += sliderMovePosition;sliderSetPosition();sliderCheckBtn();});sliderBtnNext.click(function (){position -= sliderMovePosition;sliderSetPosition();sliderCheckBtn();});const sliderSetPosition = function sliderSetPosition(){sliderTrack.css({   transform: `translateX(${position}px)`   });};const sliderCheckBtn = () => {sliderBtnPrev.prop('disabled', position === 0);sliderBtnNext.prop(       'disabled',     position <= -(sliderItemCount - sliderToShow) * sliderItemWidth );};sliderCheckBtn();});