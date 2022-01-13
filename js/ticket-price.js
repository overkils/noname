var page__number = __('.perview__slide').length;

document.documentElement.style.setProperty('--rows', Math.round(page__number / 3));

var preview__picture = new Swiper('.price__picture-preview', {
    slidesPerView: page__number,
    spaceBetween: 24,
    freeMode: true,
    watchSlidesProgress: true,
});

var picture__big = new Swiper('.price__picture-big', {
    slidesPerView: 1,
    spaceBetween: 78,
    navigation: {
        nextEl: '.price__next',
        prevEl: '.price__prev',
    },
    thumbs: {
        swiper: preview__picture,
    },
});