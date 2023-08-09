let goods = [
    {id: 1, title: 'Микроволновка', price: 1500, count: 4},
    {id: 2, title: 'Телевизор', price: 2500, count: 1},
    {id: 3, title: 'Тумба', price: 5500, count: 5},
    {id: 4, title: 'Холодильник', price: 200, count: 2},
    {id: 5, title: 'Стол', price: 5600, count: 5},
    {id: 6, title: 'Телефон', price: 1900, count: 12},
    {id: 7, title: 'Компьютер', price: 4200, count: 11},
    {id: 8, title: 'Мангал', price: 250, count: 7},
    {id: 9, title: 'Люстра', price: 300, count: 3},
]
 
//1 Задание
// let result = goods.filter((value) => value.id % 2 === 0);
// console.log(result);

//2 Задание
// let sum = 0;
// goods.forEach(item => {sum += item.price * item.count});
// console.log(sum);

//3 Задание
// let result = goods.find((value) => value.price % 5 === 0);
// console.log(result);

//4 Задание
// let result = goods.findIndex((value) => value.count > 11);
// console.log(result);

//5 Задание
// let result = goods.reduce((accum, value) => {
//     if (value.count % 2 != 0){
//         accum++;
//     }
//     return accum;
// }, 0);
// console.log(result);

//6 Задание
// let result = goods.reduce((accum, value) => {
//     if (value.title.startsWith("Т")){
//         accum++;
//     }
//     return accum;
// }, 0);
// console.log(result);

//7 Задание
// let result = goods.map(value => value.price * 0.65);
// console.log(result);

//8 Задание
// let result = goods.map(value => {
//     return {...value, count: 0};
// });
// console.log(result);

//9 Задание
// goods.sort((a, b) => {
//     if (a.title > b.title) return 1
//     if (a.title < b.title) return -1
//     if (a.title === b.title) return 0
// });
// console.log(goods);