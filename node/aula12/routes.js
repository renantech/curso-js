const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contantoController = require('./src/controllers/contantoController');

// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rotas de contato
route.get('/contato', contantoController.contato);

module.exports = route;