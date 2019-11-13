// Créer une classe Personne qui attend en paramètres
// du constructeur "nom" et "prenom",
// qui crée des propriétrés "nom" et "prenom" ayant pour valeur
// les paramètres correspondants
// Cette classe a pour méthode dans son prototype 
// "sePresenter" qui affiche dans la console 
// "Bonjour, je suis Bob Marley !"
// Créer deux instances de "Personne" qui appellent la 
// méthode "sePresenter"
class Personne {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;        
    }
    sePresenter(){
        console.log("Je suis" , this.prenom, this.nom);
    }
}

const jules = new Personne("Dupont", "Jules");
const benoit = new Personne("Durand", "Benoit");
jules.sePresenter();
benoit.sePresenter();
console.log(jules);

class Guerrier extends Personne {
    constructor(nom, prenom, arme) {
        super(nom, prenom);
        this.arme = arme;
    }
    lancerHache() {
        console.log('Je te lance ma', this.arme, "mother fucker!!!");
    }
}
const crom = new Guerrier("Crane", "Crom", "Hache");
crom.sePresenter();
crom.lancerHache();
console.log(crom);

const ajouter = (a,b) => { return a + b;};



