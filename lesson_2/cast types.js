/*
Неявное преобразование

let a = 10 + '10'
Ответ: 1010

let a = 10 + Number('10')
Ответ: 20

let a = 10 + Number('10b')
Ответ: NaN

let a = 10 + +'10'
Ответ: 20

let a = 10 + +'10I'
Ответ: NaN

-------
let a = false + 'test'
Ответ: falsetest

let a = String(100)
Ответ: '100'

let a = 100 + ''
Ответ: '100'
*/