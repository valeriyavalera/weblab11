/*
Task 3
Створити функцію getTriangleSquare, яка буде рахувати площу трикутника за формулою Герона(https://uk.wikipedia.org/wiki/%D0%A4%D0%BE%D1%80%D0%BC%D1%83%D0%BB%D0%B0_%D0%93%D0%B5%D1%80%D0%BE%D0%BD%D0%B0). Функція приймає в якості аргументів довжини сторін трикутника

> Для отримання квадратного кореню з числа використати Math.sqrt(значення)
> Math.sqrt(16) => 4
> Math.sqrt(9) => 3
> Math.sqrt(81) => 9
> let c = 25;
> Math.sqrt(c) => 5
*/

function getTriangleSquare(a,b,c){
    let p = (a+b+c)*0.5 ;
    let s = Math.sqrt(p*(p-a)*(p-b)*(p-c))
    return s;
}
console.log("The area is :")
console.log(getTriangleSquare(7,8,9))