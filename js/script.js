'use strict'

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');
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

div.classList.add('black')// С помощью скрипта мы создаём элемент и изменяем его цвет

document.body.append(div);// Мы берём тэг body и вовнутрь в конец элемента вставляем div
//wrapper.append(div); // Мы выбираем элемент и вконец вставляем блок
// wrapper.appendChild(div);

//wrapper.prepend(div);

//hearts[0].before(div); //Вставляем элемент перед первым элементом дива

//hearts[0].after(div);// Добавляем элемент после первого div

//wrapper.insertBefore(div, hearts[1]);// Помещаем элемент перед вторым элементом

//circles[0].remove();

//wrapper.removeChild(hearts[1]);


//hearts[0].replaceWith(circles[0]);// Заменяем один элемент другим

// wrapper.replaceChild(cirlces[0], hearts[0]); //Мы выбираем первый кружок, ставим запятую и заменяем его первым сердечком

 div.innerHTML = "<h1>Hello World</h1>";

//div.textContent = "<h1>Hello</h1>";

//div.insertAdjacentHTML('beforebegin','<h2>Hello</h2>');// Вставляет код прямо перед элементом
div.insertAdjacentHTML('afterbegin','<h2>Hello</h2>');