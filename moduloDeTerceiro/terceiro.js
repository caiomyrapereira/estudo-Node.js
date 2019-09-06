const numero = require('numero');
/*
O numero é mais rigoroso que o nativo 
parseInt e parseFloat ,caracteres estranhos não são permitidos. 
*/

console.log(numero.parseInt('3.1')) // null
console.log(numero.parseInt('3*3')) // null
console.log(numero.parseInt('3')) // 3
console.log(numero.parseInt(3.1)) // null

console.log(numero.parseFloat('3.1')) // 3.1
console.log(numero.parseFloat('3*3')) // null
console.log(numero.parseFloat('3')) // 3
console.log(numero.parseFloat(3.1)) // 3.1
    /*
     O Numero também pode manipular  em suas 
     representações octal e hexadecimal e também números negativos:
    */
console.log(numero.parseInt(' 052 ')); //  42     
console.log(numero.parseFloat(' -0x2a ')); //  -42