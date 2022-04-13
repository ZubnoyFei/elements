'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');
    wrapper = document.querySelector('.wrapper').append(div)



box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';// для изменения цвета нам необходимо указать чётко элемент, на котором будут изменения происходить. К примеру, элемент с индексм[0]

/*Для изменения сразу нескольких элементов мы можем использовать for...each*/

// for(let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item =>{
   item.style.backgroundColor = 'blue';
});

const div = document.createElement('div'); // Мы создаём элемент, который существует только внутри JS, на странице он не появится

//const text = document.createTextNode('Тут был я');

<!--Для модификации элементов используются CSS классы -->

div.classList.add('black');

//document.body.append(div);//Мыиспользуем тэг body как родителя и вовнутрь помещаем div

wrapper.appendChild(div);//  Элемент black с классом black переместился в конец класса wrapper

//document.querySelector('.wrapper').append(div);// Внутри класса Wrapper появляется новый блок, в конец родительского блока вставляется элемент

//wrapper.prepend(div);

//hearts[0].before(div);// перед сердцем появится черный прямоугольник

//hearts[0].after(div);// блок black смещается за первый элемент heart


//circles[0].remove();// Данный метод удаляет элементы. мы прописываем, какой элемент мы хотим удалить и вызываем метод remove

//hearts[0].replaceWith(circles[0]); //Метод используется для замены одного элемента другим. СНачала мы прописываем, какой элемент мы хотим заменить, в круглых скобках указываем, каим элементом хотим заменить.

div.innerHTML = "<h1>Hello World</h1>";

//div.textContent = "Hello";

div.insertAdjacentHTML("afterbegin", '<h2>Hello</h2>');