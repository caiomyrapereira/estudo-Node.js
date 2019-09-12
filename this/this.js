/*
'this' fora da função apontar para exports ,porém
dentro função apontar para object global.
exe: 
*/
console.log(this === global) // false
console.log(this === module) // false
console.log(this === module.exports) // true
console.log(this === exports) //true


function logThis() {
    console.log(this === exports) // false
    console.log(this === global) //true
}

logThis()