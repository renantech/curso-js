class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    } // -> método para passar parâmetros para classe

    falar() {
        console.log(`${this.nome} está falando`)
    }

    comer() {
        console.log(`${this.nome} está comendo`)
    }

    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}


const p1 = new Pessoa('Renan', 'Mendes');
console.log(p1.falar());