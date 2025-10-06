// Navbar toggle for mobile
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Mobile Menu Toggle
document.getElementById('menu-btn').addEventListener('click', function() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Slideshow Logic
let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide() {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? "1" : "0";
  });
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 4000); // Change image every 4 seconds

// gallery

 const gallery = document.getElementById('gallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('close-btn');

  // When image is clicked → open popup
  gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      lightboxImg.src = e.target.src;
      lightbox.classList.remove('hidden');
    }
  });

  // Close popup when clicking X or outside image
  closeBtn.addEventListener('click', () => lightbox.classList.add('hidden'));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.add('hidden');
  });
