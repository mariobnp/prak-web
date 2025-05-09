const faq = document.querySelectorAll(".faqs")

faq.forEach(faqs => {
    faqs.addEventListener('click', () => {
        faqs.classList.toggle("active");
    });
});

// testimoni section
const track = document.querySelector('.testimonial-track');
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % testimonials.length;
  updateCarousel();
});


