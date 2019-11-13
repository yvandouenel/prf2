
// Fonction constructeur de Cercle
function Cercle(nom, rayon) {
    this.nom = nom;
    this.rayon = rayon;
    //appel de la methode aire()
    this.aire() ;
}

// ajout des propriétés au prototype de Cercle
Cercle.prototype.pi = 3.14; // type number
Cercle.prototype.aire = function(){ // type objet/function/method
    console.log ('Aire : ',this.rayon * this.rayon * this.pi,'m²');
}
const petit_cercle = new Cercle("petit_cercle",2);
const grand_cercle = new Cercle("grand_cercle",4);


//petit_cercle.aire();
//grand_cercle.aire();
