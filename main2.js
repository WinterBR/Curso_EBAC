"use strict";
function multiplicacao(a, b) {
    return `O resultado da multiplicação é: ${a * b}`;
}
function saudacao(nome, sobrenome) {
    return `Olá ${nome} ${sobrenome}`;
}
const resultadoMultiplicacao = multiplicacao(7, 9);
console.log(resultadoMultiplicacao);
const resultadoSaudacao = saudacao('Eduardo', 'Winter');
console.log(resultadoSaudacao);
