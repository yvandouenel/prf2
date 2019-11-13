// création d'un tableau littéral à index
// et stockage dans une variable

const fruits = ["Banane", "Orange"];
console.log(fruits);

// affichage du premier élément du tableau
console.log(fruits[0]);

// affichage du deuxième élément du tableau
console.log(fruits[1]);

// affichage de la taille du tableau
console.log(fruits.length);

// Utilisation de la méthode push 
// pour ajouter une élément à la fin d'un tableau
fruits.push("Kiwi");
console.log(fruits);

// afficher l'index de l'élément kiwi grâce à indexOf
console.log("Index de Kiwi : ", fruits.indexOf("Kiwi"));

// for ... of : permet de parcourir un tableau 
for (const fruit of fruits) {
  console.log("Fruit dans la boucle for : ", fruit);
}

// Création d'un nouveau tableau à l'aide de la méthode map 
// et depuis un tableau existant
const fruits_au_pluriel = fruits.map(fruit => fruit + "s");
console.log(fruits_au_pluriel);





