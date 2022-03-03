const unlock = document.querySelector('.js-m3-btn');
const man4 = document.querySelector('.js-m4');
const close = document.querySelector('.js-control-forward');

function showM4() {
    man4.classList.add('open');
}

function offM4() {
    man4.classList.remove('open');
}

unlock.addEventListener('click', showM4);

close.addEventListener('click', offM4);

