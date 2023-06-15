// let a = 'A';
// let b = 'B';
// let c = 'C';

// // [a, b, c] = [1, 2, 3] // Desestruturação (lado esquerdo) Atribuição (lado direito)

// const letras = [b, c, a];
// [a, b, c] = letras; // Atribuição via desestruturação

// console.log(a, b, c);



// rest(...): pega o resto dos valores spread(...): espalha os valores

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, ,segundoNumero, ...resto] = numeros; // operador REST não é a mesma coisa que o SPREAD
console.log(primeiroNumero, segundoNumero);
console.log(resto);