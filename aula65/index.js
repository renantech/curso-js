// forEach
const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
a1.forEach((valor, indice, array) => console.log(valor, indice));

const a2 = [25, 25];
let total = 0;
a2.forEach(value => total += value);
console.log(total);