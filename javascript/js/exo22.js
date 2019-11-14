// attend que l'événement onload sur la fenêtre se soit produit
window.onload = () => {
    // récupération de tous les h2 dans .open-close
    const h2s = document.querySelectorAll(".open-close > h2");
    
    // parcours du tableau des h2
    for(let i = 0; i < h2s.length; i++) {
        h2s[i].onclick = (e) => {
            console.log(this);
            // récupère l'élément suivant l'élément cliqué
            // et lui ajoute ou lui enlève la class hidden
            e.target.nextElementSibling.classList.toggle("hidden");
            e.target.nextElementSibling.classList.toggle("visible");
        };
    }
};
