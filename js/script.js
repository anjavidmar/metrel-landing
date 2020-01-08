var h = window.innerHeight;
var w = window.innerWidth;
var y = window.scrollY;

var site = document.querySelector('.site');

var site_h = site.offsetHeight;
var site_w = site.offsetWidth;

console.log('screen height = ' + h, 'screen width = ' + w);
console.log('site height = ' + site_h, 'site width = ' + site_w);

// header sizing

var header = document.getElementById('header');
var headerHero = document.getElementById('header-hero');

if (w > h * 1.385) {
    header.style.height = h + 'px';
    headerHero.classList.toggle('hidden');
}

// cookie policy

var cookiesContainer = document.getElementById('cookies-notice-container');
var cookies = localStorage.getItem('cookies');

function closeCookieNotification() {
    cookiesContainer.classList.add('hidden');
}

function acceptCookiePolicy() {
    cookiesContainer.classList.add('hidden');
    localStorage.setItem('cookies', 'accepted');
}

if (cookies === 'accepted') {
    cookiesContainer.classList.add('hidden');
}

function openCookiePopUp() {
    console.log('open');
    
}
function closeCookiePopUp() {
    console.log('close');
    
}

// sticky button

var nonStickyButton = document.getElementById('non-sticky-button');
var nonStickyButton_rect = nonStickyButton.getBoundingClientRect();
var nonStickyButton_rect_typeof = typeof(nonStickyButton_rect.y);

var stickyButton = document.getElementById('sticky-button');

var form = document.getElementById('form');
var form_rect = form.getBoundingClientRect();

function stickyOnScroll(z) {
    if (nonStickyButton_rect.y > 0) {
        stickyButton.classList.remove('fixed');
    } else {
        stickyButton.classList.add('fixed');
    }

    if (z > 0) {
        var negZ = z * (-1);
        stickyButton.style.top = negZ + 'px';
    } else {
        stickyButton.style.top = 0;
    }
}

// iconed ul sizing

var ul_iconed = document.querySelector('.iconed');
var ul_iconed_w =  ul_iconed.offsetWidth;
var li_img = document.querySelector('.iconed img');
var li_img_w =  li_img.offsetWidth;
var li_span = document.querySelectorAll('.iconed span');
var li_span_w = ul_iconed_w - (li_img_w * 1.75)
var program = document.querySelectorAll('.program');

for (var i = 0; i < li_span.length; i++) {
    li_span[i].style.width = li_span_w + 'px';
}

// scroll animation

var animationContainer = document.getElementById('scroll-animation-container');
var animationContainer_rect = animationContainer.getBoundingClientRect();
var mobileAnimationContainer = document.getElementById('scroll-animation-container--mobile');
var mobileAnimationContainer_rect = mobileAnimationContainer.getBoundingClientRect();

var animationLabel = document.getElementsByClassName('label');
var animationNumberedIcon = document.getElementsByClassName('n');
var animationNumberedLabel = document.getElementsByClassName('numbered');
var animationUl = document.querySelector('.animated-ul-container');
var animationUl_h = animationUl.offsetHeight;

