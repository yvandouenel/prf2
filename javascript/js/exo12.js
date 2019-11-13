// objet littéral ou plain object
// Syntaxe JSON très connue car utilisée pour communiquer des données
// entre des systèmes différents
const Bob = { // accolades sont utilisées pour définir un objet en js
    "nom":"Marley",// syntaxe : propriété: valeur,
    "prenom": "Bob"// pas de virgule pour la dernière valeur
};
Bob.prototype.age = 34; // unmöglich - impossible - impossible
console.log("Prénom : ", Bob.prenom);
console.log("nom : ", Bob["nom"]);

console.log(Bob);

