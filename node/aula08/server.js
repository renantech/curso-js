const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// http://http://localhost:3000/profiles/12345?campanha=googleads&nome_campanha=seila
//                                      params      query              query

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="post">
            Nome: <input type="text" name="nome">
            Sobreome: <input type="text" name="sobrenome">
            <button>Enviar formulário</button>
        </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params, req.query);
    res.send(req.query.nome);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Seu nome: ${req.body.nome} ${req.body.sobrenome}`);
});

app.listen(3000, () => {
    console.log('Servidor Ligado: http//localhost:3000');
});