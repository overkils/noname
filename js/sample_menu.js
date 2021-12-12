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