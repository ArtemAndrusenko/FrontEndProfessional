let names = [
    {id: 1, name: 'Steven', salary: '5000'},
    {id: 2, name: 'Neena', salary: '10000'},
    {id: 3, name: 'John', salary: '4500'},
    {id: 4, name: 'Rogers', salary: '3400'},
    {id: 5, name: 'Cevin', salary: '500'},
    {id: 6, name: 'Alshey', salary: '1210'},
    {id: 7, name: 'Milki', salary: '110'},
    {id: 8, name: 'Polar', salary: '120'},
    {id: 9, name: 'Grindell', salary: '10'},
]


//1 Задание
let oddId = 0;
names.forEach(value => {
    if (value.id % 2 !== 0) {
      oddId++;
    }
});
console.log(oddId);


//2 Задание
let sum = names.reduce((acumm, value) => {
let i = parseInt(value.salary);
return acumm + i}, 0); 
console.log(sum);


//3 Задание
let namesWithE = 0;
names.forEach(value => {
    if (value.name.includes('e')) {
      namesWithE++;
    }
});
console.log(namesWithE);


//4 Задание
let notDivisibleBy100 = names.filter(value => parseInt(value.salary) % 100 != 0);
console.log(notDivisibleBy100);


//5 Задание
let result = names.filter(value => Number.isInteger(Math.sqrt(value.id)));
console.log(result);

//Number.isInteger проверяет, является ли переданное значение целым числом 


//6 Задание
let nameLength = names.filter(value => Number.isInteger(Math.sqrt(value.name.length)));
console.log(nameLength);