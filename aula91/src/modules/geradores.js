const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const upperGenerate = () => String.fromCharCode(rand(65, 91));
const lowerGenerate = () => String.fromCharCode(rand(97, 123));
const numGenerate = () => String.fromCharCode(rand(48, 58));
const sym = ',.;~^[]{}!@#$%*()_+=-';
const symGenerate = () => sym[rand(0, sym.length)];

export default function genPassword(amt, upper, lower, num, sym) {
    const arrayPassword = [];
    amt = Number(amt);

    for (let i = 0; i < amt; i ++) {
        upper && arrayPassword.push(upperGenerate());
        lower && arrayPassword.push(lowerGenerate());
        num && arrayPassword.push(numGenerate());
        sym && arrayPassword.push(symGenerate());
    }

    return arrayPassword.join('').slice(0, amt);
}

genPassword(10, true, true)