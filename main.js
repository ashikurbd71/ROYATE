  /*menu showning*/

let menu = document.querySelector('#menu');

let navber = document.querySelector('.navber');

menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    navber.classList.toggle('active');
}


  /*Initialize Swiper*/

    var swiper = new Swiper(".home-slider", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
   loop:true,
    });
