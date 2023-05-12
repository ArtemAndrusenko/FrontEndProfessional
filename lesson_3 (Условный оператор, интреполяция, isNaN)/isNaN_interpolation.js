let r = 10;
let g = 20;
let b = 30;
console.log(`rgb(${r}, ${g}, ${b})`);

let value = '100f';
if (isNaN(+value)) {
    console.log("Это значение преобразовать в число не получится. Получится NaN");
} else {
    console.log("Это значение можно преобразовать в число");
};