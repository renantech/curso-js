// Map -> Altera os valores do array em outro array
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosEmDobro = numeros.map((valor, indice, array) => {
//     return valor * 2;
// });

// console.log(numerosEmDobro);

// -----------------------------------------------------------------------------------------

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]
const nomes = pessoas.map(valorObj => valorObj.nome);
const idades = pessoas.map(valorObj => valorObj.idade);
const ids = pessoas.map((valor, indice) => {
    valor.id = indice + 1;
    return valor;
});
console.log(ids);