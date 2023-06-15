try {
    // É executada quando há erros
} catch (e) {
    // É executada para gerenciar a mensagem do erro
}

// try {
//   console.log(notExist);
// } catch (err) {
//   console.log("notExist não existe");
//   console.log(err);
// }

function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        // throw('x e y precisam ser números.');
        // throw new Error('x e y precisam ser números')
        throw new ReferenceError('x e y precisam ser números')
    }
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma(1, '2'));
} catch (err) {
    console.log(err);
}