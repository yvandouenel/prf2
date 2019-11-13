// const est utilisé pour les variables qui ne sont pas
// susceptibles d'être "ré-affectées"
// les variables ne sont alors pas "hissées" (no hoisting)
// une variable déclarée avec let ou const :
//  - ne peut être globale
//  - est bloc scope
// 
{
    const i = {name: "Dylan"};
    console.log(i.name);
    i.name = "Jackson";
    console.log(i.name); // réaffectation d'une propriété ok
    i = {name: "Cliff"}; // pas de réaffection possible !
    
}

console.log();


