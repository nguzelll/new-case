const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },

});

const swipe = new Swiper('.swiper-video-cours', {
  // Optional parameters
  effect: 'fade',
    fadeEffect: {
    crossFade: true
  },
  direction: 'vertical',
  slidesPerView: 3,

  loop: true,

   // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});