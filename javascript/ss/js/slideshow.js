window.onload = () => {
    // création de la classe Slideshow
    class Slideshow {
        constructor(ss_id) {
            // images constitutives du ss
            this.images = [
                { "src": "images/img1.jpg" },
                { "src": "images/img2.jpg" },
                { "src": "images/img3.jpg" }
            ];
            // élément parent du ss
            this.ss_container = document.getElementById(ss_id);

            // mon slideshow tourne ?
            this.is_running = false;

            // création des images
            this.createImages();

            // création des événements
            this.createEvents();
        }
        // méthode de la class slideshow
        createImages() {
            // parcours du tableau
            for (let i = 0; i < this.images.length; i++) {
                // création d'un élément image
                const img = document.createElement("img");
                // ajout de l'attribut src
                img.setAttribute("src", this.images[i].src);
                // positionnement dans le dom : en tant que fils
                // de l'élément ss_container
                this.ss_container.appendChild(img);
            }
        }
        // ajout des événements
        createEvents() {
            // ajout de l'événement onclick au container
            // si is_running est faux, alors, on le passe à true
            // et on relance this.slide()
            // si is_running est vrai, alorsn on le passe à false
            this.ss_container.onclick = function() {
                console.log('click sur le container');
                console.log(this);
                if (this.is_running) {
                    this.is_running = false;
                } else {
                    this.is_running = true;
                    this.slide();
                }
            }

        }
        // on fait tourner le bazar
        slide() {
            if (this.is_running) {
                setTimeout(() => {
                    // récupération de la première image
                    const first_image = document.querySelector("#slideshow > img");
                    // placement de la première image comme dernier fils de ss_container
                    this.ss_container.appendChild(first_image);
                    // appel récursif !!!
                    this.slide();
                }, 2000);
            }
        }
    }
    // instanciation du slideshow
    const ss1 = new Slideshow("slideshow");
}