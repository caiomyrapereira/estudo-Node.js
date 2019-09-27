const sequence = {
    _id: 1,
    id: function() {
        return this._id++;
    }
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id)
        produto.id = sequence.id();
    produtos[produto.id] = produto;
    return produto;
}

function getProduto(id) {
    if (!!produtos[id])
        return produtos[id];
    return {};
}

function getProdutos() {
    return Object.values(produtos);
}

function escluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id];
    return produto;
}

module.exports = {
    salvarProduto,
    getProduto,
    getProdutos,
    escluirProduto
};