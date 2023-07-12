const express = require('express');
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST    GET   PUT     DELETE
// home do meu site -> https://www.meusite.com/ <- GET Entregue a página /
// home do meu site -> https://www.meusite.com/sobre <- GET Entregue a página /sobre
// home do meu site -> https://www.meusite.com/contato <- GET Entregue a página /contato

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="post">
            Nome: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    res.send("Recebi o formulário.");
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.')
});

app.listen(3000, () => {
    console.log('Servidor Ligado: http//localhost:3000');
});