import {Swiper, Pagination, Mousewheel, Thumbs, EffectFade, Lazy} from "swiper";

Swiper.use([Pagination, Mousewheel, Thumbs, EffectFade, Lazy]);

let congress = new Swiper(".europen-congress__slider", {
    slidesPerView: 1,
    effect: 'fade',
    lazy: true,
    fadeEffect: {
        crossFade: true
    },
    watchOverflow: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    grabCursor: true,
});