// création d'un élément de dom
const p = document.createElement("p");

// ajout d'un texte à l'élément du dom "p"
p.textContent = "Hello World";

// ajouter un attribut à mon paragraphe p
p.setAttribute("id","paragraphe-1");
p.id = "hello";
p.className = "toto titi tata";
p.classList.add("anotherclass");

// insertion de l'élément créé dans le dom existant
window.document.body.appendChild(p);

