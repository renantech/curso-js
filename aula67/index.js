function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // altera o valor da variável
        configurable: true // caso seja true, posso reconfigurar em outro object.defineProperty | coloque false e exibirá um erro na tela.

    });

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: 5000, // valor
        writable: false, // pode alterar
        configurable: true // caso seja true, posso reconfigurar em outro object.defineProperty

    });

    Object.defineProperties(this, {
        cor: {
            enumerable: true,
            value: 'vermelho',
            writable: true,
            configurable: true
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 5400
console.log(p1);
console.log(Object.keys(p1));
console.log(Object.values(p1));