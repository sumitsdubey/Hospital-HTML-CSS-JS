

function menuClick() {
    var navbar = document.getElementById('nav-mobile');
    var menuicon = document.getElementById('menu-click-icon');
    var closeicon = document.getElementById('menu-close-icon');
    navbar.style.display = "flex";
    menuicon.style.display = "none";
    closeicon.style.display = "initial";
}
function menuClose() {
    var navbar = document.getElementById('nav-mobile');
    var menuicon = document.getElementById('menu-click-icon');
    var closeicon = document.getElementById('menu-close-icon');
    navbar.style.display = "none";
    closeicon.style.display = "none";
    menuicon.style.display = "initial";
}

function wlcmpopupLoad() {
    var homepage_hero = document.getElementById('homepage-hero');
    var wlcm_popup = document.getElementById('wlcm-popup');
    homepage_hero.style.position = "fixed";
    wlcm_popup.style.visibility = "visible";

}


function closePopup() {
    var homepage_hero = document.getElementById('homepage-hero');
    var wlcm_popup = document.getElementById('wlcm-popup');
    homepage_hero.style.position = "initial";
    wlcm_popup.style.visibility = "hidden";
}
function getOption() {
    selectElement = document.querySelector('#consulting_doctor');
    output = selectElement.options[selectElement.selectedIndex].value;
    if (output == 0) {
        document.querySelector('#schedule').textContent = "";
        document.querySelector('#doctor-time').textContent = "";
    }
    if (output == 1) {
        document.querySelector('#schedule').textContent = "6PM - 7PM";
        document.querySelector('#doctor-time').textContent = "EVERY FIRST SUNDAY OF MONTH";
    }
    if (output == 2) {
        document.querySelector('#schedule').textContent = "4PM - 6PM";
        document.querySelector('#doctor-time').textContent = "WEDNESDAY";
    }
    if (output == 3) {
        document.querySelector('#schedule').textContent = "FULL DAY";
        document.querySelector('#doctor-time').textContent = "ONLY LAST SUNDAY OF THE MONTH";
    }
    if (output == 4) {
        document.querySelector('#schedule').textContent = "9AM - 6PM";
        document.querySelector('#doctor-time').textContent = "EVERYDAY";
    }


}


function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        defaultLanguage: 'hi',
        pageLanguage: 'hi',
        includedLanguages: 'hi,bn,de,nl,en,es,it,fr,no',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: true,
        multilanguagePage: true
    }, 'google_translate_element');
};

    google.translate.TranslateElement.showBanner(false); // Hide the language selector popup
    google.translate.TranslateElement.selectLanguage('hi');

// function bookAppointment(){
//     var homepage_hero= document.getElementById('homepage-hero');
//     var bookappointment = document.getElementById('bookappointment-main');
//     homepage_hero.style.position="fixed";
//     bookappointment.style.display="flex";
// }

// function closeAppointment(){
//     var homepage_hero= document.getElementById('homepage-hero');
//     var bookappointment = document.getElementById('bookappointment-main');
//     homepage_hero.style.position="initial";
//     bookappointment.style.display="none";
// }

