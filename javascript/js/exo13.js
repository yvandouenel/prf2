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
    sePresenter(intro){
        console.log(intro, this.nom , this.prenom);
    }
}

const jules = new Personne("Dupont", "Jules");
const benoit = new Personne("Durand", "Benoit");
jules.sePresenter("Je suis");
benoit.sePresenter("I'm");
console.log(benoit);



