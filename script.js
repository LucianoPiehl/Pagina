document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    let currentIndex = 0;

    // Función para cambiar al siguiente slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }

    // Función para cambiar al slide anterior
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    // Función para cambiar al slide seleccionado por el índice
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    // Función para actualizar la visualización del slider
    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(-${currentIndex * 100}%)`;
        });

        updateDots();
    }

    // Crear controles de navegación
    const prevButton = document.createElement("button");
    prevButton.textContent = "Anterior";
    prevButton.addEventListener("click", prevSlide);

    const nextButton = document.createElement("button");
    nextButton.textContent = "Siguiente";
    nextButton.addEventListener("click", nextSlide);

    // Crear puntos indicadores
    const dotsContainer = document.querySelector(".dots-container");
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.addEventListener("click", () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }

    // Actualizar clase activa en los puntos indicadores
    function updateDots() {
        const dots = dotsContainer.querySelectorAll(".dot");
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    // Agregar controles al DOM
    document.querySelector(".contenedor").appendChild(prevButton);
    document.querySelector(".contenedor").appendChild(nextButton);

    // Inicializar el slider
    updateSlider();
});
