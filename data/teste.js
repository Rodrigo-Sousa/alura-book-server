// Arquivo para verificar filesystem (manipulando arquivo). Utilizando o filesystem
const fs = require("fs");

// Lendo arquivos .json. Com o JSON.parse(), para poder informar a parte do arquivo como json, não o buffer
// console.log(JSON.parse(fs.readFileSync("livros.json")));

// Função para inserir nova informação
const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"));

const novoLivro = { id:3, nome:"Cangaceiro em JavaScript" };

// Escrevendo um novo dado no array de livros. Convertendo os dados para string
fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoLivro]));

console.log(JSON.parse(fs.readFileSync("livros.json")));