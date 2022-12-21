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

const elems = document.getElementsByClassName('random-font');

for(const el of elems)
{
   el.addEventListener('click', () =>{
const fontFamilies= ['Arial', 'Times New Roman','Verdana', 'Brush Script MT','Tahoma', 'Garamond',];
      el.style.fontFamily = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
   });
}