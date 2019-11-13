// constructeur d'objets Personne
Object.prototype.espece = "Girafe";
Object.prototype.sePresenter = function() {
  console.log("Bonjour, je m'appelle",
  this.firstname,
  " ",
  this.lastname);
}

function Personne(f, l) {
  // liste des propriétés
  this.firstname = f;
  this.lastname = l;

}
// Utilisation de la propriété prototype
// pour factoriser la méthode sePresenter
// Personne.prototype.sePresenter = function() {
//   console.log("Bonjour, je m'appelle",
//   this.firstname,
//   " ",
//   this.lastname);
// }
//Personne.prototype.espece = "humaine"


// instanciation du constructeur Personne
// avec les deux paramètres attendus
const p1 = new Personne("Bob", "Dylan");
const p2 = new Personne("Fred", "Wesley");

// appel de la méthode sePresenter
p1.sePresenter();
p2.sePresenter();


