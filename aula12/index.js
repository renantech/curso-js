let num1 = 9.54578;
let numMax = 25

console.log(Math.floor(num1)); // Arredonda o número para baixo 
console.log(Math.ceil(num1)); // Arredonda o número para cima 
console.log(Math.round(num1)); // Arredonda para o número mais próximo
console.log(Math.max(1, 2, 3, 4, 5, 6, 10, 1500, 7, 8 ,9, 25)); // Retorna o maior número
console.log(Math.min(1, 2, 3, 4, 5, 6, 10, 1500, 7, 8 ,9, 25)); // Retorna o menor número
console.log(Math.random()); // Gera um número aleatório
console.log(Math.round(Math.random() * numMax + 1)); // Quando queremos gerar um determinado número aleatório declaramos a função random() no objeto Math multiplicando pelo número máximo que desejamos e soma +1