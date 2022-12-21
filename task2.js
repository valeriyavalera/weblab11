/* 
Task 2
Створити функцію getNextNumber яка буде приймати один аргумент та повертати:

- наступне число, якщо аргумент є додатній
- попереднє число, якщо аргумент є від'ємний
- при передачі значення 0, повертати 0
*/



function getNextNumber(x){
    let c=x+1
    let b=x-1
    x>0 ? console.log(c) : (x<0 ? console.log(b) : console.log(0));
}

console.log(getNextNumber(5))
