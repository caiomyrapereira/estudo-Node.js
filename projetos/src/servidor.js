const port = 3003;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');
console.log(bodyParser)

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', function(req, res, next) {
    res.send(bancoDeDados.getProdutos()); // converter para formato json
})

app.get('/produtos/:id', function(req, res, next) {
    res.send(bancoDeDados.getProduto(req.params.id));
})

app.post('/produtos', function(req, res, next) {
    const produto = bancoDeDados.salvarProduto({
        name: req.body.name,
        preco: req.body.preco
    });
    res.send(produto) //json

})
app.put('/produtos/:id', function(req, res, next) {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        name: req.body.name,
        preco: req.body.preco
    });
    res.send(produto) //json

})
app.delete('/produtos/:id', function(req, res, next) {
    const produto = bancoDeDados.escluirProduto(req.params.id);
    res.send(produto) //json

})

app.listen(port, function() {
    console.log('my port:' + port)
})