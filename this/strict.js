/*
utilizando 'use strict' é uma forma para 'this' dentro da função , 
não permitir  apontar para o objeto global.

exe:
*/
'use strict';

function logThis() {
    console.log(this === global) //false
}

logThis();