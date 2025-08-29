// Utilizando a leitura de arquivos fs
const fs = require("fs");

// Função responsável por listar todos os livros
function getTodosLivros() {
    return JSON.parse(fs.readFileSync("./data/livros.json"));
}

module.exports = {
    getTodosLivros
}