// contact-poping

let url = window.location.href;

if (url.includes('#contact-form')) {
    $('.body').addClass('no-scroll');
    $('.form-pop-up').removeClass('no-display');
}

$('.body').addClass('no-scroll');
$('.popup-extra-wrapper').addClass('open');
$('[closePopXtra]').on('click', function() {
$(this).closest('.popup-extra-wrapper').removeClass('open');
$('.body').removeClass('no-scroll');
});