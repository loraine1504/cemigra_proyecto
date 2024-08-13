 // Script para manejar la apertura y cierre del menú lateral
 document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('side-menu').classList.toggle('active');
});

document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('side-menu').classList.remove('active');
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function showSlide(index) {
        const offset = -index * 100; // Calcula el desplazamiento
        slider.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // Auto-slide cada 3 segundos
    setInterval(nextSlide, 3000);

    // Inicializar la primera slide
    showSlide(currentIndex);
});


AOS.init();


document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section-animate');
  
    const observerOptions = {
      root: null, // Observa en relación con el viewport
      rootMargin: '0px',
      threshold: 0.1 // 10% del elemento debe estar en vista
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Deja de observar después de la animación
        }
      });
    }, observerOptions);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  