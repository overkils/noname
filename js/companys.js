const selectSecon = _('.type__select-contSec');
const selectSecond_title = selectSecon.querySelector('.select__title');
const selectSecond_labels = selectSecon.querySelectorAll('.option__label');
const selectFirst = _('.type__select-cont');
const selectFirst_title = selectFirst.querySelector('.select__title');
const selectFirst_labels = selectFirst.querySelectorAll('.option__label');

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


function splitings(param) {
    var split = _('.sample__title-select');
    console.log(split);
    var arraySpliting = split.textContent.split('/');
    arraySpliting[0] = param;
    for (let i = 0; i < arraySpliting.length; i++) {
        split.textContent = arraySpliting[0] + '/' + arraySpliting[1]
    }
}

function spliting(param) {
    var split = _('.sample__title-select');
    console.log(split);
    var arraySpliting = split.textContent.split('/');
    arraySpliting[1] = param;
    for (let i = 0; i < arraySpliting.length; i++) {
        split.textContent = arraySpliting[0] + '/' + arraySpliting[1]
    }
}
