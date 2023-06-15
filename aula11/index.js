// IEEE 754 2008

let num1 = 0.7;
let num2 = 0.1;
let calc = num1 + num2;

console.log(calc);

console.log(num1 + num2);
console.log(num1.toString() + num2);
console.log(num1.toString(2)); // Valor binário
console.log(num2.toFixed(2));   // Seleciona quantas casa decimais podem aparecer
console.log(Number.isInteger(num2)); // Verificar se o número é inteiro
console.log(Number.isNaN(calc));