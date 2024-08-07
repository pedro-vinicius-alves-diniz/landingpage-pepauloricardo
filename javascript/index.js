var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    autoplay: true,
    delay:1000,
    breakpoints: {
        1041: {
            slidesPerView:3,
            spaceBetween: 30
        },
        769: {
            slidesPerView:2,
            spaceBetween: 30
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
});
