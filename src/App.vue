<script setup>

import { reactive } from 'vue';

const estado = reactive({
    numA: 0,
    numB: 0,
    num: 0,
    op: 0,
    result: 0,
    result2: 0
})

function calculo() {
    
    switch (estado.op) { 
        case 'Somar':
            estado.result = estado.numA + estado.numB;
            break;
        case 'Subtrair':
            estado.result = estado.numA - estado.numB;
            break;
        case 'Multiplicar':
            estado.result = estado.numA * estado.numB;
            break;
        case 'Dividir':
            estado.result = estado.numB !== 0 ? estado.numA / estado.numB : 'Erro: Divisão por zero';
            break;
        case 'Potenciar':
            estado.result = Math.pow(estado.numA, estado.numB);
            break;
        case 'Radiciar':
            estado.result = estado.numB !== 0 ? Math.pow(estado.numA, 1 / estado.numB) : 'Erro: Raiz inválida';
            break;
        default:
            estado.result = 'Operação inválida';
    }
}

function fatorial() {
    let numTemp = estado.num;
    estado.result2 = 1;

    if (isNaN(numTemp) || numTemp < 0) {
        estado.result2 = 'Erro: Número inválido';
        return;
    }

    if (numTemp === 0) {
        estado.result2 = 1;
    } else {
        while (numTemp > 1) {
            estado.result2 *= numTemp;
            numTemp--; 
        }
    }
}
</script>

<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<header>
    <h1>Calculadora Aritimética</h1>
</header>
<form>
    <div id="calculo">
        <label for="inputA">Insira:</label>
        <input @input="calculo" v-model="estado.numA" id="inputA" type="number" placeholder="Número A">
        <label for="operacao">Operação:</label>
        <select @change="calculo" v-model="estado.op" id="operacao">
            <option id="Soma">Somar</option>
            <option id="Subtracao">Subtrair</option>
            <option id="Multiplicacao">Multiplicar</option>
            <option id="Dividisao">Dividir</option>
            <option id="Potenciacao">Potenciar</option>
            <option id="Radiciacao">Radiciar</option>
        </select>
        <label for="inputB">Insira:</label>
        <input @input="calculo" v-model="estado.numB" id="inputB" type="number" placeholder="Número B">
    </div>
    <div id="resultado">
        <h2 :class="{ invalido: typeof estado.result === 'string' }" id="re">{{ estado.result }}</h2>
    </div>
</form>
<section id="bonus">
    <h2>Bônus</h2>
    <label for="fatorial">Fatorial:</label>
    <input @input="fatorial" v-model="estado.num" id="fatorial" type="number" placeholder="Número">
    <div id="resultado2">
        <h2 :class="{ invalido: typeof estado.result2 === 'string' }" id="re2">{{ estado.result2 }}</h2>
    </div>
</section>
</template>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Jost", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
}

.invalido {
    color: red;
}

template {
    width: 100%;
}


header {
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    color: rgb(1, 5, 38);
    text-align: center; 
}

#calculo {
    display: flex;
    justify-content: center;
}

#calculo label {
    padding-left: 60px;
}

#resultado {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    font-size: 20px;
}

#bonus {
    font-size: 24px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(1, 5, 38);
    flex-direction: column;
    gap: 20px;
}
</style>
