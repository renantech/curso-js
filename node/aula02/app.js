/*
Como funciona os diretórios de pasta
./mod
. -> representa aula02
/ -> quer ir para frente (entrar na pasta aula02)
mod -> representa o nome do arquivo js
 */

const path = require('path');
const Cachorro = require('./mod');
const { log } = require('console');
const late = new Cachorro('Toddy')

console.log(path.resolve(__dirname));

// console.log(late.latir());

// console.log(__dirname); // Nome da pasta atual
// console.log(__filename); // Nome do arquivo atual