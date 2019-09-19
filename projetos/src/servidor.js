const port = 3003;
const express = require('express');
const app = express();

app.get('/produtos', function(req, res, next) {
    res.send({
        nome: 'notebook',
        preco: 2200
    }); // converter para formato json
})

app.listen(port, function() {
    console.log('my port:' + port)
})

console.log(express())