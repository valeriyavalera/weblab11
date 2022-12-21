/* 
Task 7
Створити функцію generateListOfNumberWithStep, яка буде приймати три параметра: початок, кінець відрізку, крок. Функція повинна створити на сторінці список з числовими значеннями з відрізку з заданим кроком. Якщо передані іислові значення не є відрізком(перший аргумент є більший за дургий), функція повинна стоврити на сторінці елемент <p> з текстом: "Wrong interval". У випадку якщо крок задається 0 або менеше, необхідно створити елемент span з текстом: "Interval must be positive number"

> generateListOfNumber(1, 7, 3)

```
 <body>
   <ul>
    <li>1</li>
    <li>4</li>
    <li>7</li>
   </ul>
 </body>
```

> generateListOfNumber(20, 5, 2)

```
<body>
  <p>Wrong interval</p>
</body>
```

> generateListOfNumber(1, 5, -2)

```
<body>
  <span>Interval must be positive number</span>
</body>
```
*/