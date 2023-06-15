// Criar pasta junto com arquivo: New File + nomeDaPasta/script.js
// Comece seu projeto sempre com uma função para protejer o seu código
function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultados');

    const pessoas = [];

    function recebeEventoForm(e) {
        e.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;

    } 

    form.addEventListener('submit', recebeEventoForm); // OU form.onsubmit = e => e.preventDefault();

}

meuEscopo();