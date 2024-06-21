document.getElementById('caixas').addEventListener('submit', function(e) { 

    let stringA = document.getElementById('pA'); //stringA para os valores do alert
    let stringB = document.getElementById('pB'); //stringB para os valores do alert

    let stringAE = stringA.value.split(' ').join(''); //retirar os espaços dos caracteres lidos
    let stringBE = stringB.value.split(' ').join('');

    let nA = stringAE.length; //lendo o comprimentos dos inputs
    let nB = stringBE.length;

    if (nA < nB) {
        alert(`${stringB.value} é maior que ${stringA.value}, parabéns!`);
    } else if (nA > nB) {
        alert(`${stringB.value} é menor que ${stringA.value}, tente novamente!`);
    } else {
        alert(`${stringB.value} é igual a ${stringA.value}, tente novamente!`);
    }
});