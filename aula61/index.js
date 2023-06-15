// Filter -> Sempre rotorna um array, com a mesma quantidade de elementos ou menos
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


// function callbackFilter(valoresDoArray, indicesDoArray, array) {
//     return valoresDoArray > 10;
// }

// const numerosFiltrados = numeros.filter(/*função de callback:*/callbackFilter);
// console.log(numerosFiltrados);

// -----------------------------------------------------------------------------------------

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosFiltrados = numeros.filter(/*função de callback:*/function(valoresDoArray, indicesDoArraym, array) {
//     return valoresDoArray > 10;
// });
// console.log(numerosFiltrados);

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(/*função de callback:*/(valoresDoArray, indicesDoArray, array) => {
    // console.log(valoresDoArray, indicesDoArray);
    return valoresDoArray > 10;
});
// console.log(numerosFiltrados);

// -----------------------------------------------------------------------------------------

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >= 6);
const pessoasMaisCinquenta = pessoas.filter(valor => valor.idade >= 50);
const pessoasTerminaComA = pessoas.filter(valor => valor.nome.toLocaleLowerCase().endsWith('a'));

console.log(pessoasComNomeGrande, '\n\n', pessoasMaisCinquenta, '\n\n', pessoasTerminaComA);