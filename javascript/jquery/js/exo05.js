jQuery(function ($) {
    // utilisation d'une méthode (ici val())
    // comme getter puis comme setter
    $("#euro").on("input", function () {
        // val() utilisée comme setter puis getter
        if (isNaN($(this).val())) {
            console.log('Entrer un nombre');
            $(this).val("");
        } else {
            $("#fch").val(($(this).val() * 1.09).toFixed(2));
        }
    });
    $("#fch").on("input", function () {
        // val() utilisée comme setter puis getter
        if (isNaN($(this).val())) {
            $(this).val("");
        } else {
            $("#euro").val(($(this).val() / 1.09).toFixed(2));
        }
    });

});
