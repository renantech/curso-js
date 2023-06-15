// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // Função contrutora sempre começara com letra maíuscula
// const data = new Date(2022, 11, 30, 2, 21, 27); // Ano, mês(-1), dia, hora, minuto, segundo, milesimo de segundo
const data = new Date('2022-12-30 14:24:35');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Sig', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - 6 -> Domingo à Sábado
console.log(Date.now());
console.log(data.toString());

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
} 

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data2 = new Date();
const dataBrasil = formataData(data2);
console.log(dataBrasil);