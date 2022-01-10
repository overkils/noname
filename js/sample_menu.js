var checking = __('.show');

document.querySelector('.sample__nav').addEventListener('click', e => {
    if (!e.target.classList.contains('sample__nav-item')) return;

    e.target.classList.toggle('show')
    var shadow = __('.shadow')
    for (let i = 0; i < shadow.length; i++) {
        shadow[i].classList.add('activ');
    }

    checking = __('.show');
    activitis = __('.activ')
    if (checking.length === 0) {
        for (let i = 0; i < activitis.length; i++) {
            activitis[i].classList.toggle('activ');
        }
    }
})

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