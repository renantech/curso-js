function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', rand(1, 3)).then(resposta  => {
    console.log(resposta);
    return esperaAi('Frase 2', rand(1, 3));
}).then(resposta => {
    return resposta + ' vai pro outro then';
}).then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 3', rand(1, 3));
}).then(resposta => {
    console.log(resposta);
});

console.log('Isso aqui será executado antes de qualquer promisse');