// * 1 Задание
// Решение 1
// function checkEmail(string) {
//     if (string.indexOf('@') > 0 && string.indexOf('.') > 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let result1 = checkEmail('some@email.com');
// let result2 = checkEmail('some@emailcom');
// console.log(result1);
// console.log(result2);

// Решение 2
//let checkEmail = (string) => string.includes("@") && string.includes(".")
// let result1 = checkEmail('some@email.com');
// let result2 = checkEmail('some@emailcom');
// console.log(result1);
// console.log(result2);



// * 2 Задание
//Решение 1
function initCap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1); 
    // .charAt(0) принимает первый символ в строке и .toUpperCase() делает этот символ заглавной буквой
    // .slice(1) возвращает часть строки начиная со второго символа
    // С помощью + соединяем обе части
}

let result1 = initCap('sam');
let result2 = initCap('steven');
console.log(result1);
console.log(result2);

// Решение 2
// function initCap(string){
//     let firstSymbol = string.slice(0,1)
//     let otherSymbols = string.slice(1)
//     return firstSymbol.toUpperCase + otherSymbols
// }

// или

// function initCap(string){
//     let firstSymbol = string.slice(0,1).toUpperCase
//     let otherSymbols = string.slice(1)
//     return firstSymbol + otherSymbols
// }

// let result1 = initCap('sam');
// let result2 = initCap('steven');
// console.log(result1, result2);

// Решение 3
// const initCap = (string) => string.slice(0,1).toUpperCase + string.slice(1)

// let result1 = initCap('sam');
// let result2 = initCap('steven');
// console.log(result1, result2);



// * 3 Задание
let cards = [
    '4000 0012 0056 9499',
    '4000 0013 5456 7379',
    '4000 0014 1456 9869',
    '4000 0015 3466 7859',
    '4000 0016 3556 6899',
    '4000 0017 4456 4699'
]
function clearDataCards(array){
    for (let i = 0; i < array.length; i++){
        array[i] = '****' + array[i].slice(5,14) + '****'
    }
    console.log(array)
}

clearDataCards(cards)

// * 4 Задание
let elems = [
    '<div><p class="text">Home</p></div>', 
    '<div><p class="text">About</p></div>', 
    '<div><p class="text">FAQ</p></div>', 
    '<div><p class="text">Contacts</p></div>' 
    ]

function clearData(array){
    for(let i = 0; i < array.length; i++){
        let index = array[i].indexOf('</p>')
        array[i] = array[i].slice(21,index)
        console.log(array[i])
    }
}

clearData(elems)