/*====SHOW MENU =====*/
/*const navMenu=document.getElementById('nav-menu'),
navToggle= document.getElementById('nav-toggle'),
navClose= document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/*Validate if const exitst */
/*if(navToggle){
    navToggle.addEventListener(`click`,() => {
        navMenu.classList.add(`show-menu`)
    })
}
/*===== MENU HIDDEN =====*/
/*if(navClose){
    navClose.addEventListener(`click`,() => {
        navMenu.classList.remove(`show-menu`)
    })
}
/*========= Remove Menu =================*/
//const navLink=document.querySelectorAll('.nav__link');

/*function linkAction(){
    const  navMenu =document.querySelectorAll('nav-menu');
    // When  we click on each nav__link ,we remove the show-menu class
    navMenu.classList.remove(`show-menu`);
}
navLink.forEach(n => n.addEventListener('click',linkAction));

/*============= Change background header ============ */
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 50 viewport height,add the scroll-header class to the header tag
  if (this.scrollY >= 50) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".value__accordion-item");
accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".value__accordion-header");
  accordionHeader.addEventListener("click", () => {
    const openItem =  document.querySelector('.accordion-open');

    toggleItem(item);
    if(openItem&& openItem!==item){
        toggleItem(openItem);
    }
  });
});
const toggleItem = (item) => {
  const accordionContent = item.querySelector(".value__accordion-content");
  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll('section[id]');
function scrollActive(){
  const scrollY = window.pageYOffset;
  section.forEach(current=>{
    const sectionHeight= current.offsetHeight,
    sectionTop =current.offsetTop - 58,
    sectionId = current.getAttribute('id');
    if(scrollY >sectionTop && scrollY <=sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('active-link');
    }
    else{
      document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active-link');
    }
  })
}
window.addEventListener('scroll',scrollActive);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp(){
  const scrollUp = document.getElementById('scrollup');
  //when the scroll is higher than 350 viewport height ,add the show scroll class to the tag with the scroll-top
  if(this.scrollY>=350){
    scrollUp.classList.add('show-scroll');
  }
  else{
    scrollUp.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll',scrollUp);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';
//previously selected topics(if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme)? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)? 'bx-moon' : 'bx-sun';

//We validate if the user previously chose a topic
if(selectedTheme){
  //if the validation is fullfilled, we ask what the issue was to know if we activated or deactivated  the dark 
  document.body.classList[selectedTheme === 'dark'? 'add' :'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bx-moon'? 'add' :'remove'](iconTheme);


}

//activate  /deactivate theme  manually  with the button
themeButton.addEventListener('click',()=>{
  //Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  //We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme',getCurrentTheme());
  localStorage.setItem('selected-icon',getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr= ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:'2500',
  delay:400,
  //reset:true
});
sr.reveal(`.home__title, .popular__container, .subscribe__container, .footer__container`);
sr.reveal('.home__description',{delay:500});
sr.reveal('.home__search',{delay:600});
sr.reveal('.home__value',{delay:700});
sr.reveal('.home__images',{delay:800,origin:'bottom'});
sr.reveal('.logos__img',{interval:100})
sr.reveal(`.value__images, .contact__content`,{origin:'left'})
sr.reveal(`.value__content, .contact__images`,{origin:'right'})