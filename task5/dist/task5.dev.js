"use strict";

/*
Task 5
Створити функцію getCountOfByClassName, яка в якості аргумента, приймає назву CSS класу, а резульаттом функції є повернення кількості елементів з таким класом на сторінці.

```
<body>
  <div class="item"></div>
  <div class="item"></div>
  <div class="elem"></div>
</body>
```

> getCountOfByClassName('item') => 2
> getCountOfByClassName('elem') => 1
> getCountOfByClassName('abc') => 0
*/
function getCountOfByClassName(className) {
  var quantity = document.getElementsByClassName(className).length;
  return quantity;
}

result = getCountOfByClassName('item');
console.log(result);