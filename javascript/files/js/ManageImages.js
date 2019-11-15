class ManageImages {
    constructor() {
        this.images = [];
        this.container = document.getElementById("slideshow");
        // appel assynchrone de fetchImages 
        this.fetchImages(this.createImages);

    }
    //création des images
    createImages = () => {
        console.log('Dans createImage');
        // parcours du tableau d'images  et 
        // création à la volée des éléments img
        for(let i = 0; i < this.images.length; i++) {
            const img = document.createElement("img");
            img.setAttribute("src", this.images[i].download_url);
            console.log('src = ',this.images[i].download_url);
            this.container.appendChild(img);
        }
    }
    // appeler les images avec un callback de succès
    fetchImages = (success) => {
        console.log('Dans fetchImages');
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
        .catch((error)=>{
            console.log('Erreur catchée', error);

        })
    }
}
// création de mon instance de gestionnaire d'image
const mi = new ManageImages();