/*
Task 4
Створити функцію getSeconds, яка буде повертати кількість секунд, в залежності від того що їй передадуть.
Функція має два аргументи:
- value - аргумент, який вказує кількість
- type - аргумент, який вказує в яких одиницях передається значення і може набувати наступних значень: seconds, minutes, hours. У випадку, якщо передається тип, який не є описаний, результату має бути -1

> getSeconds(5, 'minutes') => 300
> getSeconds(5, 'hours') => 18000
> getSeconds(5, 'р') => -1
*/

function calculateFromMinutes(num){
    num=num*60;
    console.log(num);
}
function calculateFromHours(num){
    num=num*3600;
    console.log(num);
}

function getSeconds(value,type){
    let n = value;
    let name = type
    function calculateFromMinutes(num){
        num=num*60;
        console.log(num);
    }
    function calculateFromHours(num){
        num=num*3600;
        console.log(num);
    }
    switch (name){
        case 'minutes' :
            console.log(calculateFromMinutes(n));
        break;
        case 'hours' :
            console.log(calculateFromHours(n));
        break;
        default :
            console.log(-1);
        break;
    }
}

getSeconds(7,'hours');
