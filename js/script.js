var h = window.innerHeight;
var w = window.innerWidth;

var site = document.querySelector('.site');

var site_h = site.offsetHeight;
var site_w = site.offsetWidth;

console.log('screen height = ' + h, 'screen width = ' + w);
console.log('site height = ' + site_h, 'site width = ' + site_w);

var header = document.getElementById('header');
var headerHero = document.getElementById('header-hero');

if (w > h * 1.385) {
    header.style.height = h + 'px';
    headerHero.classList.toggle('hidden');
}

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

document.addEventListener("DOMContentLoaded", function() {

    window.addEventListener("resize", function() {
        h = window.innerHeight;
        w = window.innerWidth;

        ul_iconed_w =  ul_iconed.offsetWidth;
        li_img_w =  li_img.offsetWidth;
        li_span_w = ul_iconed_w - (li_img_w * 1.75)

        if (w > h * 1.385) {
            header.style.height = h + 'px';
            headerHero.classList.add('hidden');
        } else {
            header.style.height = 'auto';
            headerHero.classList.remove('hidden');
        }

        for (var i = 0; i < li_span.length; i++) {
            li_span[i].style.width = li_span_w + 'px';
        }
    });

    changeScreen (m, n, o, p)

    setInterval(whichScreen, 5000);
});
