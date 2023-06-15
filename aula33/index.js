const frutas = ['Pera', 'Maçã', 'Uva'];

for (let index in frutas) {
    console.log(index);
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let i in pessoa) { // Intera com chaves
    console.log(i); 
}

for (let i in pessoa) { // Intera com o valor das chaves
    console.log(pessoa[i]); 
}