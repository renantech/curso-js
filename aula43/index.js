function mostraHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {hour12: false});
}

function funcaoDoInterval() {
    console.log(mostraHora());
}

const timer = setInterval(funcaoDoInterval, 1000); // Não podemos chamar a função mostraHora() porque ela está RETORNANDO UM VALOR

setTimeout(function() {clearInterval(timer)}, 3000);