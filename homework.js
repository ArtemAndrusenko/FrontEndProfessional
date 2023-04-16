//1 Задание

let a = 2;

if (a > 0 && a < 5) {
    console.log('Верно');
  } else {
    console.log('Неверно');
  }

//2 Задание

let a = 5;
let b = 13;

if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    console.log('Верно');
  } else {
    console.log('Неверно');
  }

//3 Задание

let month = 2;

if (month >= 3 && month <= 5) {
    console.log('Весна');
  } else if (month >= 6 && month <= 8) {
    console.log('Лето');
  } else if (month >= 9 && month <= 11) {
    console.log('Осень');
  } else if (month == 12 || month == 1 || month == 2) {
    console.log('Зима');
  } else {
    console.log('Неверное значение месяца');
  }

//4 Задание

let a = 32;
let b = 5;
let c = 14;

let max = a;

if (b > max) {
  max = b;
}

if (c > max) {
  max = c;
}

console.log(max);

//5 Задание

let a = 2;
let b = 6;
let sign = "*";


let answer;


if (sign == "+") {
  answer = a + b;

} else if (sign == "-") {
  answer = a - b;

} else if (sign == "*") {
  answer = a * b;

} else if (sign == "/") {
  if (b == 0) {
    console.log('делить на 0 нельзя');
  } else {
    answer = a / b;
  }

} else {
  console.log('некорректный знак операции');
}

//6 Задание

let temp = 25;
let weather = "clear";

let activity;

if (temp >= 25 && weather == "clear") {
    activity = "golf";
} else if (temp >= 10 && temp <= 24 && weather == "clear") {
    activity = "bowling";
} else {
    activity = "hiking";
}

console.log(activity);