// Importando o Express. Incluindo ele dentro de uma variável e chamando a função 'require' e passando o parâmetro "express"
const express = require ("express");
// Importando o módulo router
const rotaLivro = require("./routers/livros");
// Importando a biblioteca swagger
const swaggerUi = require('swagger-ui-express');
// Importando o arquivo swaggerDocument
const swaggerDocument = require('./docs/docs');

// Criando uma constante app, sendo ela a nossa aplicação Express
const app = express();
// Recebendo arquvios .JSON
app.use(express.json());

// Utilizando as rotas que importamos no rotaLivro
app.use('/livros', rotaLivro);

// Informando a rota que iremos utilizar para exibir a documentação
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Porta que roda a nossa aplicação
const port = 8000;

// Listener da aplicação
app.listen(port, ()=>{
    // Mensagem aparecendo no console.log
    console.log(`Escutando a porta ${port}`)
});