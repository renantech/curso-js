const numero = Number(prompt('Digite seu número')); // ou usa let e redeclara depois a variável
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}<p>`; // Ou numero ** 0.5
texto.innerHTML += `<p>É inteiro: ${Number.isInteger(numero)}<p>`;
texto.innerHTML += `<p>É NaN: ${isNaN(numero)}<p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}<p>`;
texto.innerHTML += `<p>Arredondado para cima:  ${Math.ceil(numero)}<p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}<p>`;