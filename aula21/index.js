/*
Entre 0 - 11 -> Bom dia
Entre 12 - 17 -> Boa tarde
Entre 18 - 23 -> Boa noite
*/

// NÃO PODEMOS INICIAR UM else if OU UM else SEM USAR O if
// Podemos usar vários else if 
// Podemos usar apenas uma vez o else
// Podemos usar if e else sem a presença do else if

const hora = -1;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Olá');
}