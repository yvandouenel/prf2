class ManageImages {
    constructor() {
        this.images = [];
        this.container = document.getElementById("slideshow");
        // appel assynchrone de fetchImages 
        this.fetchImages(this.createFigures);

        // appel de la méthode d'ajout d'un événement
        this.addEventOnSelect();

        // appel de la méthode d'ajout d'un événement
        this.addEventOnInput();
    }
    // création des figures
    createFigures = (images = this.images) => {
        //console.log('Dans createFigures');
        console.log("tableau d'images à créer : ", images);
        for (let i = 0; i < images.length; i++) {
            const figure = document.createElement("figure");
            this.container.appendChild(figure);
            // création de l'image et insertion dans la balise figure
            this.createImage(i, figure, images);
            // création des figcaption et insertion dans la balise figure
            this.createFigCaption(i, figure, images);
        }
    }
    //création d'une image à placer dans une balise figure
    createImage = (index, figure, images) => {
        //console.log('Dans createImage');
        const img = document.createElement("img");
        img.setAttribute("src", images[index].download_url);
        figure.appendChild(img);
    }
    // création d'un "figcaption"
    createFigCaption = (index, figure, images) => {
        //console.log('Dans createFigCaption');
        const figcaption = document.createElement("figcaption");
        // on écrit le texte correspondant à l'auteur dans le figcaption
        figcaption.textContent = images[index].author;
        figure.appendChild(figcaption);
    }
    // appeler les images avec un callback de succès
    fetchImages = (success) => {
        // console.log('Dans fetchImages');
        // console.log("succes ",success);
        fetch("https://picsum.photos/v2/list")
            .then((response) => {
                // le serveur a répondu
                response.json().then((data) => {
                    // ... et c'est bien du json
                    console.log('Data :', data);
                    // stockage des données dans this.images
                    // Ca roule !!!!
                    this.images = data;
                    success();
                })
            })
            .catch((error) => {
                console.log('Erreur catchée', error);

            })
        
    }
    // gestion de l'événement oninput sur l'input autor
    addEventOnInput = () => {
        console.log('Dans addEventOnInput');
        const input_author = document.getElementById("author");
        input_author.oninput = (e) => {
            console.log('dans oninput de author');
            console.log('this.images', this.images);
            const input_author_value = input_author.value.toLowerCase()
            
            // reduction du tableau grâce à include et filter
            console.log('contient : ', input_author_value);

            const filteredImages = this.images.filter(img =>  {
                return img.author.toLowerCase().includes(input_author_value)}
            );
            
            // effacement des images
            this.removeImages();

            // Création des images
            this.createFigures(filteredImages);
        }
    }
    // effacement des images 
    removeImages = () => {
        // efface les éléments du dom qui correspondent à des figures
        const figures = document.querySelectorAll('figure');
               
        for(const figure of figures) {
            figure.parentNode.removeChild(figure);
        }
    }
    // gestion de l'événement onchange sur le select
    addEventOnSelect = () => {
        console.log('Dans addEventOnSelect');
        const select = document.getElementById("sort");
        select.onchange = (e) => {
            console.log('changement de valeur sur select');
            // récupération de l'élément du dom qui est à la source de l'événement
            const select = e.target;
            // récupération de la valeur de l'option choisie par l'utilisateur
            const value_option = select.options[select.selectedIndex].value;
            // test si la valeur est bien "author"
            if (value_option === "author") {
                console.log('value_option : ', value_option);

                // effacement des images
                this.removeImages();
                
                // Tri du tableau des images en fonction des auteurs
                function compare( a, b ) {
                    if ( a.author < b.author ){
                      return -1;
                    }
                    if ( a.author > b.author ){
                      return 1;
                    }
                    return 0;
                  }
                  
                  this.images = this.images.sort( compare );
                  console.log('tableau trié : ', this.images);
                  
                  // création des figures
                  this.createFigures();
            }
        };
    }
}
// création de mon instance de gestionnaire d'image
const mi = new ManageImages();