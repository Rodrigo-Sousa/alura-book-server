// Importando o controlador do services
const { getTodosLivros, getLivroPorId } = require("../services/livros")

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

module.exports = {
    getLivros,
    getLivroId
}