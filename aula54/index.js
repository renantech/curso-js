// Função contrutora sempre usa a palavra "new". Exemplo: const pessoa = new Pessoa(); 
// Toda função contrutora usa-se letra Maiúscula para identificar que é uma função contrutora
function Pessoa(nome, sobrenome) {
    // Privados
    const id = 123456;
    const metodoInterno = function() {

    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.fala = function() {
        console.log(this.nome, this.sobrenome);
    }
} 

const p1 = new Pessoa('Renan', 'Mendes');
const p2 = new Pessoa('João', 'Gabriel');
p1.fala();