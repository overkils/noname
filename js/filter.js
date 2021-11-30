function _(elem) {
    return document.querySelector(`${elem}`)
}

function __(elem) {
    return document.querySelectorAll(`${elem}`)
}

var filter_title = _(".select__title");
var filter_list = _('.select__list');

filter_title.addEventListener('click', e => {
    e.target.classList.toggle('show');
    filter_list.classList.toggle('open')
});
