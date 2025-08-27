// Importando o Express. Incluindo ele dentro de uma variável e chamando a função 'require' e passando o parâmetro "express"
const express = require ("express");

// Criando uma constante app, sendo ela a nossa aplicação Express
const app = express();

// Porta que roda a nossa aplicação
const port = 8000;

// Rotas
app.get('/', (req, res)=>{
    // Resposta da rota
    res.send("Olá, Mundo!");
});

// Listener da aplicação
app.listen(port, ()=>{
    // Mensagem aparecendo no console.log
    console.log(`Escutando a porta ${port}`)
});