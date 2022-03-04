const unlockMan3 = document.querySelector('.js-m3-btn');

const man4 = document.querySelector('.js-m4');
const closeMan4 = document.querySelector('.js-m4-forward');

const man1 = document.querySelector('.js-m1');

const man2 = document.querySelector('.js-m2');
const closeMan2 = document.querySelector('.js-m2-btn');

const man5 = document.querySelector('.js-m5');
const closeMan5 = document.querySelector('.js-m5-forward');
const openMan5 = document.querySelector('.js-instagram');

// màn 4 
function showM4() {
    man4.classList.add('open');
}
function offM4() {
    man4.classList.remove('open');
}

unlockMan3.addEventListener('click', showM4);
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


