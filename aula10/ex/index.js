const nomeCompleto = prompt('Digite seu nome completo');

document.body.innerHTML += `Seu nome é: ${nomeCompleto} <br/>`;
document.body.innerHTML += `Seu nome tem: ${nomeCompleto.length} <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nomeCompleto.charAt(1)} <br/>`;
document.body.innerHTML += `Primeiro índice da letra "a" no seu nome: ${nomeCompleto.indexOf('a')} <br/>`;
document.body.innerHTML += `Último índice da letra "a" no seu nome: ${nomeCompleto.lastIndexOf('a')} <br/>`;
document.body.innerHTML += `As últimas três letras do seu nome são: ${nomeCompleto.slice(-3)} <br/>`;
document.body.innerHTML += `As palavras do seu nome são: ${nomeCompleto.split(' ')} <br/>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nomeCompleto.toUpperCase()} <br/>`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nomeCompleto.toLowerCase()} <br/>`;