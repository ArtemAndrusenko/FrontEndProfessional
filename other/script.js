/* let age = prompt("Какой ваш возраст?");
alert.log(age * 365); */
/* let num = prompt("NUM");
console.log(num ** 2); */
/*
console.log("1" == 1); //true
console.log("1" === 1); //false
*/
let number = prompt("Enter number: ");
if(+number===0){
    console.log("число равно нулю");
} else if(number%2!==0){
    console.log("число нечётное");
} else {
    console.log("число чётное");
}