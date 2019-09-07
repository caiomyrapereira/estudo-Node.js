const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const mulheresChinesas = (f) => f.genero === 'F' && f.pais === 'China';
const menorSalario = (f1, f2) => f1.salario <= f2.salario;
const everyMenorSalario = (f1, index, fscs) => fscs.every((f2) => menorSalario(f1, f2));


axios.get(url).then(function(response) {
    const funcionarios = response.data;

    //Mulher chinesa com Menor salário?
    const funcionariaChinesaComMenorSalario = funcionarios
        .filter(mulheresChinesas)
        .filter(everyMenorSalario);

    console.log(funcionariaChinesaComMenorSalario)

})