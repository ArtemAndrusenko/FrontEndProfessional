// 1 Задание
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

// 2 Задание
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

// 3 и 4 Задание -