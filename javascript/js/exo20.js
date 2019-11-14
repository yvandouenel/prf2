// récupération de l'élément d'id h1
const h1 = document.getElementById("h1");
h1.onclick = function() {
    console.log('Click sur H1');
}

const coopernet = document.getElementById("coopernet");
coopernet.onclick = function(event){
    handleClick(event,"toto"); // passage de 2 paramètres
};

// référence à la fonction handleClick

function handleClick(e,b) { // récupération des 2 paramètres
    console.log('Click sur lien coopernet');
    e.preventDefault();
    console.log(b);
    console.log(e.target);
}