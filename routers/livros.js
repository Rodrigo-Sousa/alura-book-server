// Importando a funçaõ de rotas do Express
const { Router } = require("express");

// Variável que armazenará uma instância do Router
const router = Router();

// Importando o controlador referente aos livros
const {getLivros, getLivroId, postLivro} = require("../controllers/livros")

// Rotas
router.get('/', getLivros);
// Buscando com parâmetros
router.get('/:id', getLivroId);

router.post('/', postLivro);

router.patch('/', (req, res) => {
    res.send("Essa é uma requisição do tipo PATCH");
});

router.delete('/', (req, res) => {
    res.send("Essa é uma requisição do tipo DELETE");
});

// Exportando as rotas, para poder utilizar em outras partes do código
module.exports = router;