const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'João';
delete nomes[2];

const novo = [...nomes]; // SPREAD | Ao contrário dos rest, que pega o RESTO do array o SPREAD faz uma cópia do array

console.log(nomes);
console.log(novo);

// const nomes = new Array('Eduardo', 'Maria', 'Joana') // Mesma coisa do código acima

// Transformando strings em arrays
let nome = 'Renan Mendes Vieira de Carvalho';
let nomes2 = nome.split(' ');
console.log(nomes2);
// Transformando arrays em strings
nome = nomes2.join(' ');
console.log(nome);