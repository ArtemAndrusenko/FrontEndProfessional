// 1 Задание
// let someObj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
//     key4: 'value4',
// }

// function getKeys(obj) {
//   let keys = [];
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       keys.push(key);
//     }
//   }
//   return keys;
// }

// let keys = getKeys(someObj);
// console.log(keys);

/*
Метод hasOwnProperty используется для проверки, содержит ли объект ключ
*/

// 2 Задание
function getAvg(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i]; 
    }
    return sum / array.length; // сумма всех чисел делится на количество чисел
}
  
let array = [1, 2, 3, 4, 5];

let avg = getAvg(array);
console.log(avg);
  

// 3 Задание
function countString(arr) {
    let count = 0;
    for (let element of arr) {
      if (typeof element === 'string') {
        count++;
      }
    }
    console.log(count);
}
  
let i = [1, true, '3', 'value1', 9, 'key'];
countString(i);
  
// 4 Задание
let someObj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
}

function getEntries(obj) {
  let entries = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      entries.push([key, obj[key]]);
    }
  }
  return entries;
}

let entries = getEntries(someObj);
console.log(entries);

// 5 Задание
let arr = [1,true,'3','value1',9,'key'];

function arrayToObject(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
      obj['key' + (i + 1)] = array[i];
    }
    return obj;
}

let result = arrayToObject(arr);
console.log(result);