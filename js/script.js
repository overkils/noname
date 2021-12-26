const swiper = new Swiper('.header-slider', {
    loop: true,
    speed: 850,
    slidesPerView: 1,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    breakpoints: {
        992: {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },

        320: {
            navigation: false,
        },
    }
});

const catalog_swiper = new Swiper('.catalog__sliders', {
    slidesPerView: 4,
    // spaceBetween: 3,
    navigation: {
        nextEl: '.catalog__next',
        prevEl: '.catalog__prev',
    },
    scrollbar: {
        el: ".swiper__scrollbar",
        hide: true,
    },
    breakpoints: {
        992: {
            slidesPerView: 4,
        },

        768: {
            slidesPerView: 3,
        },

        320: {
            slidesPerView: 2,
        },
    }
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

var poap__fin = _('.poap');

function opcl__poap() {
    if (poap__fin.classList.contains('show') === false) {
        _('.poap__forms').removeAttribute('style');
        _('.poap__success').removeAttribute('style');
    };
    poap__fin.classList.toggle('show');
    _('body').classList.toggle('scroll-lock')
};

function success_send() {
    _('.poap__forms').style.cssText = 'opacity: 0; z-index: -1';
    setTimeout(500, _('.poap__forms').style.display = "none");
    _('.poap__success').style.cssText = 'opacity: 1; z-index: 9999';
    setTimeout(500, _('.poap__success').style.display = "flex");
};

