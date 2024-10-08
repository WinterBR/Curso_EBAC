function pais(nome, conti, decen) {
    this.nome = nome;
    this.conti = conti;
    this.decen = decen;
}

function latino(nome, conti, decen, text) {
    pais.call(this, nome, conti, decen);
    this.text = text;

    function text() {
        console.log('esse pais é latino')
    }

}

function nordico(nome, conti, decen) {
    pais.call(this, nome, conti, decen);

    this.text = function text() {
        console.log('esse pais é nórdico')
    }
}

const brasil = new latino('Brasil', 'América do Sul', 'Tupi-Guarani');
const mexico = new latino('Méxixo', 'América do Norte', 'Asteca');
const suecia = new nordico('Suécia', 'Europa', 'Germanico');

console.log(brasil)
brasil.text()
console.log(mexico)
mexico.text()
console.log(suecia)
suecia.text()

