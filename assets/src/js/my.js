'use strict'

const lineArr = [...document.querySelectorAll('.show-line')];
const first = document.querySelector('.first-box');
const second = document.querySelector('.second-text');
const third = document.querySelector('.third-text');
const title = document.querySelector('.top-title');
// const selectArr = [...document.querySelectorAll('.desktop-select-option')];

for (line of lineArr) {
    line.addEventListener('click', showAndHide);
}

// for (let i of selectArr) {
//     i.addEventListener('click', pickPay)
    
// }


function showAndHide(e) {
    if (second.classList.contains('unhidden')) {
        first.classList.toggle('hidden');
        title.classList.toggle('first-title');
        second.classList.toggle('unhidden');
        second.style.display = 'none';
    } else {
        first.classList.toggle('hidden');
        second.classList.toggle('unhidden');
        second.style.display = 'block';
        title.classList.toggle('first-title');
    }
}

// second.firstChild

// function pickPay(e) {
//     let logo = document.querySelector('.logo-box');
//     logo.classList.toggle('logo-box-pick')
// }