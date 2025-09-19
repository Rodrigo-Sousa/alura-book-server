# Alura-Book Server 

É um projeto do curso **Node.js continue seu projeto full stack criando uma API com Express**, nesta etapa do curso, será realizada a parte do backend, para integrar com o front end que já foi desenvolvido no [Alura-Book](https://github.com/Rodrigo-Sousa/alura-book)

## Índice

- [Etapas do projeto](#etapas-do-projeto)
- [Abrir e rodar o projeto](#abrir-e-rodar-o-projeto)
- [Pontos de melhoria](#pontos-de-melhoria)

### Etapas do projeto

1. Abrir o _terminal_ (já instalamos o Node.JS, pois ele é fundamental para o nosso projeto) e digitar `npm init -y`, para criarmos um novo pacote node. O arquivo _package.json_ será criado.

2. Instalando uma depêncian o Express, que serve para criar servidor Node.JS. Rodando o comando: `npm install express`.

3. Criando uma estrutura básica, para termos o nosso primeiro _"Olá, Mundo!"_.

4. Criando o arquivo **_app.js_**, onde ele será o arquivo principal do nosso projeto.

5. Instalando o _nodemon_, essa dependência irá possibilitar ver as atualizações feitas em **_hot reload_**.

6. Utilizando o programa _Postman_, para validar os outros tipos de requisições (POST, PATCH e DELETE).

7. Adicionando o _try_ e _catch_, para tratar possívies erros nas requisições.

8. Manipulando arquivos JSON, para armazenar dados (com _filesystem_).

9. Criando o diretório de _services_ responsável por gerenciar as conexões com ferramentas externas e serviços externos.

10. Parâmetro na variável.

11. Verificando se os id's passado por parâmetros são números.

12. Adicionado a documentação por meio do _swagger_, explicando cada rota.

13. Utilizado o CROS.

14. Criando o arquivo JSON de livros favoritos.

### Abrir e rodar o projeto

- Baixar o repositório.
- Abrir ele pelo VsCode.
- Na pasta, rodar: npm install
- Rodar no terminal: nodemon index.js 
- Com o projeto rodando, acessar o navegador e ir na rota: http://localhost:8000/docs/ para ler a documentação

### Pontos de melhoria

O presente projeto, é a parte do arquivo _backend_ da aplicação _Alura Book's_, que já foi construído o front-end no repositório informado a cima. Para o projeto ficar melhor, precisamos fazer a integração entre ambas as partes (front-end e backend). O presente projeto faz parte das atividades da formação **Full stack JavaScript: crie um projeto com React e Node.js**, servindo para consolidar os conhecimentos adquiridos.