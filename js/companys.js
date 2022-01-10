const selectSecon = _('.type__select-contSec');
const selectSecond_title = selectSecon.querySelector('.select__title');
const selectSecond_labels = selectSecon.querySelectorAll('.option__label');
const selectFirst = _('.type__select-cont');
const selectFirst_title = selectFirst.querySelector('.select__title');
const selectFirst_labels = selectFirst.querySelectorAll('.option__label');

const d_selectFirst = _('.d_type__select-cont');
const d_selectFirst_title = d_selectFirst.querySelector('.select__title');
const d_selectFirst_labels = d_selectFirst.querySelectorAll('.option__label');
const d_selectSecon = _('.d_type__select-contSec');
const d_selectSecond_title = d_selectSecon.querySelector('.select__title');
const d_selectSecond_labels = d_selectSecon.querySelectorAll('.option__label');

// Toggle menu
selectSecond_title.addEventListener('click', () => {
    if ('active' === selectSecon.getAttribute('data-state')) {
        selectSecon.setAttribute('data-state', '');
    } else {
        selectSecon.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < selectSecond_labels.length; i++) {
    selectSecond_labels[i].addEventListener('click', (evt) => {
        selectSecond_title.textContent = evt.target.textContent;
        selectSecon.setAttribute('data-state', '');
        spliting(evt.target.textContent);
    });
};

// Toggle menu
selectFirst_title.addEventListener('click', () => {
    if ('active' === selectFirst.getAttribute('data-state')) {
        selectFirst.setAttribute('data-state', '');
    } else {
        selectFirst.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < selectFirst_labels.length; i++) {
    selectFirst_labels[i].addEventListener('click', (evt) => {
        selectFirst_title.textContent = evt.target.textContent;
        selectFirst.setAttribute('data-state', '');
        splitings(evt.target.textContent);
    });
};

// responsive selects

d_selectFirst_title.addEventListener('click', () => {
    if ('active' === d_selectFirst.getAttribute('data-state')) {
        d_selectFirst.setAttribute('data-state', '');
    } else {
        d_selectFirst.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < d_selectFirst_labels.length; i++) {
    d_selectFirst_labels[i].addEventListener('click', (evt) => {
        d_selectFirst_title.textContent = evt.target.textContent;
        d_selectFirst.setAttribute('data-state', '');
        splitings(evt.target.textContent);
    });
};

d_selectSecond_title.addEventListener('click', () => {
    if ('active' === d_selectSecon.getAttribute('data-state')) {
        d_selectSecon.setAttribute('data-state', '');
    } else {
        d_selectSecon.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < d_selectSecond_labels.length; i++) {
    d_selectSecond_labels[i].addEventListener('click', (evt) => {
        d_selectSecond_title.textContent = evt.target.textContent;
        d_selectSecon.setAttribute('data-state', '');
        spliting(evt.target.textContent);
    });
};


function splitings(param) {
    var split = _('.sample__title-select');
    var arraySpliting = split.textContent.split('/');
    arraySpliting[0] = param;
    for (let i = 0; i < arraySpliting.length; i++) {
        split.textContent = arraySpliting[0] + '/' + arraySpliting[1]
    }
}

function spliting(param) {
    var split = _('.sample__title-select');
    var arraySpliting = split.textContent.split('/');
    arraySpliting[1] = param;
    for (let i = 0; i < arraySpliting.length; i++) {
        split.textContent = arraySpliting[0] + '/' + arraySpliting[1]
    }
}

var poap_bg = _('.sample__poap-nav');
var poap = _('.poap__nav');
var btnOpen = _('.poap__openbtn');
var btnClose = _('.poap__close-btn');

btnOpen.onclick = function () {
    btnOpen.classList.toggle('active');
    activePoap();
};

function activePoap() {
    _('body').classList.toggle('scroll-lock');
    poap_bg.style.display = 'block';
    setTimeout(() => {
        poap_bg.classList.toggle('active');
    }, 100);
};

btnClose.onclick = function () {
    setTimeout(() => {
        poap_bg.style.display = 'none';
    }, 500);
    poap_bg.classList.toggle('active');
    btnOpen.classList.toggle('active');
    _('body').classList.toggle('scroll-lock');
}