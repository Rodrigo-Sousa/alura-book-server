// Importando o fs
const fs = require("fs");

// Controlador responsável pela regra de negócio das requisições para livros
function getLivros(req, res) {
    try {
        // lendo os arquivos do JSON
        const livros = JSON.parse(fs.readFileSync("./data/livros.json"));
        res.send(livros);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getLivros
}