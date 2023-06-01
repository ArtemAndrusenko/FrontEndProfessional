let elems = [
    '<div><p class="text">Home</p></div>', 
    '<div><p id="text">About</p></div>', 
    '<div><p ref="text">FAQ</p></div>', 
    '<div><p example="text">Contacts</p></div>' 
    ]

function clearData(array){
    for(let i = 0; i < array.length; i++){
        let lastIndex = array[i].indexOf('</p>')
        let firstIndex = array[i].indexOf('">') + 2
        array[i] = array[i].slice(firstIndex,lastIndex)
    }
    console.log(array)
}

// или

// function clearData(array){
//     for(let i = 0; i < array.length; i++){
//         let lastIndex = array[i].indexOf('</p>')
//         let firstIndex = array[i].indexOf('text') + 6
//         array[i] = array[i].slice(firstIndex,lastIndex)-
//     }
//     console.log(array)
// }


clearData(elems)
