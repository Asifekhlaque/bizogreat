var typed = new Typed(".input", {
    strings: ["Marketing", "Designing", "Advertising", "Web Developer", "Guiding", "Video Editing", "Content Creation", "Market Research", " Management", "Your Growth"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})


var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

function myFunction(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}
