// contact-poping

let url = window.location.href;

if (url.includes('#contact-form')) {
    $('.body').addClass('no-scroll');
    $('.form-pop-up').removeClass('no-display');
}

//---- GOOGLE
//---- GOOGLE
if ($('input.utm_source').is("[value*='google']")) {
    //- Organic
    if ($('.utm_medium').is("[value*='organic']")) {
    $("[phone*='text']").text('786.226.0953');
    $("[phone*='link']").attr('href', 'tel:+17862260953');
    $('.email-filter').val('SHO10P02_googlemybusiness.email@slopejet.net');
    $('[email]').attr('href', 'mailto:SHO10P02_googlemybusiness.email@slopejet.net?Subject=Shoma Village Inquiry');
    //-------------
    } else if ($('input.utm_medium').is("[value*='paid']")) {
    //- Paid
    $("[phone*='text']").text('786.751.4217');
    $("[phone*='link']").attr('href', 'tel:+17867514217');
    $('.email-filter').val('sho10p02_googleads.email@slopejet.net');
    $('[email]').attr('href', 'mailto:sho10p02_googleads.email@slopejet.net?Subject=Shoma Village Inquiry');
    //-------------
    } else {
    $("[phone*='text']").text('786.751.4217');
    $("[phone*='link']").attr('href', 'tel:+17867514217');
    $('.email-filter').val('sho10p02_googleads.email@slopejet.net');
    $('[email]').attr('href', 'mailto:sho10p02_googleads.email@slopejet.net?Subject=Shoma Village Inquiry');
    //-------------
    }} else if ($('input.utm_source').is("[value*='facebook']")) {
    //---- FACEBOOK
    $("[phone*='text']").text('786.705.3599');
    $("[phone*='link']").attr('href', 'tel:+17867053599');
    $('.email-filter').val('SHO10P02_facebookads.email@slopejet.net');
    $('[email]').attr('href', 'mailto:SHO10P02_facebookads.email@slopejet.net?Subject=Shoma Village Inquiry');
    //-------------
    } else if ($('input.utm_source').is("[value*='ApartmentsCom']")) {
    //---- APARTMENTS.COM
    $("[phone*='text']").text('786.244.5208');
    $("[phone*='link']").attr('href', 'tel:+17862445208');
    $('.email-filter').val('SHO10P02_apartments.email@slopejet.net');
    $('[email]').attr('href', 'mailto:SHO10P02_apartments.email@slopejet.net?Subject=Shoma Village Inquiry');
     //-------------
    } else if ($('input.utm_source').is("[value*='newsletter']")) {
    //---- EBLAST
    $("[phone*='text']").text('786.833.9249');
    $("[phone*='link']").attr('href', 'tel:+17868339249');
    $('.email-filter').val('SHO10P02_eblast.email@slopejet.net');
    $('[email]').attr('href', 'mailto:SHO10P02_eblast.email@slopejet.net?Subject=Shoma Village Inquiry');
    //-------------
    } else if ($('input.utm_source').is("[value*='mailer']")) {
    //---- DIRECT MAILER
    $("[phone*='text']").text('786.504.7294');
    $("[phone*='link']").attr('href', 'tel:+17865047294');
    $('.email-filter').val('SHO10P02_directmailer.email@slopejet.net');
    $('[email]').attr('href', 'mailto:SHO10P02_directmailer.email@slopejet.net?Subject=Shoma Village Inquiry');
    //-------------
    } else if ($('.utm_source').is("[value*='insta']")) {
    //---- INSTAGRAM
    $("[phone*='text']").text('786.833.9647');
    $("[phone*='link']").attr('href', 'tel:+17868339647');
    $('.email-filter').val('SHO10P02_instagram.email@slopejet.net');
    $('[email]').attr('href', 'mailto:SHO10P02_instagram.email@slopejet.net?Subject=Shoma Village Inquiry');
    //-------------
    } else if ($('input.utm_source').is("[value*='printed']")) {
    //---- PRINTED MATERIALS
    $("[phone*='text']").text('786.933.5599');
    $("[phone*='link']").attr('href', 'tel:+17869335599');
    $('.email-filter').val('SHO10P02_printedmaterial.email@slopejet.net');
    $('[email]').attr('href', 'mailto:SHO10P02_printedmaterial.email@slopejet.net?Subject=Shoma Village Inquiry');
    //-------------
    } else if ($('input.utm_source').is("[value*='tiktok']")) {
    //---- TIKTOK
    $("[phone*='text']").text('786.386.1444');
    $("[phone*='link']").attr('href', 'tel:+17863861444');
    $('.email-filter').val('SHO10P02_tiktok.email@slopejet.net');
    $('[email]').attr('href', 'mailto:SHO10P02_tiktok.email@slopejet.net?Subject=Shoma Village Inquiry');
    //-------------
    } else if ($('input.utm_source').is("[value*='twitter']")) {
    //---- TWITTER
    $("[phone*='text']").text('786.980.9707');
    $("[phone*='link']").attr('href', 'tel:+17869809707');
    $('.email-filter').val('SHO10P02_t.email@slopejet.net');
    $('[email]').attr('href', 'mailto:SHO10P02_t.email@slopejet.net?Subject=Shoma Village Inquiry');
    //-------------
    } else if ($('.utm_source').is("[value*='youtube']")) {
    //---- YOUTUBE
    $("[phone*='text']").text('786.833.9742');
    $("[phone*='link']").attr('href', 'tel:+17868339742');
    $('.email-filter').val('SHO10P02_youtube.email@slopejet.net');
    $('[email]').attr('href', 'mailto:SHO10P02_youtube.email@slopejet.net?Subject=Shoma Village Inquiry');
    //-------------
    } else {
    //---- PROPERTY WEBSITE
    $("[phone*='text']").text('786.321.9705');
    $("[phone*='link']").attr('href', 'tel:+17863219705');
    $('.email-filter').val('SHO10P02_website.email@slopejet.net');
    $('[email]').attr('href', 'mailto:SHO10P02_website.email@slopejet.net?Subject=Shoma Village Inquiry');
    }