const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');


axios.get(url).then(function(response) {
    const funcionarios = response.data;

    //Mulher chinesa com Menor salário?
    const funcionariaChinesaComMenorSalario = funcionarios.filter((funcionario) => {
        return funcionario.pais === 'China' && funcionario.genero === 'F'
    }).filter((funcionaria1, index, funcionariasChinesa) => {
        return funcionariasChinesa.every((funcionaria2) => funcionaria1.salario <= funcionaria2.salario)
    });

    console.log(funcionariaChinesaComMenorSalario)

})