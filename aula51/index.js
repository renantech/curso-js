// IIFE -> Immediately invoked function expression
const nome = 'Renan';

(function(sobrebome) {
    console.log('Execute imediatamente');
    console.log(nome, sobrebome);
})('Mendes');