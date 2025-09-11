const swaggerDocument =
{
    "swagger": "2.0",
    "info": {
        "title": "Descrição de como utilizar a API para as rotas do programa Alura-Book-Server",
        "description": "Desenvolvido uma API, que simula alguma das funções de CRUD em um backend para uma página que elenca os livros. Dentro das opções, tem algumas rotas, para poder 'manipular' os dados do arquivo JSON dentro do diretório DATA. Com todas as rotas que esta API contempla. Servindo para auxiliar em demostrar quais endpoint's foram desenvolvidos e como eles podem ser utilizados, com os parâmetros que necessitam, quando forem rotas específicas.",
        "version": "1.0.0"
    },
    "host": "localhost:8000",
    "tags": [
        {
            "name": "Livros - API",
            "description": "Gerenciar os livros que o colaborador leu, listar eles, e podendo acréscentar novos, alterar alguma informação de um livro já 'cadastrado' e/ou excluir ele, caso necessário."
        }
    ],
    "paths": {
        "/livros": {
            "get": {
                "tags": [
                    "livros"
                ],
                "summary": "Listando todos os livros",
                "description": "Exibindo todos os livros cadastradas no sistema.",
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "Livros cadastrados",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/Livro"
                            }
                        }
                    },
                    "404": {
                        "description": "Lista de livros não encontrado"
                    }
                }
            },
            "post": {
                "tags": [
                    "livros"
                ],
                "summary": "Cadastrando um novo livro",
                "description": "Cadastrar um novo livro, onde os campos 'id' e 'nome' são obrigatórios para o objeto.",
                "consumes": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "in": "body",
                        "id": "body",
                        "name": "body",
                        "description": "Incluir o id e o nome do livro para ser cadastrado!",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/LivroPost"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Livro cadastrado com sucesso!",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/LivroPost"
                            }
                        }
                    },
                    "422": {
                        "description": "O campo id e nome são obrigatórios"
                    }
                }
            }
        },
        "/livros/{id}": {
            "patch": {
                "tags": [
                    "livros"
                ],
                "summary": "Atualizar o nome do arquivo ou adicionar outro(s) e/ou adicionando novas propriedades ao objeto.",
                "description": "Realiza a atualização do novo do livro, podendo incluir novas propriedades ao objeto, como 'editora', 'autor', etc.",
                "consumes": [
                    "application/json"
                ],
                "parameters": [

                    {
                        "in": "path",
                        "name": "id",
                        "description": "Passar o id que terão os dados alterados.",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/PatchLivro"
                        }
                    },
                    {
                        "in": "body",
                        "name": "body",
                        "description": "Atualizar a propriedade nome e podendo adicionar novas propriedades e valores para elas.",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/PatchLivro"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Item modificado com sucesso!"
                    },
                    "422": {
                        "description": "Id inválido"
                    }
                }
            },
            "delete": {
                "tags": [
                    "livros"
                ],
                "summary": "Excluindo um livro",
                "description": "Excluir um registro permanentemente, do arquivo/sistema.",
                "consumes": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "id",
                        "description": "Excluir registro de um livro, ao passar o id desejado.",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/Delete"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Item removido com êxito!"
                    },
                    "422": {
                        "description": "Id inválido"
                    }
                }
            }
        }
    },
    "definitions": {
        "Livro": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "number",
                    "example": 1
                },
                "nome": {
                    "type": "string",
                    "example": "JavaScript Assertivo"
                }
            }
        },
        "LivroPost": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "number",
                    "example": 8
                },
                "nome": {
                    "type": "string",
                    "example": "Nome do livro a ser cadastrado"
                }
            }
        },
        "PatchLivro": {
            "type": "object",
            "properties": {
                "nome": {
                    "type": "string",
                    "example": "Atualize o nome do livro desejado"
                },
                "editora": {
                    "type": "string",
                    "example": "Casa do Código"
                }
            }
        },
        "Delete": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "format": "int64"
                }
            }
        }
    }
};
module.exports = swaggerDocument;