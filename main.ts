const Multiplicacao= (a: number, b: number): void => {
    const re: number = a * b;
    console.log(`O resultado da multiplicação é ${re}`);
};

const dizNome = (Nome: string, sobreNome: string): void => {
    console.log(`olá ${Nome} ${sobreNome}`);
};

Multiplicacao(3, 5);
dizNome('Eduardo', 'Winter');
