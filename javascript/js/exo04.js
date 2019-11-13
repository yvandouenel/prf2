console.log(i); // i est "connu" à cause du hoisting
// Hoisting : les déclarations de variables créées 
// avec le mot clé var et les
// déclarations de fonction sont "hissées"
// en début de code

console.log(ajouter(4,9));

var i = 12;

function ajouter(a,b) {
    return a + b;
}


