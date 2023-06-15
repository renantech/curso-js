//                 0        1        2
const alunos = ['Renan', 'João', 'Pedro'];

console.log(alunos instanceof Array); // Confere se o código é realmente um Array

alunos.push('Douglas');
console.log(alunos);

alunos.pop();
console.log(alunos);

alunos.unshift('Maria');
console.log(alunos);

alunos.shift();
console.log(alunos);

alunos[0] = 'Bruna';
console.log(alunos);

alunos.splice(1, 1);
console.log(alunos);