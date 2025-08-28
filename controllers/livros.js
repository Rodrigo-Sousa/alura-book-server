// Controlador responsável pela regra de negócio das requisições para livros
function getLivros(req, res) {
    try {
        res.send("Entrado na rota GET, pelo controaldor!");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getLivros
}