// contact-poping

const url = window.location.href;

if (url.includes('#contact-form')) {
    $('.body').addClass('no-scroll');
    $('.form-pop-up').removeClass('no-display');
}

// timestamp setup
function timestamper() {
const date = new Date();
const year = new Intl.DateTimeFormat('en',{year:'2-digit'}).format(date);
const month = new Intl.DateTimeFormat('en',{month:'short'}).format(date);
const weekday = new Intl.DateTimeFormat('en',{weekday:'short'}).format(date);
const day = new Intl.DateTimeFormat('en',{day:'2-digit'}).format(date);
const time = new Intl.DateTimeFormat('en',{hour:'2-digit', minute:'2-digit', hour12:false}).format(date);
var timestamp = `${time} ${weekday} ${month} ${day} ${year}`;
$("input[timestamper]").val(timestamp);
}

