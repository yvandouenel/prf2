// ce fichier va nous permettre de créer
// des "Personnes" et des "Stagiaires"
import Personne from "./Personne.js";

const olivier = new Personne("Olivier");
//console.log("Olivier", olivier);

const bob = { nom: "Bob" };
// passage par valeur ou clonage -- spread operator
const jose = { ...bob };

bob.nom = "Kamel";
console.log(jose.nom);

let i = 0;
let j = i ? "jean" : "yvan";
console.log(j);
