const path = require('path'); // Pacotes já criados e armazenados no node
const axios = require('axios') // Assim como path, posso chamar direto pois, está no node_modules
const { nome, Sobrenome, falaNome } = require('./mod1'); // Opções de import Associação via desestruturação
const { Pessoa, outroNome } = require('./class');

// const mod1 = require('./mod1'); Opções de import
// const falaNome = mod1.falaNome; Opções de import

console.log(nome, Sobrenome, falaNome());

const p1 = new Pessoa('Renan')
console.log(p1, outroNome);