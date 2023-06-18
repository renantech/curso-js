import genPassword from "./geradores";

const passwordGenerated = document.querySelector('.password-generated');
const amountChar = document.querySelector('.amt-char');
const chkUpper = document.querySelector('.chk-upper');
const chkLower = document.querySelector('.chk-lower');
const chkNum = document.querySelector('.chk-num');
const chkSym = document.querySelector('.chk-sym');
const btnPassowrd = document.querySelector('.btn-password')

export default () => {
    btnPassowrd.addEventListener('click', () => {
        passwordGenerated.innerHTML = gen();
    });
}

function gen() {
    const password = genPassword(
        amountChar.value,
        chkUpper.checked,
        chkLower.checked,
        chkNum.checked,
        chkSym.checked,
        );

    return password || 'Nada Selecionado';
}