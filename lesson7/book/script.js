'use strict';

let books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book');
    books[0].insertBefore(book[1], book[0]);
    books[0].insertBefore(book[4], book[2]);
    books[0].insertBefore(book[3], book[2]);
    books[0].insertBefore(book[5], book[2]);
let body = document.querySelector('body');
    body.setAttribute('style', 'background: url(./image/you-dont-know-js.jpg)');
let changeText = document.querySelectorAll("a")[2];
    changeText.textContent = 'Книга 3. this и Прототипы Объектов';
let elem = document.querySelector('.adv');
    elem.parentNode.removeChild(elem); 
let list = document.querySelectorAll('ul'),
    blockTwo = list[1],
    blockFive = list[4],
    listBlockTwo = blockTwo.children,
    listBlockFive = blockFive.children;
    blockTwo.insertBefore(listBlockTwo[6], listBlockTwo[4]);
    blockTwo.insertBefore(listBlockTwo[8], listBlockTwo[5]);
    blockTwo.insertBefore(listBlockTwo[2], listBlockTwo[10]);

    blockFive.insertBefore(listBlockFive[9], listBlockFive[2]);
    blockFive.insertBefore(listBlockFive[4], listBlockFive[3]);
    blockFive.insertBefore(listBlockFive[5], listBlockFive[4]);
    blockFive.insertBefore(listBlockFive[6], listBlockFive[9]);
let last = document.querySelectorAll('ul'),
    listСhapter = last[5],
    listСhapterText = listСhapter.children;
    listСhapter.appendChild(listСhapterText[9]).innerHTML = 'Глава 8: За пределами ES6';