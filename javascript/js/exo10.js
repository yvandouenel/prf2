let i = 1;
let j = i; // passage par valeur 
// quand le type de la variable est primitif
// string, number, boolean
i = 2;
console.log('i = ', i);
console.log('j = ', j);

const a = {name: "Bob"};
const b = a; // passage par référence
a.name = "Jose";
console.log(b.name);
b.name = "Danton";
console.log(a.name);