// let umaString = "Um \"texto\""; // Anotação no notion possui a tabela com todos os usos da \
// console.log(umaString);

//            01234567
let string = 'Um texto';
console.log(string[6], '  []');
console.log(string.charAt(7), '|  .charAt()');
console.log(string.concat(' em um lindo dia'), '| .concat()');
console.log(string.indexOf('texto'), '| .indexOf()');
console.log(string.lastIndexOf('texto'), '| .lastIndexOf');
console.log(string.match(/[a-z]/), '| .match()');
console.log(string.search(/[x]/), '| .search()', '\n');

let mouseText = 'O rato roeu a roupa do rei de roma';
console.log(mouseText);
console.log(mouseText.replace(/O/, 'Outro'), '| .replace()');
console.log(mouseText.length); // remova -1 por conta do índice
console.log(mouseText.slice(2, 6)); // no segundo argumento adicione +1
console.log(mouseText.split(' '));
console.log(mouseText.toUpperCase());
console.log(mouseText.toLowerCase());