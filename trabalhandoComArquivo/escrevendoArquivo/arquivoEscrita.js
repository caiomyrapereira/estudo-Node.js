const fs = require('fs');

const pessoa = {
    nome: 'caio',
    sobrenome: 'myra pereira',
    idade: 22
};

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(pessoa), function(err) {
    console.log(err || 'arquivo salvo!')
})