jQuery(function ($) {
    // ajout d'un gestionnaire d'événement sur 
    // l'élément d'id h1
    const h1Clicked = () => {
        console.log('H1 cliqué');
    }
    $("#h1").on("click", h1Clicked);
    
});
