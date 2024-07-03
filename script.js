var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});


    let navbar = document.querySelector('.navbara');
    let menu  = document.querySelector('#menu');
    let CLose =document.querySelector('#Close');

    menu.addEventListener('click', ()=>{
      navbar.style.transform = 'translateY(0%)';
    })

    Close.addEventListener('click', ()=>{
      navbar.style.transform = 'translateY(-100%)';
    })
