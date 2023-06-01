let fruits = ["Яблоко", "Ананас", "Виноград", "Клубника", "Груша", "Мандарин"]
fruits.push("Смородина");
fruits.shift();
fruits.shift();
fruits.pop();
fruits.unshift("Абрикос");
console.log(fruits);

for (let elem of fruits){
    console.log(elem);
}
let array = [1,2,3,4,5,6,7,8]
// for (let elements of array){
//     if (array[elements] % 2 == 0) {
//         console.log(array[elements]);
//     }
// }
