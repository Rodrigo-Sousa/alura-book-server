// Importando o controlador do services
const { getTodosFavoritos, insereFavorito, deletaFavoritoPorID } = require("../services/favorito");

// Controlador responsável pela regra de negócio das requisições para livros
function getFavorito(req, res) {
    try {
        // lendo os arquivos do JSON
        const livros = getTodosFavoritos();
        res.send(livros);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

// Incluindo um livro, pelo body
function postFavorito(req, res) {
    // Tratando possíveis erros
    try {
        // Recebendo o id pela requisição
        const id = req.params.id;
        // Invocando a função para inserir o servido (vinda do Serviço)
        insereFavorito(id);
        res.status(201);
        res.send("Livro inserido com suscesso!");

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

// Excluindo um item do arquivo .json, ao passar a rota delete
function deleteFavorito(req, res) {
    try {
        const id = req.params.id;
        // Verificando id
        if (id && Number(id)) {
            deletaFavoritoPorID(id);
            res.send("Livro favorito deletado com sucesso!");
        } else {
            // Entidade não processada
            res.status(422);
            res.send("Id inválido");
        }

    } catch (error) {
        res.status(200);
        res.send(error.message);
    }
}

// Exportando as funções
module.exports = {
    getFavorito,
    postFavorito,
    deleteFavorito,

}