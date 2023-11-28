var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints:{
    500:{
      slidesPerView:1,
      spaceBetween:0
    },
    900:{
      slidesPerView:2,
      spaceBetween:30
    },
    1300:{
      slidesPerView:3,
      spaceBetween:30
    }

  }
});
