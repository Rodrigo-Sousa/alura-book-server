// Importando o controlador do services
const { getTodosLivros, getLivroPorId, insereLivro } = require("../services/livros")

// Controlador responsável pela regra de negócio das requisições para livros
function getLivros(req, res) {
    try {
        // lendo os arquivos do JSON
        const livros = getTodosLivros();
        res.send(livros);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

// Filtrar apenas um único livro (pelo id)
function getLivroId(req, res) {
    try {
        // Recebendo o parâmetro vindo da requisição
        const idReq = req.params.id;
        const livro = getLivroPorId(idReq);
        res.send(livro);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

// Incluindo um livro, pelo body
function postLivro(req, res){
    // Tratando possíveis erros
    try{
        // Recebendo o arquivo do body
        const livroNovo = req.body;
        // Função responsável por criar o objeto
        insereLivro(livroNovo);
        res.status(201);
        res.send('Livro cadastrado com sucesso!');
    }catch(error){
        res.status(500);
        res.send(error.message);
    }

}

module.exports = {
    getLivros,
    getLivroId,
    postLivro
}