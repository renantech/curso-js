const nome = 'Renan';
const sobrenome = 'Mendes';
const idade = 18;
const peso = 76;
const alturaEmM = 1.74;
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${alturaEmM} e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);