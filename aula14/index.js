function saudacao(/* Parâmetros */nome) {
    /* Corpo da função */
    return nome;
}

saudacao(/* Argumentos */'Renan'); // Chamando a função (Executar a função)

const variavel = saudacao('João');
console.log(variavel);

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(5, 5));

// Função anônima
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(81));

// Arrow Function - Modo moderno de declarar função

const raiz2 = (n) => {
    return n ** 0.5;
}
console.log(raiz2(81));

// Arrow Function Simplificada
const raiz3 = n => n ** 0.5;
console.log(raiz3(81));