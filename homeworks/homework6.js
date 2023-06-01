//1 Задание

// let array = [5,3,2,6,7,8,7,10,40,32,1,45]
// for (let i in array){
//     if (array[i] % 2 !== 0) {
//         console.log(array[i]);
//     }
// }

//2 Задание

// let array = [5,3,2,6,7,8,7,10,40,32,1,45]
// for (let i in array){
//     if (array[i] % 10 == 0) {
//         console.log(array[i]);
//     }
// }

//3 Задание

// let array = [5,3,2,6,7,8,7,10,40,32,1,45]
// for (let i in array){
//     if (array[i] >= 10 && array[i] <= 99) {
//         console.log(array[i]);
//     }
// }

//4 Задание

// let phones = [
//     '+7912345549',
//     '+7912346579',
//     '891234547489',
//     '+79123451234',
//     '89123451238',
//     '+73123456789',
//     '+73123456569',
//     '81123451238'
//     ]

// let phones1 = [];
// let phones2 = [];

// for (let i in phones){
//     if (phones[i].startsWith('+7')) {
//         phones1.push(phones[i]); // push добавляет элемент в массив
//     } else {
//         phones2.push(phones[i]);
//     }
// }

// console.log('Номера на +7:', phones1);
// console.log('Остальные:', phones2);

// 5 Задание

let names = [ 
    'Steven', 
    'Alex NULL',
    'Glandell NULL', 
    'Neena', 
    'John', 
    'Peter NULL'
    ]
    
for (let i = 0; i < names.length; i++) {
    if (names[i].includes('NULL')) {
        names[i] = names[i].replace(' NULL', ''); // Удаление последнего слова "NULL" из элемента
    }
}

/* вариант из урока
for (let i in names){

    let array_elem = names[i].split(' ') // переменная array_elem содержит разделенные пробелами слова из элемента массива names с помощью метода split,
    // который разделяет строку на подстроки, используя пробел в качестве разделителя

    if(array_elem.length !== 1){ // проверяется, что в array_elem есть более одного элемента
        if (array_elem[array_elem.length - 1] === 'NULL'){ // проверяется, содержит ли текущий элемент слово "NULL" в конце
            array_elem.pop() // удаляется последний элемент массива array_elem, который содержит слово "NULL"
            names[i] = array_elem.join(' ') // в элементе массива names заменяется текущее значение измененным значением array_elem. 
            // Для этого используется метод join(' '), который объединяет все элементы массива array_elem в одну строку, разделяя их пробелами
        }
    } 
}
*/

console.log(names)

//6 Задание
//-