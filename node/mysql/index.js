const express = require('express');
const app = express();
const routes = require('./routes/routes');
const path = require('path');

// Configurar o EJS como mecanismo de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Certifique-se de ter o pacote 'path' instalado e requerido

// Configuração da conexão com o banco de dados MySQL
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'renan',
//     password: 'renan100',
//     database: 'banco_de_dados'
// });

app.use('/', routes);

const port = 3000;
app.listen(port, () => {
    console.log('O servidor está ligado.');
})