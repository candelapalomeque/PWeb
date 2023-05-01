const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Configurar el ancho y la posición inicial de las imágenes
let imageWidth = carouselImages[0].clientWidth;
let currentIndex = 0;
carouselSlide.style.transform = `translateX(${-imageWidth * currentIndex}px)`;

// Función para cambiar de imagen automáticamente
function slide() {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  carouselSlide.style.transition = 'transform 500ms ease-in-out';
  carouselSlide.style.transform = `translateX(${-imageWidth * currentIndex}px)`;
}

// Ejecutar la función slide() cada 3 segundos
setInterval(slide, 3000);
