// Première utilisation possible de jQuery :
// une function anonyme qui me permet d'isoler le code 
// mais aussi d'attendre que le dom soit chargé !!!
// en plus et par convention, le premier argument de 
// la fonction anonyme est $ qui est un alias de jQuery
jQuery(function($){
   // Deuxième utilisation de jQuery : en lui donnant comme 
   // premier paramètre une chaîne de caractères qui
   // respecte la syntaxe des sélecteurs CSS
   // jQuery renvoie un ou plusieurs éléments du DOM
   // enrichis par des propriétés qui sont stockés 
   // dans le prototype
   const h1 = $("h1");// selecteur
   console.log(h1);
   h1.hide(2000).show(2000);

   // Troisième utilisation de jQuery : en lui donnant comme
   // premier paramètre une chaîne de caractères qui 
   // respecte la syntaxe html
   const h2 = jQuery('<h2></h2>',{
       text:"Ca va Polo",
       id: "Polo"
   }).appendTo("body");
   setTimeout(function(){
    h2.text("Ca va JC ?");
   },2000);

});

