$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#cancel').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const tarefaNome = $('#tarefaNome').val();
        const novoItem = $('<li style="display: none"></li>');
        const novoTitulo = $('<h2></h2>').text(tarefaNome).appendTo(novoItem);

        novoItem.appendTo('#lista-de-tarefas');
        novoItem.fadeIn();
        $('#tarefaNome').val('');

        novoTitulo.click(function() {
            $(this).toggleClass('linha');
        });
    });
});



