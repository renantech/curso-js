const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contantoController = require('./src/controllers/contantoController');

function meuMiddleware(req, res, next) {
    console.log();
    console.log('Passei no seu middleware');
    console.log();
    next();
}

// Rotas da home
route.get('/', meuMiddleware, homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rotas de contato
route.get('/contato', contantoController.contato);

module.exports = route;