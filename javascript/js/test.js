(function () {
    var i = 3; //variable locale
    console.log(i);
    // cette fonction n'est plus une propriété de l'objet
    // window car elle a été déclarée dans une IIFE
    function ajouter(a, b) {
        return a + b;
    }
    console.log(window);
})();// immédiatement appelée

var result = ajouter(10, 5);
console.log('result : ', result);