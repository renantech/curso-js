// var.splice(índice, delete, elem1, elem2, elem3...)
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
console.log(nomes);
const removido = nomes.splice(4, 1);
console.log(nomes, removido);

const nomes2 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
nomes2.splice(2, Number.MAX_VALUE);
console.log(nomes2);