$(function () {
    var $range = $(".form__slider"),
        $inputFrom = $(".form__field--from"),
        $inputTo = $(".form__field--to"),
        instance,
        min = 0,
        max = 80000,
        from = 0,
        to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 12000,
        to: 80000,
        hide_min_max: true,
        hide_from_to: true,
        onStart: updateInputs,
        onChange: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
        from = data.from;
        to = data.to;
        $inputFrom.prop("value", + from);
        $inputTo.prop("value", + to);
        _('.sample_title-from').textContent = from;
        _('.sample_title-to').textContent = to;
    }

    $inputFrom.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });
    });

    $inputTo.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });
    });
});

var width,
    length,
    height;

$(function () {
    var $range = $(".form__slider-width"),
        $inputFrom = document.querySelector('.form__width--from'),
        $inputTo = document.querySelector('.form__width--to'),
        instance,
        min = 0,
        max = 100,
        from = 0,
        to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 0,
        to: 100,
        hide_min_max: true,
        hide_from_to: true,
        onStart: updateInputs,
        onChange: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
        from = data.from;
        to = data.to;
        $inputFrom.value = from;
        $inputTo.value = to;
        width = to;
        _('.sample_title-width').textContent = to;
    }

    $inputFrom.addEventListener('input', function () {
        var val = this.value;

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });
    });

    $inputTo.addEventListener('input', function () {
        var val = this.value;

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });
    });
});

$(function () {
    var $range = $(".form__slider-length"),
        $inputFrom = document.querySelector(".form__length--from"),
        $inputTo = document.querySelector(".form__length--to"),
        instance,
        min = 0,
        max = 100,
        from = 0,
        to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 0,
        to: 100,
        hide_min_max: true,
        hide_from_to: true,
        onStart: updateInputs,
        onChange: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
        from = data.from;
        to = data.to;
        $inputFrom.value = from;
        $inputTo.value = to;
        length = to;
        _('.sample_title-length').textContent = to;
    }

    $inputFrom.addEventListener('input', function () {
        var val = this.value

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });
    });

    $inputTo.addEventListener('input', function () {
        var val = this.value

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });
    });
});

$(function () {
    var $range = $(".form__slider-height"),
        $inputFrom = document.querySelector(".form__height--from"),
        $inputTo = document.querySelector(".form__height--to"),
        instance,
        min = 0,
        max = 100,
        from = 0,
        to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 0,
        to: 100,
        hide_min_max: true,
        hide_from_to: true,
        onStart: updateInputs,
        onChange: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
        from = data.from;
        to = data.to;
        $inputFrom.value = from;
        $inputTo.value = to;
        height = to;
        _('.sample_title-height').textContent = to;
    }

    $inputFrom.addEventListener('input', function () {
        var val = this.value;

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });
    });

    $inputTo.addEventListener('input', function () {
        var val = this.value;

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });
    });
});

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