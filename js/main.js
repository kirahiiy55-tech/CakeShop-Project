$(document).ready(function () {
  $('.reviews-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    center: true,
    slideBy: 1,

    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1200: {
        items: 3
      }
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.25 });

document.querySelectorAll('#grid-numbers > div').forEach(el => {
  observer.observe(el);
});

