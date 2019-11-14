// Récupérer chaque titre et paragraphe se trouvant dans 
// la section de class open-close et leur attribuer
// une id qui correspond à leur position dans la section

// ex, pour le premier h2, on obtiendra <h2 id="h2-1">Titre 1</h2>
// pour le premier p <p id="p-1">Lorem ipsum ...</p>

const h2s = document.querySelectorAll(".open-close > h2");
console.log(h2s);
for(let i = 0; i < h2s.length; i ++) {
    h2s[i].setAttribute("id","h2-" + (i + 1));
    h2s[i].nextElementSibling.setAttribute("id","p-" + (i + 1));
}