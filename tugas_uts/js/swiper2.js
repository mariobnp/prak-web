const swiper2 = new Swiper('.js-testimonial-slider', {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  speed: 3000,
  allowTouchMove: false, // NONAKTIFKAN swipe manual
  simulateTouch: false,  // NONAKTIFKAN klik dianggap sentuh
  touchStartPreventDefault: false, // cegah berhenti autoplay saat klik
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: true,
  freeModeMomentum: false,
  pagination: {
    el: '.js-testimonial-pagination',
    clickable: false // kalau kamu tidak ingin pagination bisa diklik juga
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  },
  on: {
    init: () => {
      document.querySelector('.swiper-wrapper').style.transitionTimingFunction = 'linear';
    }
  }
});
