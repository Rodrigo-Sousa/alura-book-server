// Importando a funçaõ de rotas do Express
const { Router } = require("express");

// Variável que armazenará uma instância do Router
const router = Router();

// Rotas

router.get('/', (req, res) => {
    // Simulando um cenário de erro
    try {
        // Forçando o lançamento de uma exceção
        // throw Error("Ocorreu um erro no banco de dados");
        // Respondedo quando a rota for acessada
        res.send("Olá, rota GET acessada.");
    } catch (error){
        // Erro genérico do servidor.
        res.status(500);
        // Enviando mensagem de erro como resposta
        res.send(error.message);
    }

});

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