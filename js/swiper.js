let swiper = new Swiper(".gallery-swiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
        el: ".gallery-pagination",
        type: "fraction"
    },
    navigation: {
        nextEl: ".gallery__btn-next",
        prevEl: ".gallery__btn-prev"
    },
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
    },
});