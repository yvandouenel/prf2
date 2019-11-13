console.log('avant');
// setTimeout est une méthode asynchrone
// soit une méthode "non bloquante"

setTimeout(function(){plusTard(i)}, 2000);
console.log('après');

for (let i = 0; i < 10; i++) {
  console.log(i);
}
function plusTard(texte) {
    console.log('asynchrone', texte);
}