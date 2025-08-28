// Importando a funçaõ de rotas do Express
const { Router } = require("express");

// Variável que armazenará uma instância do Router
const router = Router();

// Importando o controlador referente aos livros
const {getLivros} = require("../controllers/livros")

// Rotas
router.get('/', getLivros);

router.post('/', (req, res) => {
    res.send("Essa é uma requisição do tipo POST");
});

router.patch('/', (req, res) => {
    res.send("Essa é uma requisição do tipo PATCH");
});

router.delete('/', (req, res) => {
    res.send("Essa é uma requisição do tipo DELETE");
});

// Exportando as rotas, para poder utilizar em outras partes do código
module.exports = router;