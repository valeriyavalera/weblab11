"use strict";

/* 
Task 11

Створити функцію getRandomColor, яка в якості аргумента приймає спосіб задання кольору: hex, rgb. Якщо у функцію передадуть тип, який не підтримується, функція повертає -1. Для rgb кольору є обмеження, що кожне число має бути в діапазоні від 0 до 255. Для hex кольору необхідно сформувати послідовність з літер(ABCDEF) і чисел довжиною в 6 символів. Для генерації випадкової літери використати принцип з Task 10 для отримання рандомного шрифта.

Для випадковго числа в десятковій системі числення використати цю функцію

```
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
```

> getRandomColor('rgb') => "rgb(122, 234, 150)"
> getRandomColor('hex') => "#12DD4F"
> getRandomColor('hexical') => -1

*/
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var getRandomColor = function getRandomColor(type) {
  if (type == 'rgb') {
    var num1 = Math.floor(Math.random() * 256);
    var num2 = Math.floor(Math.random() * 256);
    var num3 = Math.floor(Math.random() * 256);
    var rgb = "rgb(".concat(num1, ", ").concat(num2, ", ").concat(num3, ")");
    return rgb;
  } else if (type == 'hex') {
    var letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    var hex = '#';

    for (var i = 0; i < 3; i++) {
      var number = randomIntFromInterval(1, 9);
      hex += number;
      var letter = letters[Math.floor(Math.random() * letters.length)];
      hex += letter;
    }

    return hex;
  } else {
    return -1;
  }
};

console.log(getRandomColor('rgb'));