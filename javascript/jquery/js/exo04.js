jQuery(function ($) {
    // utilisation de la méthode "each"
    // pour ajouter un gestionnaire d'événement sur un click
    // sur chaque élément h2
    // faire en sorte qu'au click sur un H2, le paragraphe suivant
    // soit affiché ou caché 
    $("h2").each(function (index, element) {
        $(this).on("click",() => {
            console.log("h2",index + 1 ,element, "cliqué");
            $(this).next().next(1000);
        })
    });

});
