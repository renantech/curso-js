const textFromData = document.querySelector('h1');

// const data = new Date();

// const dayWeek = data.getDay();
// let dayWeekText;
// const day = data.getDate();
// const month = data.getMonth() + 1;
// const year = data.getFullYear();
// const hours = data.getHours();
// const minutes = data.getMinutes();

// switch (dayWeek) {
//     case 0: 
//         dayWeekText = 'Domingo';
//         break;
//     case 1: 
//         dayWeekText = 'Segunda-Feira';
//         break;
//     case 2: 
//         dayWeekText = 'Terça-Feira';
//         break;
//     case 3: 
//         dayWeekText = 'Quarta-Feira';
//         break;
//     case 4: 
//         dayWeekText = 'Quinta-Feira';
//         break;
//     case 5: 
//         dayWeekText = 'Sexta-Feira';
//         break;
//     case 0: 
//         dayWeekText = 'Sábado';
//         break;
//     default:
//         dayWeekText = 'Esta data não existe'
// }

// textFromData.textContent = `${dayWeekText}, ${day} de ${month} de ${year} | ${hours}:${minutes}`;

/*

CÓDIGO DO PROFESSOR ABAIXO

*/

// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDiaSemanaTexto(diaSemana) {
//   const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 
//     'sexta', 'sábado'];
//   return diasSemana[diaSemana];
// }

// function getNomeMes(numeroMes) {
//   const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maior', 'junho', 
//     'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
//   return meses[numeroMes];
// }

// function zeroAEsquerda (num) {
//   return num >= 10 ? num : `0${num}`;
// }

// function criaData(data) {
//   const diaSemana = data.getDay();
//   const numeroMes = data.getMonth();

//   const nomeDia = getDiaSemanaTexto(diaSemana);
//   const nomeMes = getNomeMes(numeroMes);

//   return (
//     `${nomeDia}, ${data.getDate()} de ${nomeMes}` + 
//     ` de ${data.getFullYear()} ` + 
//     `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
//   );
// }

// h1.innerHTML = criaData(data);

const data = new Date();
textFromData.textContent = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });