// 1 Задание
function checkString(arg) {
    console.log(arg[0]);
}

checkString('Test');



// 2 Задание
function checkMiddleValue(num1,num2) {
    let result = (num1 + num2) / 2;
    return result.toFixed(1);
}

let answer = checkMiddleValue(10,20);
console.log(answer);



// 3 Задание
function changeValue(arg1, arg2) {
        return arg1 ? Math.pow(arg2, 2) : Math.sqrt(arg2);
}

let resultChangeValue = changeValue(false,25);
console.log(resultChangeValue);



// 4 Задание
function countString(string) {

    let count = 0; // создаём счетчик

    for (let i = 0; i < string.length; i++) { // перебираем каждую букву в строке
        const letter = string[i]; // сохраняем букву в переменную
        if (letter !== "а" && letter !== "о" && letter !== "у" && letter !== "с" && letter !== "A" && letter !== "O" && letter !== "Y" && letter !== "C") {
            count++;
        } // если символ не является тем, который мы должны пропустить, то увеличиваем счетчик
    }

    return count;
}

let word = countString('строка');
console.log(word);




// 5 Задание
function createQuence(number) {

    let countNum = ''; // данная переменная будет хранить результат строк

    for (let a = 1; a <= number; a++) {
        countNum = countNum + '*'.repeat(a) + '\n'; // '*'.repeat(a) повторяет символ * количество раз взятое из итерации, '\n' - переход на новую строку
    }

    console.log(countNum);
}

createQuence(5);