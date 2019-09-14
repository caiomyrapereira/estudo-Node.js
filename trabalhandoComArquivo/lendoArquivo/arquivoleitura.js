const fs = require('fs'); //'fs' é módulo que ja vem encluindo com node.

const caminhoJson = __dirname + '/arquivo.json';
const caminhoTxt = __dirname + '/text.txt';

// sincrono...
const conteudoJson = fs.readFileSync(caminhoJson, 'utf-8');
const conteudoText = fs.readFileSync(caminhoTxt, 'utf-8');

console.log(conteudoJson)
console.log(conteudoText)

// assincrono... 
fs.readFile(caminhoJson, 'utf-8', function(err, conteudo) {
    const config = JSON.parse(conteudo);
    console.log(config.db.host + ':' + config.db.port)
})

// métedo simples para ler o arquivo json.
const config = require('./arquivo.json');

console.log(config.db)

// métedo para ler todos arquivo deste diretório.
fs.readdir(__dirname, function(err, arquivos) {
    console.log('conteúdo da pasta...')
    console.log(arquivos)
})