function scrollAnimationMobile() {
    var x = h;
    var y = (mobileAnimationContainer_rect.height + animationUl_h) * (-1);

    var m0_1 = h - mobileAnimationContainer_rect.height - (animationUl_h / 9);
    var m1_1 = h - mobileAnimationContainer_rect.height - (animationUl_h / 9 * 2);
    var m2_1 = h - mobileAnimationContainer_rect.height - (animationUl_h / 9 * 3);
    var m3_1 = h - mobileAnimationContainer_rect.height - (animationUl_h / 9 * 4);
    var m4_1 = h - mobileAnimationContainer_rect.height - (animationUl_h / 9 * 5);
    var m5_1 = h - mobileAnimationContainer_rect.height - (animationUl_h / 9 * 6);
    var m6_1 = h - mobileAnimationContainer_rect.height - (animationUl_h / 9 * 7);
    var m7_1 = h - mobileAnimationContainer_rect.height - (animationUl_h / 9 * 8);
    var m8_1 = h - mobileAnimationContainer_rect.height - (animationUl_h / 9 * 9);
    var m0_2 = (mobileAnimationContainer_rect.height * (-1));
    var m1_2 = (mobileAnimationContainer_rect.height * (-1)) - (animationUl_h / 9);
    var m2_2 = (mobileAnimationContainer_rect.height * (-1)) - (animationUl_h / 9 * 2);
    var m3_2 = (mobileAnimationContainer_rect.height * (-1)) - (animationUl_h / 9 * 3);
    var m4_2 = (mobileAnimationContainer_rect.height * (-1)) - (animationUl_h / 9 * 4);
    var m5_2 = (mobileAnimationContainer_rect.height * (-1)) - (animationUl_h / 9 * 5);
    var m6_2 = (mobileAnimationContainer_rect.height * (-1)) - (animationUl_h / 9 * 6);
    var m7_2 = (mobileAnimationContainer_rect.height * (-1)) - (animationUl_h / 9 * 7);
    var m8_2 = (mobileAnimationContainer_rect.height * (-1)) - (animationUl_h / 9 * 8);
    if (mobileAnimationContainer_rect.y > x ) {
        for (var i = 0; i < animationNumberedIcon.length; i++) {
            animationNumberedIcon[i].classList.add('transparent');
            animationNumberedIcon[i].classList.remove('opaque');
            animationNumberedLabel[i].classList.add('transparent');
            animationNumberedLabel[i].classList.remove('opaque');
        }
    } else if (mobileAnimationContainer_rect.y < y) {
        for (var i = 0; i < animationNumberedIcon.length; i++) {
            animationNumberedIcon[i].classList.add('transparent');
            animationNumberedIcon[i].classList.remove('opaque');
            animationNumberedLabel[i].classList.add('transparent');
            animationNumberedLabel[i].classList.remove('opaque');
        }
    } else {
        if (mobileAnimationContainer_rect.y < m0_1 && mobileAnimationContainer_rect.y > m0_2) {
            animationNumberedIcon[0].classList.add('opaque');
            animationNumberedIcon[0].classList.remove('transparent');
            animationNumberedLabel[0].classList.add('opaque');
            animationNumberedLabel[0].classList.remove('transparent');
        }
        if (mobileAnimationContainer_rect.y < m1_1 && mobileAnimationContainer_rect.y > m1_2) {
            animationNumberedIcon[1].classList.add('opaque');
            animationNumberedIcon[1].classList.remove('transparent');
            animationNumberedLabel[1].classList.add('opaque');
            animationNumberedLabel[1].classList.remove('transparent');
        }
        if (mobileAnimationContainer_rect.y < m2_1 && mobileAnimationContainer_rect.y > m2_2) {
            animationNumberedIcon[2].classList.add('opaque');
            animationNumberedIcon[2].classList.remove('transparent');
            animationNumberedLabel[2].classList.add('opaque');
            animationNumberedLabel[2].classList.remove('transparent');
        }
        if (mobileAnimationContainer_rect.y < m3_1 && mobileAnimationContainer_rect.y > m3_2) {
            animationNumberedIcon[3].classList.add('opaque');
            animationNumberedIcon[3].classList.remove('transparent');
            animationNumberedLabel[3].classList.add('opaque');
            animationNumberedLabel[3].classList.remove('transparent');
        }
        if (mobileAnimationContainer_rect.y < m4_1 && mobileAnimationContainer_rect.y > m4_2) {
            animationNumberedIcon[4].classList.add('opaque');
            animationNumberedIcon[4].classList.remove('transparent');
            animationNumberedLabel[4].classList.add('opaque');
            animationNumberedLabel[4].classList.remove('transparent');
        }
        if (mobileAnimationContainer_rect.y < m5_1 && mobileAnimationContainer_rect.y > m5_2) {
            animationNumberedIcon[5].classList.add('opaque');
            animationNumberedIcon[5].classList.remove('transparent');
            animationNumberedLabel[5].classList.add('opaque');
            animationNumberedLabel[5].classList.remove('transparent');
        }
        if (mobileAnimationContainer_rect.y < m6_1 && mobileAnimationContainer_rect.y > m6_2) {
            animationNumberedIcon[7].classList.add('opaque');
            animationNumberedIcon[7].classList.remove('transparent');
            animationNumberedLabel[6].classList.add('opaque');
            animationNumberedLabel[6].classList.remove('transparent');
        }
        if (mobileAnimationContainer_rect.y < m7_1 && mobileAnimationContainer_rect.y > m7_2) {
            animationNumberedIcon[8].classList.add('opaque');
            animationNumberedIcon[8].classList.remove('transparent');
            animationNumberedLabel[7].classList.add('opaque');
            animationNumberedLabel[7].classList.remove('transparent');
        }
        if (mobileAnimationContainer_rect.y < m8_1 && mobileAnimationContainer_rect.y > m8_2) {
            animationNumberedIcon[6].classList.add('opaque');
            animationNumberedIcon[6].classList.remove('transparent');
            animationNumberedLabel[8].classList.add('opaque');
            animationNumberedLabel[8].classList.remove('transparent');
        }
    }
}

