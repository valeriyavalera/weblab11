/*
 Task 1
Створити функцію sumOfTwo яка буде приймати два аргументи, та повертати квадрат їх суми

> Для піднесення в квадрат використати Math.pow(значення, степінь)
> Math.pow(2, 2) => 4
> Math.pow(3, 1) => 3
> Math.pow(3, 2) => 9
> let c = 5;
> Math.pow(c, 2) => 25
> let a = 5 , b = 3;
> Math.pow(a, b) => 125 
*/

function sumOfTwo (num1 , num2){
    let sum = num1 + num2
    return Math.pow(sum, 2) 
}
console.log(sumOfTwo(2,4))
