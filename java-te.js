document.querySelectorAll('.container div').forEach(item => {
    item.addEventListener('click', function() {
      this.classList.toggle('rotated'); 
    });
  });
  



  document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');

    carousel.style.width = `${images.length * 100}%`;
});










