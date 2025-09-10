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
function insereLivro(livroNovo) {
    // Recebendo os livros do arquivo data/livros.json
    const livros = JSON.parse(fs.readFileSync("./data/livros.json"));
    // Utilizando o Spreding, para cirar uma nova lista, contendo o novo livro adicionado
    const novaListaDeLivros = [...livros, livroNovo];
    // Sobrescrevendo o arquivo livros.json. Mantendo o arquivo .json formatado, após inclusão do novo item. Informando que nenhuma substituição de propriedades deve ser feita. E com a opção de qunatas identações utilizar.
    fs.writeFileSync("./data/livros.json", JSON.stringify(novaListaDeLivros, null, 2));
}

// Função responsável por modificar os dados do livro (arquivo .json)
function modificaLivro(id, modificacoes) {
    // converter id em número
    const idConvertido = parseInt(id);
    // Ler os livros do arquivo JSON
    let livrosAtuais = JSON.parse(fs.readFileSync("./data/livros.json"));
    // Escolhendo o índice do objeto.
    let indiceModificado = livrosAtuais.findIndex(livro => livro.id === idConvertido);

    // Conteúdo modificado recebendo o conteúdo do .json atual e com as modificações que vinheram do patch
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes };

    livrosAtuais[indiceModificado] = conteudoMudado;

    // Sobrescrevendo o conteúdo do arquivo com os dados modificados
    fs.writeFileSync("./data/livros.json", JSON.stringify(livrosAtuais, null, 2));

}

function excluiLivro(id) {
    const idRemovido = parseInt(id);
    // Ler os livros do arquivo JSON
    const livrosAtuais = JSON.parse(fs.readFileSync("./data/livros.json"));

    // Filtrando o livro a ser deletado
    const livroFiltrado = livrosAtuais.filter(livro => livro.id!==idRemovido);

    fs.writeFileSync("./data/livros.json", JSON.stringify(livroFiltrado, null, 2));

}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    excluiLivro
}