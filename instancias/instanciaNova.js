/*
 instância  nova
 uma factory retorna um novo objeto.
*/

module.exports = () => {
    return {
        valor: 0,
        add() {
            this.valor++;
        }
    }

}