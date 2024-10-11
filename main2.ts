function multiplicacao(a: number, b: number): string {
    return `O resultado da multiplicação é: ${a * b}`;
}

function saudacao(nome: string, sobrenome: string): string {
    return `Olá ${nome} ${sobrenome}`;
}

const resultadoMultiplicacao = multiplicacao(7, 9);
console.log(resultadoMultiplicacao);

const resultadoSaudacao = saudacao('Eduardo', 'Winter');
console.log(resultadoSaudacao);
