var data_pages;
var menu_btn = _('.header__menu-btn'); // поиск кнопки меню в header
var bot_btn = _('.bot__menu-btn'); // поиск кнопки закрытия в нижнем меню
var menu_btn_close = _('.bot__menu-btns'); // поиск кнопки закрытия в под меню
var header_menu = _('.header__menu');

document.querySelector('.header__bot').addEventListener('click', e => {
    //проверка наличия bot__link в bot__item
    if (!e.target.classList.contains('bot__btn')) return;

    function myFunction(x) {
        if (x.matches) { // If media query matches
            header_menu.style.display = 'none'; // отключаем меню до его открытия
            data_pages = e.target.getAttribute('data-page'); // заносим в глобал переменную номер страницы
            toggleBlock(); // выдаем меню block для того чтобы показать его
            menuActive(); //выдача класса активности(открытого) меню
            setTimeout(menuActiveS, 100) // отображение меню на адаптив версии 
            replacePage(); // замена номера страницы в функции 
            _('.bot__nav-title').textContent = e.target.textContent; // переносим название кнопки в тайтл меню
            e.target.toggleAttribute('activitis'); // нажатой кнопке выдаем атрибут активности
            e.target.classList.toggle('bot__btn-active'); // а тае же класс активности для стилей 
        } else {
            data_pages = e.target.getAttribute('data-page'); // заносим в глобал переменную номер страницы
            replacePage(); // замена номера страницы в функции 
            e.target.toggleAttribute('activitis'); // нажатой кнопке выдаем атрибут активности
            e.target.classList.toggle('bot__btn-active'); // а тае же класс активности для стилей 
        }
    }
    var x = window.matchMedia("(max-width: 992px)")
    myFunction(x) // Call listener function at run time
    x.addEventListener('change', myFunction) // Attach listener 
    //отключение предыдущей активной кнопки
    var activitis = document.querySelectorAll('.bot__btn-active');// ищем классы активности
    for (let i = 0; i < activitis.length; i++) { // перебираем активность и 
        if (data_pages !== activitis[i].getAttribute('data-page')) { // проверяем номер страницы в меню и сравниваем с классами активных кнопок и
            activitis[i].classList.toggle('bot__btn-active') // отключаем лишний класс активности
            activitis[i].toggleAttribute('activitis'); // и атрибут активности
        }
    }
    //отключение меню при отсутствии активной кнопки 
    var closet_menu = document.querySelector('[activitis]'); // ищем атрибут активности на кнопках
    if (closet_menu === null) { // если его нету то
        deletePageAttr(); // убираем атрибут номера страницы и 
        setTimeout(removeActives, 800);
        function myFunction(x) {
            if (x.matches) { // а тут указываем то что должно работать после достижения какого либо брейкпоинта
                setTimeout(nonedisplayMenu, 400); // отключаем меню для того чтоб не захломлять не поточную позиционированность
            }
        }
        var x = window.matchMedia("(max-width: 700px)") // изменяем значение на то которое нужно для того чтоб скрипты работали
        myFunction(x) // Call listener function at run time
        x.addEventListener('change', myFunction) // Attach listener
    };
});

menu_btn.onclick = function () { // при нажатии на кнопку вызываем функцию в header__top
    visibleBtn(); // функция
    _('body').classList.toggle('scroll-lock');
};

bot_btn.onclick = function () { // выполняем функцию по нажатию кнопки в header__bot
    visibleBtn(); // фунцкия
    _('body').classList.toggle('scroll-lock');
};

_('.bot__nav-close').onclick = function () { // при клике стрелки скрытия меню вызываем функцию
    closeMenuArrow();
};

menu_btn_close.onclick = function () { // при клике крестика в меню вызываем функции по скрытию всех меню и под меню
    _('.header__bot').classList.toggle('active'); //выдаем класс активности для открытия меню с выбором категории
    menu_btn.classList.toggle('active');
    closeMenuArrow();
    _('body').classList.toggle('scroll-lock');
};

function replacePage() {
    header_menu.setAttribute('data-page', data_pages); // выдаем меню номер страницы и с им стили
};

function visibleBtn() {
    _('.header__bot').classList.toggle('active'); //выдаем класс активности для открытия меню с выбором категории
    setTimeout(() => {
        _('.header__bot').classList.toggle('actives');
    }, 100);
    menu_btn.classList.toggle('active'); // выдача класса активности меню что бы открыть меню и изменить стили
    removeActives();
};

function closeMenuArrow() {
    var closet_menu = document.querySelector('[activitis]'); // ищем атрибут активности на кнопках
    closet_menu.removeAttribute('activitis'); // удаляем атрибут активности с кнопок
    closet_menu.classList.toggle('bot__btn-active'); // убираем класс активности с кнопок
    deletePageAttr();
    menuActiveS();
    setTimeout(menuActive, 500);
    setTimeout(() => {
        removeActives();
    }, 800);
    setTimeout(nonedisplayMenu, 900);
};

function nonedisplayMenu() {
    header_menu.style.display = "none";
};

function displayMenu() {
    header_menu.style.cssText = 'display: block;';
}

function deletePageAttr() {
    header_menu.removeAttribute('data-page'); // убираем атрибут номера страницы для деактивации стилей открытого меню
}

function menuActive() {
    header_menu.classList.toggle('active');
}

function menuActiveS() {
    header_menu.classList.toggle('actives');
}

function removeActives() {
    header_menu.classList.remove('actives');
    header_menu.classList.remove('active');
}

function toggleBlock() {
    displayMenu();
}