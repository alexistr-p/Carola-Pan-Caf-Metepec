document.addEventListener('DOMContentLoaded', () => {

  // Carousel scroll manual para productos favoritos
  const favoritosCarousel = document.querySelector('.favoritos-carousel');
  const nextBtn = document.querySelector('.carousel-arrow.right');

  if (nextBtn && favoritosCarousel) {
    nextBtn.addEventListener('click', () => {
      favoritosCarousel.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    });
  }

  // Carousel de Reseñas
  const reviewsCarousel = document.querySelector('.reviews-carousel');
  const prevReviewBtn = document.getElementById('prevReview');
  const nextReviewBtn = document.getElementById('nextReview');

  if (reviewsCarousel && prevReviewBtn && nextReviewBtn) {
    nextReviewBtn.addEventListener('click', () => {
      reviewsCarousel.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    });

    prevReviewBtn.addEventListener('click', () => {
      reviewsCarousel.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    });
  }

  // Navegación suave (Smooth scroll)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });

});