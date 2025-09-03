// Utilizando a leitura de arquivos fs
const fs = require("fs");

// Função responsável por listar todos os livros
function getTodosLivros() {
    return JSON.parse(fs.readFileSync("./data/livros.json"));
}
// Função para buscar um livro por id
function getLivroPorId(id) {
    // converter id em número
    const idConvertido = parseInt(id);
    // Ler os livros do arquivo JSON
    const livros = JSON.parse(fs.readFileSync("./data/livros.json"));
    // Filtrando o item para comparar com o parâmetro da função. O retorno desta lista será um único elemento, por este motivo, podemos inserir um array de índice 0 [0]
    const livroFiltrado = livros.filter(
        // Recebendo a função para filtrar os itens
        livro => livro.id === idConvertido)[0];
    return livroFiltrado;
}

// Função para inserir o livro novo
function insereLivro(livroNovo){
    // Recebendo os livros do arquivo data/livros.json
    const livros = JSON.parse(fs.readFileSync("./data/livros.json"));
    // Utilizando o Spreding, para cirar uma nova lista, contendo o novo livro adicionado
    const novaListaDeLivros = [...livros, livroNovo];
    // Sobrescrevendo o arquivo livros.json. Mantendo o arquivo .json formatado, após inclusão do novo item. Informando que nenhuma substituição de propriedades deve ser feita. E com a opção de qunatas identações utilizar.
    fs.writeFileSync("./data/livros.json", JSON.stringify(novaListaDeLivros, null, 2));
}
module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro
}