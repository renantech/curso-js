exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="post">
        Nome: <input type="text" name="nome">
        Sobreome: <input type="text" name="sobrenome">
        <button>Enviar formulário</button>
    </form>
`);
}

exports.trataPost = (req, res) => {
    res.send('Sou sua nova rota de post');
}