function scrollAnimationDesktop() {
    var x = h;
    var y = animationContainer_rect.height * (-1);

    var l0_1 = h - (animationContainer_rect.height / 9);
    var l1_1 = h - (animationContainer_rect.height / 9 * 2);
    var l2_1 = h - (animationContainer_rect.height / 9 * 3);
    var l3_1 = h - (animationContainer_rect.height / 9 * 4);
    var l4_1 = h - (animationContainer_rect.height / 9 * 5);
    var l5_1 = h - (animationContainer_rect.height / 9 * 6);
    var l6_1 = h - (animationContainer_rect.height / 9 * 7);
    var l7_1 = h - (animationContainer_rect.height / 9 * 8);
    var l8_1 = h - (animationContainer_rect.height / 9 * 9);
    var l0_2 = (animationContainer_rect.height * (-1)) + (animationContainer_rect.height / 9 * 9);
    var l1_2 = (animationContainer_rect.height * (-1)) + (animationContainer_rect.height / 9 * 8);
    var l2_2 = (animationContainer_rect.height * (-1)) + (animationContainer_rect.height / 9 * 7);
    var l3_2 = (animationContainer_rect.height * (-1)) + (animationContainer_rect.height / 9 * 6);
    var l4_2 = (animationContainer_rect.height * (-1)) + (animationContainer_rect.height / 9 * 5);
    var l5_2 = (animationContainer_rect.height * (-1)) + (animationContainer_rect.height / 9 * 4);
    var l6_2 = (animationContainer_rect.height * (-1)) + (animationContainer_rect.height / 9 * 3);
    var l7_2 = (animationContainer_rect.height * (-1)) + (animationContainer_rect.height / 9 * 2);
    var l8_2 = (animationContainer_rect.height * (-1)) + (animationContainer_rect.height / 9);

    if (animationContainer_rect.y > x) {
        for (var i = 0; i < animationLabel.length; i++) {
            animationLabel[i].classList.add('transparent');
            animationLabel[i].classList.remove('opaque');
        }
    } else if (animationContainer_rect.y < y) {
        for (var i = 0; i < animationLabel.length; i++) {
            animationLabel[i].classList.add('transparent');
            animationLabel[i].classList.remove('opaque');
        }
    } else {
        if (animationContainer_rect.y < l0_1 && animationContainer_rect.y > l0_2) {
            animationLabel[0].classList.add('opaque');
            animationLabel[0].classList.remove('transparent');
        }
        if (animationContainer_rect.y < l1_1 && animationContainer_rect.y > l1_2) {
            animationLabel[1].classList.add('opaque');
            animationLabel[1].classList.remove('transparent');
        }
        if (animationContainer_rect.y < l2_1 && animationContainer_rect.y > l2_2) {
            animationLabel[2].classList.add('opaque');
            animationLabel[2].classList.remove('transparent');
        }
        if (animationContainer_rect.y < l3_1 && animationContainer_rect.y > l3_2) {
            animationLabel[3].classList.add('opaque');
            animationLabel[3].classList.remove('transparent');
        }
        if (animationContainer_rect.y < l4_1 && animationContainer_rect.y > l4_2) {
            animationLabel[4].classList.add('opaque');
            animationLabel[4].classList.remove('transparent');
        }
        if (animationContainer_rect.y < l5_1 && animationContainer_rect.y > l5_2) {
            animationLabel[5].classList.add('opaque');
            animationLabel[5].classList.remove('transparent');
        }
        if (animationContainer_rect.y < l6_1 && animationContainer_rect.y > l6_2) {
            animationLabel[6].classList.add('opaque');
            animationLabel[6].classList.remove('transparent');
        }
        if (animationContainer_rect.y < l7_1 && animationContainer_rect.y > l7_2) {
            animationLabel[7].classList.add('opaque');
            animationLabel[7].classList.remove('transparent');
        }
        if (animationContainer_rect.y < l8_1 && animationContainer_rect.y > l8_2) {
            animationLabel[8].classList.add('opaque');
            animationLabel[8].classList.remove('transparent');
        }
    }
}

