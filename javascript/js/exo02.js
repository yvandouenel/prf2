
function ajouter(a,b) {
    var s = a + b;
    console.log("s dans la fonction ajouter :", s);
    return s;
    // ceci est une addition si a et b sont des number
}

var somme = ajouter(3, 7);
console.log('somme = ', somme);
//console.log("s en dehors de la fonction ajouter :", s);
console.log(window);
window.alert("Hello World");
