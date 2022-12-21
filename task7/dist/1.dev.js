"use strict";

/*
Task 7
Створити функцію generateListOfNumber, яка буде приймати два параметра: початок і кінець відрізку. Функція повинна стоврити на сторінці список з числовими значеннями з відрізку. Якщо передані іислові значення не є відрізком(перший аргумент є більший за дургий), функція повинна стоврити на сторінці елемент <p> з текстом: "Wrong interval"

> generateListOfNumber(1, 5)

```
<body>
<ul>
 <li>1</li>
 <li>2</li>
 <li>3</li>
 <li>4</li>
 <li>5</li>
</ul>
</body>
```

> generateListOfNumber(20, 5)

```
<body>
<p>Wrong interval</p]>
</body>
```
*/
window.addEventListener('load', function () {
  function GenerateListOfNumber(begin, end) {
    if (begin > end) {
      var wrong = document.createElement('p');
      wrong.innerText = 'Wrong interval';
      var body = document.body;
      body.appendChild(wrong);
    } else {
      var ul = document.createElement('ul');

      while (begin <= end) {
        var li = document.createElement('li');
        li.innerText = begin;
        ul.appendChild(li);
        begin++;
      }

      var _body = document.body;

      _body.appendChild(ul);
    }
  }

  GenerateListOfNumber(1, 5);
});