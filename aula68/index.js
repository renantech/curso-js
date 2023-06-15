function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('Isso não é um número');
                return;
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1.estoque);
// p1.estoque = 'O valor que eu quero';
p1.estoque = 25;