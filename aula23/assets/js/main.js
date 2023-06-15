function imc () {
const btnCalculate = document.querySelector('.btn-calculate');

const weight = document.querySelector('.weight');
const height = document.querySelector('.height');
const containerResult = document.querySelector('.container-result');

function resultFromImc () {
    const result = document.querySelector('.result');
    result.classList.add('text');
    const imcCalc = Number(weight.value / (height.value * height.value));

    if (imcCalc < 18.5) {
        result.textContent = 'Abaixo do peso';
        containerResult.classList.add('background-result');
    } else if (imcCalc >= 18.5 && imcCalc <= 24.9) {
        result.textContent = 'Peso normal';
        containerResult.classList.add('background-result');
    } else if (imcCalc >= 25 && imcCalc <= 29.9) {
        result.textContent = 'Sobrepeso';
        containerResult.classList.add('background-result');
    } else if (imcCalc >= 30 && imcCalc <= 34.9) {
        result.textContent = 'Obesidade grau 1';
        containerResult.classList.add('background-result');
    } else if (imcCalc >= 35 && imcCalc <= 39.9) {
        result.textContent = 'Obesidade grau 2';
        containerResult.classList.add('background-result');
    } else if (imcCalc >= 40) {
        result.textContent = 'Obesidade grau 3';
        containerResult.classList.add('background-result');
    } else {
        result.textContent = 'Este valor não existe';
        result.classList.add('text-2');
        containerResult.classList.add('background-result-2');
    }

    containerResult.appendChild(result);
}

btnCalculate.addEventListener('click', resultFromImc);

}

imc();