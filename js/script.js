function _(elem) {
    return document.querySelector(`${elem}`)
}

function __(elem) {
    return document.querySelectorAll(`${elem}`)
}

const swiper = new Swiper('.header-slider', {
    loop: true,
    speed: 850,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});

const catalog_swiper = new Swiper('.catalog__sliders', {
    slidesPerView: 4,
    spaceBetween: 6,
    navigation: {
        nextEl: '.catalog__next',
        prevEl: '.catalog__prev',
    },
    scrollbar: {
        el: ".swiper__scrollbar",
        hide: true,
    },
});

const partn_swiper = new Swiper('.partn__sliders', {
    slidesPerView: 4,
    spaceBetween: 6,
    navigation: {
        nextEl: '.partn__next',
        prevEl: '.partn__prev',
    },
    scrollbar: {
        el: ".swiper_scrollbar",
        hide: true,
    },
});

var data_pages;

document.querySelector('.bot__item').addEventListener('click', e => {

    //проверка наличия bot__link в bot__item
    if (!e.target.classList.contains('bot__link')) return;

    // переключение/отключение активной кнопки
    data_pages = e.target.getAttribute('data-page');
    _('.bot__menu').setAttribute('data-page', data_pages);
    e.target.toggleAttribute('activitis');
    e.target.classList.toggle('bot__link-active');

    //отключение предыдущей активной кнопки
    var activitis = document.querySelectorAll('.bot__link-active');
    for (let i = 0; i < activitis.length; i++) {
        if (data_pages !== activitis[i].getAttribute('data-page')) {
            activitis[i].classList.toggle('bot__link-active')
            activitis[i].toggleAttribute('activitis');
        }
    }

    //отключение меню при отсутствии активной кнопки 
    var closet_menu = document.querySelector('[activitis]');
    if (closet_menu === null) {
        _('.bot__menu').removeAttribute('data-page');
    };
});
