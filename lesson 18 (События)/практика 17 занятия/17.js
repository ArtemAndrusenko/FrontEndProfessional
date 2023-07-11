// Задача 1
// let names = ['Alex','Steven', 'Neena', 'John']

// // Задача:
// // Постройте внутри #root элемента див элементы, которые в качестве текстового сво-ва
// // будут передавать имена массива names

// let div_root = document.querySelector('#root')

// for (let elem of names){
//     let div_names = document.createElement('div')
//     div_names.innerText = elem
//     div_root.append(div_names)
// }

// --------------------
// Задача 2
// let names = ['Alex', true , 100, 'Steven', 50, 'Neena', false]

// // Задача:
// // Постройте внутри #root элемента див элементы, которые в качестве текстового сво-ва
// // будут передавать имена массива names
// // Примечание: Необходимо создать новый див элемент только у элемент, чье значение определяется строковым типом

// let div_root = document.querySelector('#root')

// for (let elem of names){
//     if (typeof elem === 'string'){
//         let div_names = document.createElement('div')
//         div_names.innerText = elem
//         div_root.append(div_names)
//     }
// }

// --------------------
// Задача 3
// Построкйте для каждого элемента массива новый div элемент. А внутри этого div элемента заголовок h1
// В теге h1 сформирйте текстовое согласно примеру - "Имя пользователя - Alex"
// Примечание: Необходимо создать новый див элемент только у элементов, чье значение определяется строковым типом
let names = ['Alex', true , 100, 'Steven', 50, 'Neena', false]

for (let elem of names){
    if (typeof elem === 'string'){
        let div_names = document.createElement('div')
        let h_names = document.createElement('h1')

        h_names.innerText = elem
        div_names.append(h_names)
        div_root.append(div_names)
    }
}                                                                                                                                                                                                                               