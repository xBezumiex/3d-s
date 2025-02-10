// document.addEventListener("DOMContentLoaded", () => {
//     const slides = document.querySelectorAll(".printer-image img");
//     const dots = document.querySelectorAll(".dot");
//     let currentSlide = 0;

//     function showSlide(index) {
//         // Скрываем все слайды и убираем активность точек
//         slides.forEach((slide, i) => {
//             slide.style.display = i === index ? "block" : "none";
//         });
//         dots.forEach((dot, i) => {
//             dot.classList.toggle("active", i === index);
//         });
//     }

//     function nextSlide() {
//         currentSlide = (currentSlide + 1) % slides.length;
//         showSlide(currentSlide);
//     }

//     function setSlide(index) {
//         currentSlide = index;
//         showSlide(currentSlide);
//     }

//     // Автоматическая смена слайда каждые 5 секунд
//     setInterval(nextSlide, 5000);

//     // Обработчики для точек
//     dots.forEach((dot, index) => {
//         dot.addEventListener("click", () => setSlide(index));
//     });

//     // Инициализация первого слайда
//     showSlide(currentSlide);
// });



// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.classList.toggle("active", i === index);
//     });
//     dots.forEach((dot, i) => {
//         dot.classList.toggle("active", i === index);
//     });
// }



let currentSlide = 0;
const slides = document.querySelectorAll('.printer-image img');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Автоматическая смена слайдов каждые 10 секунд
setInterval(() => {
    showSlide((currentSlide + 1) % slides.length);
}, 10000);
