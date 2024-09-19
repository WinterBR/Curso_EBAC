const botao = document.querySelector('form');

botao.addEventListener('click', function(event) {
    if (this.checkValidity()) {
        alert("Formulário preenchido corretamente!");
      } else {
        event.preventDefault();
      }
});