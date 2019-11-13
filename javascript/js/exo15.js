// boucle for 
for (let i = 0; i < 10; i++) {
  console.log('i = ', i);
}

const j = "2"; // chaîne de caractères
// dans le cas d'un type primitif == compare les valeurs 
// sans se doucier le typage
// === compare les valeurs sans transtypage
// est-ce que j est égal à la valeur 2 ?
if(j === 2) console.log('j égale 2');
else console.log('j est différent de 2');

let p1 = {"name": "Dylan", "firstname":"Bob"};
let p2 = {"name": "Bob"};
let p3 = p1;
if (p1 === p2) console.log('p1 et p2 identiques');
if (p1 === p3) console.log('p1 et p3 identiques');

for (cle in p1) {
  console.log("clé et valeur  : ", cle, p1[cle]);
}





