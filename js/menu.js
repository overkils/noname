var data_pages;
var menu_btn = _('.header__menu-btn'); // поиск кнопки меню в header
var bot_btn = _('.bot__menu-btn'); // поиск кнопки закрытия в нижнем меню
var menu_btn_close = _('.bot__menu-btns'); // поиск кнопки закрытия в под меню


document.querySelector('.header__bot').addEventListener('click', e => {
    //проверка наличия bot__link в bot__item
    if (!e.target.classList.contains('bot__btn')) return;
    // переключение/отключение активной кнопки
    data_pages = e.target.getAttribute('data-page');
    _('.header__menu').setAttribute('data-page', data_pages);
    _('.header__menu').style.display = 'block';
    _('.bot__nav-title').textContent = e.target.textContent;
    _('.bot__nav-title').classList.toggle('active');
    e.target.toggleAttribute('activitis');
    e.target.classList.toggle('bot__btn-active');
    //отключение предыдущей активной кнопки
    var activitis = document.querySelectorAll('.bot__btn-active');
    for (let i = 0; i < activitis.length; i++) {
        if (data_pages !== activitis[i].getAttribute('data-page')) {
            activitis[i].classList.toggle('bot__btn-active')
            activitis[i].toggleAttribute('activitis');
        }
    }
    //отключение меню при отсутствии активной кнопки 
    var closet_menu = document.querySelector('[activitis]');
    if (closet_menu === null) {
        _('.header__menu').removeAttribute('data-page');
        setTimeout(displayMenu, 300);
    };
});

menu_btn.onclick = function () {
    visibleBtn()
}

bot_btn.onclick = function () {
    visibleBtn()
}

_('.bot__nav-close').onclick = function () {
    closeMenuArrow()
};

menu_btn_close.onclick = function () {
    visibleBtn()
    closeMenuArrow();
}

function visibleBtn() {
    _('.header__bot').classList.toggle('active');
    menu_btn.classList.toggle('active'); // выдача класса активности меню что бы открыть меню и изменить стили
    bot_btn.classList.toggle('active'); // выдача класса активности для стилей и обмана глаза
}

function closeMenuArrow() {
    var closet_menu = document.querySelector('[activitis]');
    closet_menu.toggleAttribute('activitis');
    closet_menu.classList.toggle('bot__btn-active');
    _('.header__menu').toggleAttribute('data-page');
    _('.bot__nav-title').classList.toggle('active');

}

function displayMenu() {
    _('.header__menu').style.display = "none";
}