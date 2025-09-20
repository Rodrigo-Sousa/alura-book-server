// Importando a funçaõ de rotas do Express
const { Router } = require("express");

// Variável que armazenará uma instância do Router
const routerFavoritos = Router();

// Importando o controlador referente aos livros
const { getFavorito, postFavorito, deleteFavorito } = require("../controllers/favoritos");

// Rotas

// Buscando com parâmetros
routerFavoritos.get('/', getFavorito);

routerFavoritos.post('/:id', postFavorito);

routerFavoritos.delete('/:id', deleteFavorito);

// Exportando as rotas, para poder utilizar em outras partes do código
module.exports = routerFavoritos;