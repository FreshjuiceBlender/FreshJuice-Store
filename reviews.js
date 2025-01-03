document.addEventListener('DOMContentLoaded', function() {
  const reviews = document.querySelectorAll('.review');
  let currentReviewIndex = 0;

  function showReview(index) {
      reviews.forEach((review, i) => {
          if (i === index) {
              review.style.display = 'flex';
          } else {
              review.style.display = 'none';
          }
      });
      updateNavigationButtons();
  }

  function updateNavigationButtons() {
      const prevBtn = document.querySelector('.prev-btn');
      const nextBtn = document.querySelector('.next-btn');

      if (currentReviewIndex === 0) {
          prevBtn.classList.add('disabled');
      } else {
          prevBtn.classList.remove('disabled');
      }

      if (currentReviewIndex === reviews.length - 1) {
          nextBtn.classList.add('disabled');
      } else {
          nextBtn.classList.remove('disabled');
      }
  }

  document.querySelector('.prev-btn').addEventListener('click', function() {
      if (currentReviewIndex > 0) {
          currentReviewIndex--;
          showReview(currentReviewIndex);
      }
  });

  document.querySelector('.next-btn').addEventListener('click', function() {
      if (currentReviewIndex < reviews.length - 1) {
          currentReviewIndex++;
          showReview(currentReviewIndex);
      }
  });

  showReview(currentReviewIndex);
});
