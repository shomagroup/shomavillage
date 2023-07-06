// contact-poping

let url = window.location.href;

if (url.includes('#contact-form')) {
    $('.body').addClass('no-scroll');
    $('.form-pop-up').removeClass('no-display');
}

