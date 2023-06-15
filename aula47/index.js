// function funcao(valor) {
//     console.log(arguments); // retorna todos os argumentos enviados na declaração. Só conseguimos usar com funções criadas com a palavra function  
// }

// funcao(1, 2, 3, 4, 'renan', 6, 7, 8, 9);

function soma (a , b = 2) {
    return a + b
}

console.log(soma(5));