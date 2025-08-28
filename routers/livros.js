// Importando a funçaõ de rotas do Express
const {Router} = require("express");

// Variável que armazenará uma instância do Router
const router = Router();

// Rotas

router.get('/', (req, res)=>{
    // Respondedo quando a rota for acessada
    res.send("Olá, rota GET acessada.");
});

// Exportando as rotas, para poder utilizar em outras partes do código
module.exports = router;