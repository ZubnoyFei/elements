'use strict'

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');

// box.style.backgroundColor ='blue';
// box.style.width = '500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';// Мы указываем чётко элемент, на котором будут происходить изменения

<!--Назначение нескольких инлайн-стилей -->

box.style.cssText = `background-color: blue; width: 500px`;

<!--Изменение нескольких стилей одновременно -->

// for( let i = 0; i < hearts.length; i++) { //Мы перебираем массив с самого начала. Переборка будет пока не будет использован весь length массива
//     hearts[i].style.backgroundColor = 'blue';
//
// }


hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});


<!--Методы для работы с элементами страницы-->

const div = document.createElement('div'); // Мы создаём элемент. Но этот элемент существует только внутри JS!

const text = document.createTextNode("I've been here");

