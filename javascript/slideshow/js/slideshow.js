class Slideshow {
    constructor() {
        this.images = [
            { src: "images/ella.jpg" },
            { src: "images/miriam.jpg" },
            { src: "images/nina.jpg" }
        ]
        this.div_slideshow = document.getElementById("slideshow");
        this.start = false;
        this.renderImages();
        this.createEvent();
    }
    renderImages() {
        for (let img of this.images) {
            this.createImage(img.src);
        }
    }
    createImage(path) {
        const img = document.createElement("img");
        img.setAttribute("src", path);

        this.div_slideshow.appendChild(img);
    }
    createEvent() {
        console.log('dans createEvent');
        this.div_slideshow.onclick =  () => {
            console.log('click sur le slideshow');
            if (this.start) {
                this.start = false;
            } else {
                this.start = true;
                this.animateSlideshow();
            }
        };
    }
    animateSlideshow() {
        console.log('dans animateSlideshow');
        let first_img = document.querySelector("#slideshow > img");
        if(this.start) setTimeout(() => {
            this.div_slideshow.appendChild(first_img);
            this.animateSlideshow();
        }, 2000);
    }
    stopSlideshow() {
        console.log('dans stopSlideshow');
    }

}
const ss = new Slideshow(); 