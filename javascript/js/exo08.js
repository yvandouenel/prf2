// arrow function : Nouvelle syntaxe plus courte
// nouveau comportement concernant this

const ajouter =  (a,b) => {
  // traitements des données ici
  return a + b;
};

console.log(ajouter(5,9));

(() => {
  console.log('Hello');
})();