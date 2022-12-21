"use strict";

/*
Task 6

Створити функцію setInnerText, яка буде міняти в елемента за його id текстову складову. Якщо елемента не існує, то функція має повернути значення false, якщо елемент існує, то функція повертає значення true

> setInnerText('mySpecialId', 'my new value')

*/
var SetInnerText = function SetInnerText(id, value) {
  var elem = document.getElementById(id);

  if (elem) {
    elem.innerText = value;
    return true;
  } else {
    return false;
  }
};

console.log(SetInnerText('newvalue', 'If you see this , then value has changed'));