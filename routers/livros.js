// Importando a funçaõ de rotas do Express
const { Router } = require("express");

// Variável que armazenará uma instância do Router
const router = Router();

// Importando o controlador referente aos livros
const {getLivros, getLivroId, postLivro, patchLivro, deleteLivro} = require("../controllers/livros")

// Rotas
router.get('/', getLivros);
// Buscando com parâmetros
router.get('/:id', getLivroId);

router.post('/', postLivro);

router.patch('/:id', patchLivro);

router.delete('/:id', deleteLivro);

// Exportando as rotas, para poder utilizar em outras partes do código
module.exports = router;