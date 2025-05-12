const swiper2 = new Swiper('.js-testimonial-slider-1', {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  speed: 3000,
  allowTouchMove: false, 
  simulateTouch: false,  
  touchStartPreventDefault: false, 
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: true,
  freeModeMomentum: false,
  pagination: {
    el: '.js-testimonial-pagination',
    clickable: false
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

const swiper3 = new Swiper('.js-testimonial-slider-2', {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  speed: 3000,
  allowTouchMove: false, 
  simulateTouch: false,  
  touchStartPreventDefault: false, 
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  freeMode: true,
  freeModeMomentum: false,
  pagination: {
    el: '.js-testimonial-pagination',
    clickable: false 
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  },
  on: {
    init: (swiper) => {
      swiper.wrapperEl.style.transitionTimingFunction = 'linear';
    }
  }
});