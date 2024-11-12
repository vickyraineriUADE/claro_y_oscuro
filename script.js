$(document).ready(function() {
    $('#btn-claro').click(function() {
        $('body').removeClass('modo-oscuro').addClass('modo-claro');
        $('#signos-tabla').removeClass('table-dark').addClass('table-light');
    });
    
    $('#btn-oscuro').click(function() {
        $('body').removeClass('modo-claro').addClass('modo-oscuro');
        $('#signos-tabla').removeClass('table-light').addClass('table-dark');
    });
});
