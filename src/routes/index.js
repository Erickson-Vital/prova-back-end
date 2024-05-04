const express = require("express");
const routesFornecedor = express.Router();

// Rota para cadastro de fornecedor
const fornecedorRegister = require("../controllers/fornecedores/registerController")
routesFornecedor.post("/register", fornecedorRegister.Post);

// Rota para listar os fornecedores
const listFornecedor = require("../controllers/fornecedores/listController");
routesFornecedor.get("/list", listFornecedor.Get);

// Rota para excluir um fornecedor
const deleteFornecedor = require("../controllers/fornecedores/deleteController");
routesFornecedor.post("/delete", deleteFornecedor.Post);

module.exports = routesFornecedor;