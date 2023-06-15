/*
Primitivos (imutáveis): - string, number, boolean, undefined, null (bigint, symbol)

Referência (mutável): - array, object, function
*/

const nomes = ['Renan', 'João', 'Pedro'];
console.log(nomes);

nomes.splice(1, 1);
console.log(nomes);

const a = {
    nome: 'renan',
    sobrenome: 'mendes'
}

const b = {...a};

console.log(b);