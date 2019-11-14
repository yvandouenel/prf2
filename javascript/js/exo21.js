// récupération de l'élément du dom qui correpond à 
// un h2 dans la section qui a pour class open-close

const h2 = document.querySelector(".open-close > h2");

// affectation de la fonction qui gère l'événement à 
// l'événement onclick
// h2.onclick = function(){
//     // test si mon p est hidden ou pas
//     if(h2.nextElementSibling.className == "hidden"){
//         h2.nextElementSibling.setAttribute("class", "visible");
//     }else {
//         h2.nextElementSibling.setAttribute("class", "hidden");
//     }
    
// };

h2.onclick = function(){
    // test si mon p est hidden ou pas
    h2.nextElementSibling.classList.toggle("hidden")   
};


/**
 * console.log('onclick sur h2');
    const classes = this.nextElementSibling.classList;
    console.log(classes);
    //this.nextElementSibling.setAttribute("class","hidden");
    this.nextElementSibling.classList.toggle("hidden");
 */