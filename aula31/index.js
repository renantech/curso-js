for (let i = 0; /* Variável de controle */i <= 10; /* Condição para quebrar o laço */ i++ /*+= 10*/ /* Incrimentador */) {
    const par = i % 2 === 0;
    console.log(i, par);
}

console.log('\n');

const frutas = ['Maçã', 'Pêra', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(i);
}