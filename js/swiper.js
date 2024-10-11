let swiper = new Swiper(".news-swiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
        el: ".news-pagination",
        type: "fraction"
    },
    navigation: {
        nextEl: ".news__btn-next",
        prevEl: ".news__btn-prev"
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