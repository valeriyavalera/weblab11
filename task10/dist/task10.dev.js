"use strict";

/* 
Task 10

Стоврити код, який буде всім елементам з CSS класом `random-font` додавати функцію кліку, яка буде змінювати властивість `font-family` на випадковий шрифт. Послідовність шрифтів має бути попередньо заданою.

```
const fontFamilies = [
 'Arial', 'Times New Roman',
 'Verdana', 'Brush Script MT',
 'Tahoma', 'Garamond',
];
```

Для отриамння випадкового індексу використати наступний вираз:

> Math.floor(Math.random() \* fontFamilies.length)

*/
var elems = document.getElementsByClassName('random-font');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var el = _step.value;
    el.addEventListener('click', function () {
      var fontFamilies = ['Arial', 'Times New Roman', 'Verdana', 'Brush Script MT', 'Tahoma', 'Garamond'];
      el.style.fontFamily = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
    });
  };

  for (var _iterator = elems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}