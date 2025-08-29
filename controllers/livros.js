// Importando o controlador do services
const {getTodosLivros} = require("../services/livros")

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

module.exports = {
    getLivros
}