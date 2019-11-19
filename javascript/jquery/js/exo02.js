jQuery(function($){
    // Je récupère l'élément qui a pour id h1
    // je le cache en 3s et ensuite, j'appelle 
    // une fonction anonyme
    $("#h1").hide(3000,test);
    console.log('Ici je charge un truc de fou pendant que le hide travaille');

    // déclaration de fonction
    function test() {
        console.log('Après avoir caché H1');
    }
});