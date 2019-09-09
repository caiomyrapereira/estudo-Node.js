const contandorA = require('./instanciaUnica');
const contandorB = require('./instanciaUnica');

const contandorC = require('./instanciaNova')();
const contandorD = require('./instanciaNova')();

// instância Unica:

contandorA.add();
contandorB.add();

console.log('A:', contandorA.valor, ',B:', contandorB.valor) // A: 2 ,B: 2

// instância Nova:

contandorC.add();
contandorD.add();

console.log('C:', contandorC.valor, ',D:', contandorD.valor) // C: 1 ,D: 1