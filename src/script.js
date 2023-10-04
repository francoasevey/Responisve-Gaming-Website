$(document).ready(function() {

    $("#navbar-show-btn").click(() => $('.navbar-collapse').removeClass('translate-x-full'));
    $("#navbar-hide-btn").click(() => $('.navbar-collapse').addClass('translate-x-full'));

    let resizeTimer;
    $(window).on('resize', () => {
        $(document.body).addClass('resize-animation-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            $(document.body).removeClass('resize-animation-stopper');
        }, 400);
    })
})