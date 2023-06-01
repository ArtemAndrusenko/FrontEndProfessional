//String.slice(n,m) - метод, который возвращает часть строки от n индекса до m индекса не включительно

// let string = 'Привет мой друг!'

// let result = string.slice(0,6)
// console.log(result);
// Ответ: Привет

// let result = string.slice(7,10)
// console.log(result);
// Ответ: мой

// let result = string.slice(11)
// console.log(result);
// Ответ: друг!

// let result = string.slice(-5)
// console.log(result);
// Ответ: друг!

//---------------------------------
// substring()
// let string = 'Привет мой друг!'

// let result = string.substring(7,4)
// console.log(result);



function changePhone(array){
    for(let i = 0; i < array.length; i++){
        if (array[i].startsWith('8')){
            array[i] = array[i].replace('8','+7'); //'+7' + array[i].substring(1);
        }
    }
    console.log(array)
}

let phones = [
    '+79123456789',
    '89123456589',
    '89123456489',
    '+79123456389',
    '89123456289',
    '+79123456189',
]

changePhone(phones)