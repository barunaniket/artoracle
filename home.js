// Array of background images for the slideshow
const images = [
    '425180.jpg',
    '2619.jpg',  
    '425149.jpg',  
    '826868.png',
    '425228.jpg',
    '181647.jpg'
  ];
  
  // Reference to the hero section
  const heroSection = document.querySelector('.hero');
  const prevArrow = document.querySelector('.prev-arrow');
  const nextArrow = document.querySelector('.next-arrow');
  
  // Variable to track the current slide
  let currentImageIndex = 0;
  
  // Function to change the background image
  function changeBackground(index) {
    heroSection.style.backgroundImage = `url(${images[index]})`;
  }
  
  // Start the slideshow (change every 5 seconds)
  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    changeBackground(currentImageIndex);
  }, 5000);
  
  // Manual navigation
  prevArrow.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    changeBackground(currentImageIndex);
  });
  
  nextArrow.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    changeBackground(currentImageIndex);
  });
  
  // Initial load
  changeBackground(0);

  
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      header.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    } else {
      header.style.backgroundColor = 'transparent';
      header.style.boxShadow = 'none';
    }
});

