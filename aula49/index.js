function retornaFuncao() {
    const nome = 'Renan';
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao();
console.log(funcao);