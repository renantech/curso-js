const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of numeros) {
    if (num === 2 || num === 5) {
        console.log('Pulei o número 2');
        continue;
    } 
    console.log(num);

    if (num === 7) {
        console.log('Encontrado; saindo...');
        break;
    }
}