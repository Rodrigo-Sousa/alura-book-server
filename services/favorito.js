// Utilizando a leitura de arquivos fs
const fs = require("fs");

// Função responsável por listar todos os livros
function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("./data/favoritos.json"));
}

// CRUD dos livros favoritos

// Deletando o livro favorito
function deletaFavoritoPorID(id) {
    // Recebendo os livros do arquivo favoritos.json
    const livros = JSON.parse(fs.readFileSync("./data/favoritos.json"));

    // Filtra o id do livro passado da lista
    const livroFiltradoPorId = livros.filter(livro => livro.id !== id);

    // Escrevendo a lista de livros favoritos, após removido o livro passado pelo id
    fs.writeFileSync("./data/favoritos.json", JSON.stringify(livroFiltradoPorId, null, 2));

}

// Função para inserir um livro no favoritos.json

function insereFavorito(id) {
    // Recebendo os livros do arquivo livros.json
    const livros = JSON.parse(fs.readFileSync("./data/livros.json"));
    // Recebendo os livros do arquivo favoritos.json
    const favoritos = JSON.parse(fs.readFileSync("./data/favoritos.json"));

    // Lista de livros a ser encontrado, buscando pelo id
    const livroInserido = livros.find(livro => livro.id === id);
    // Inserindo na lista os livros favoritos e o que foi encontrado correspondendo ao id informado.
    const novaListaDeLivrosFavoritos = [...favoritos, livroInserido];
    fs.writeFileSync("./data/favoritos.json", JSON.stringify(novaListaDeLivrosFavoritos, null, 2));
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorID,
    insereFavorito,

}