// change computer screen

function changeScreen(a, b, c, d) {
    program[a].classList.toggle('show');
    program[a].classList.toggle('hide');
    program[b].classList.toggle('show');
    program[b].classList.toggle('hide');
    program[c].classList.toggle('show');
    program[c].classList.toggle('hide');
    program[d].classList.toggle('show');
    program[d].classList.toggle('hide');
}

var m = 0;
var n = m + 1;
var o = 4;
var p = o + 1;

function whichScreen() {
    m ++
    if (n > 0 && m > 2) {
        n = 0;
    } else if (m > 3) {
        m = 0;
        n = m + 1;
    } else {
        n = m + 1
    }
    o ++
    if (p > 4 && o > 6) {
        p = 4;
    } else if (o > 7) {
        o = 4;
        p = o + 1
    } else {
        p = o + 1
    }

    changeScreen (m, n, o, p)
}

// line up sizing

var lead_description = document.getElementsByClassName('lead-description');
var lead_description2_h = lead_description[2].offsetHeight;

if (w > 849) {
    lead_description[0].style.height = lead_description2_h + 'px';
    lead_description[1].style.height = lead_description2_h + 'px';
} else {
    lead_description[0].style.height = 'auto';
    lead_description[1].style.height = 'auto';
}

// ongoing:

document.addEventListener("DOMContentLoaded", function() {

    $('.sticky-scroll-button').on('click', function(event) {
        var hash = '#form';
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 2000);
    });

    window.addEventListener("resize", function() {
        h = window.innerHeight;
        w = window.innerWidth;

        ul_iconed_w =  ul_iconed.offsetWidth;
        li_img_w =  li_img.offsetWidth;
        li_span_w = ul_iconed_w - (li_img_w * 1.75)

        lead_description2_h = lead_description[2].offsetHeight;

        if (w > h * 1.385) {
            header.style.height = h + 'px';
            headerHero.classList.add('hidden');
        } else {
            header.style.height = 'auto';
            headerHero.classList.remove('hidden');
        }

        if (w > 849) {
            lead_description[0].style.height = lead_description2_h + 'px';
            lead_description[1].style.height = lead_description2_h + 'px';
        } else {
            lead_description[0].style.height = 'auto';
            lead_description[1].style.height = 'auto';
        }

        for (var i = 0; i < li_span.length; i++) {
            li_span[i].style.width = li_span_w + 'px';
        }
    });

    window.addEventListener("scroll", function() {
        y = window.scrollY;
        nonStickyButton_rect = nonStickyButton.getBoundingClientRect();
        form_rect = form.getBoundingClientRect();
        animationContainer_rect = animationContainer.getBoundingClientRect();
        mobileAnimationContainer_rect = mobileAnimationContainer.getBoundingClientRect();
        animationUl_h = animationUl.offsetHeight;
        var z = h - form_rect.y;
        
        if (nonStickyButton_rect_typeof === 'number') {
            stickyOnScroll(z)
        }

        if (mobileAnimationContainer_rect.width !== 0) {
            scrollAnimationMobile()
        } else {
            scrollAnimationDesktop()
        }
    });

    changeScreen (m, n, o, p)

    setInterval(whichScreen, 5000);
});