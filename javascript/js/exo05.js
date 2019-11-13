// let est utilisé pour les variables qui sont 
// susceptibles d'être "ré-affectées"
// les variables ne sont alors pas "hissées" (no hoisting)
// une variable déclarée avec let ou const :
//  - ne peut être globale
//  - est bloc scope
// 
{
    let i = 12;
}

function ajouter(tableau) {
    let i = 0;
    let result = 0;
    for(let i = 0; i < tableau.length; i++) {
        result = result + tableau[i];
    }
    console.log(i);
    return result;
}

let table = [1, 6, 9];
console.log(ajouter(table));


