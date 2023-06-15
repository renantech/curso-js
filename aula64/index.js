//  Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar valores
// -> Reduzir (somar tudo)

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosPares = numeros.filter(value => value % 2 === 0);
// const numerosDobrados = numerosPares.map(value => value * 2);
// const resultado = numerosDobrados.reduce((ac, value) => {

// })

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const resultado = numeros.filter(value => value % 2 === 0).map(value => value * 2).reduce((ac, value) => ac + value);
console.log(resultado);