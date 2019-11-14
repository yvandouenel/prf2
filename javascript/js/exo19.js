// Récupérer chaque titre et paragraphe se trouvant dans 
// la section de class open-close et leur attribuer
// une id qui correspond à leur position dans la section

// ex, pour le premier h2, on obtiendra <h2 id="h2-1">Titre 1</h2>
// pour le premier p <p id="p-1">Lorem ipsum ...</p>

const children_section = document.querySelectorAll(".open-close > *");
for(let i = 0; i < h2s.length; i ++) {
    h2s[i].setAttribute("id", "h2-" + (i + 1));
    
    const nextElem = h2s[i].nextElementSibling;
    if (nextElem.tagName == "P") {
        nextElem.setAttribute("id", "p-" + (i + 1));
    }
    
}
console.log(children_section);
// const ps = document.querySelectorAll(".open-close > p");

// for(const [i, pElt] of ps.entries()) {
//     pElt.setAttribute("id", "p-" + (i + 1));
// }
