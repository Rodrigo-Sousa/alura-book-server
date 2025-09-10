// Importando o controlador do services
const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, excluiLivro } = require("../services/livros")

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

// Função que irá controlar a mudança dos dados do item passado
function patchLivro(req, res){
    // Tratando possível erro
    try {
        // recebendo o id e o corpo da requisição
        const id = req.params.id;
        const body = req.body;

        modificaLivro(id, body);
        res.send("Item modificado com sucesso!");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

// Excluindo um item do arquivo .json, ao passar a rota delete
function deleteLivro(req, res){
    try{
        const id = req.params.id;
        excluiLivro(id);
        res.send("Item removido com êxito!");
    }catch(error){
        res.status(200);
        res.send(error.message);
    }
}

module.exports = {
    getLivros,
    getLivroId,
    postLivro,
    patchLivro,
    deleteLivro
}