const man4 = document.querySelector('.js-m4');
const openMan4 = document.querySelector('.js-m3-btn');
const closeMan4 = document.querySelector('.js-m4-forward');

const man1 = document.querySelector('.js-m1');

const man2 = document.querySelector('.js-m2');
const closeMan2 = document.querySelector('.js-m2-btn');

const man5 = document.querySelector('.js-m5');
const closeMan5 = document.querySelector('.js-m5-forward');
const openMan5 = document.querySelector('.js-instagram');

const man6 = document.querySelector('.js-m6');
const closeMan6 = document.querySelector('.js-m6-close');
const openMan6 = document.querySelector('.js-m5-main');

const man7 = document.querySelector('.js-m7');
const closeMan7 = document.querySelector('.js-m7-close');
const openMan7 = document.querySelector('.js-google');

const man8 = document.querySelector('.js-m8');
const openMan8 = document.querySelector('.js-m7-open');
const closeMan8 = document.querySelector('.js-m8-return');

const man81 = document.querySelector('.js-m81-img-show');
const openMan81 = document.querySelector('.js-m8-img');

const man9 = document.querySelector('.js-m9');
const openMan9 = document.querySelector('.js-fb');
const closeMan9 = document.querySelector('.js-m9-forward');

const img1 = document.querySelector('.js-img1');
const openimg1 = document.querySelector('.js-m9-img1');

const img2 = document.querySelector('.js-img2');
const openimg2 = document.querySelector('.js-m9-img2');

// màn 4 
function showM4() {
    man4.classList.add('open');
}
function offM4() {
    man4.classList.remove('open');
}

openMan4.addEventListener('click', showM4);
closeMan4.addEventListener('click', offM4);

// màn 1
function showM1() {
    man1.classList.add('close');
}

man1.addEventListener('click', showM1);

// màn 2
 function offM2() {
     man2.classList.add('close');
 }

 closeMan2.addEventListener('click', offM2);

 // màn 5
 function showM5() {
     man5.classList.add('open');
 }
 function offM5() {
    man5.classList.remove('open');
}

openMan5.addEventListener('click', showM5);
closeMan5.addEventListener('click', offM5);

// màn 6
function showM6() {
    man6.classList.add('open');
}
function offM6() {
    man6.classList.remove('open');
}

openMan6.addEventListener('click', showM6);
closeMan6.addEventListener('click', offM6);

// màn 7 
function showMan7() {
    man7.classList.add('open');
}
function offMan7() {
    man7.classList.remove('open');
}

openMan7.addEventListener('click', showMan7);
closeMan7.addEventListener('click', offMan7);

// màn 8
function showM8() {
    man8.classList.add('open');
}
function offM8() {
    man8.classList.remove('open');
}

openMan8.addEventListener('click', showM8);
closeMan8.addEventListener('click', offM8);

// màn 81
function showM81() {
    man81.classList.add('open');
}
function offM81() {
    man81.classList.remove('open');
}

openMan81.addEventListener('click', showM81);
man81.addEventListener('click', offM81);

// màn 9
function showM9() {
    man9.classList.add('open');
}
function offM9() {
    man9.classList.remove('open');
}

openMan9.addEventListener('click', showM9);
closeMan9.addEventListener('click', offM9);

// img 1
function showimg1() {
    img1.classList.add('open');
}
function offimg1() {
    img1.classList.remove('open');
}

openimg1.addEventListener('click', showimg1);
img1.addEventListener('click', offimg1);

// img 2
function showimg2() {
    img2.classList.add('open');
}
function offimg2() {
    img2.classList.remove('open');
}

openimg2.addEventListener('click', showimg2);
img2.addEventListener('click', offimg2);