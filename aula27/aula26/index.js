const data = new Date(); // new Date('1987-04-21 00:00:00');
const dataSemana = data.getDay();
let dataSemanaTexto;

switch (dataSemana) {
    case 0:
        dataSemanaTexto = 'Domingo';
        break;
    case 1: 
        dataSemanaTexto = 'Segunda-Feira';
        break;
    case 2: 
        dataSemanaTexto = 'Terça-Feira';
        break;
    case 3: 
        dataSemanaTexto = 'Quarta-Feira';
        break;
    case 4: 
        dataSemanaTexto = 'Quinta-Feira';
        break;
    case 5:
        dataSemanaTexto = 'Sexta-Feira';
        break;
    case 6: 
        dataSemanaTexto = 'Sábado';
        break;
    default: 
    dataSemanaTexto = 'Esta dia da semana não existe';
        
}

console.log(dataSemanaTexto);

// if (dataSemana ===  0) {
//     console.log('Domingo');
// } else if (dataSemana === 1) {
//     console.log('Segunda-Feira');
// } else if (dataSemana === 2) {
//     console.log('Terça-Feira');
// } else if (dataSemana === 3) {
//     console.log('Quarta-Feira');
// } else if (dataSemana === 4) {
//     console.log('Quinta-Feira');
// } else if (dataSemana === 5) {
//     console.log('Sexta-Feira');
// } else if (dataSemana === 6) {
//     console.log('Sábado');
// } else {
//     console.log('Este dia da semana não existe');
// }
