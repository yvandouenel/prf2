class Fetch {
  constructor(url_basis) {
    this.url_basis = url_basis;
    this.token = "";
    this.id = 45;
    this.login = "jc";
    this.pwd = "jc";
  }
  getToken(success, failure) {
    fetch(this.url_basis + "rest/session/token/")
      .then(function(response) {
        if (response.status !== 200) {
          console.log(
            "Erreur (même si le server a répondu)- statut : " + response.status
          );
          failure(response.status);
          return;
        }
        response.text().then(function(data) {
          // Ca roule, le serveur a répondu et il a bien
          // renvoyé une chaine de caractère qui correspond à un token
          console.log("Dans getToken - token: ", data);
          success(data);
        });
      })
      .catch(error => {
        console.log("Erreur 'catchée' sur la promesse  ", error);
        failure(error);
      });
  }
  getTerms = (success, failure) => {
    try {
      fetch(this.url_basis + "memo/themes/", {
        credentials: "same-origin",
        method: "GET",
        headers: {
          "Content-Type": "application/hal+json",
          "X-CSRF-Token": this.token,
          Authorization: "Basic " + btoa(this.login + ":" + this.pwd) // btoa = encodage en base 64
        }
      }).then(function(response) {
        if (response.status !== 200) {
          // Il y a un problème, le statut de la réponse n'est pas le bon
          console.error("Erreur - statut : " + response.status);
          failure(response.status);
        } else {
          // Ca roule... mais encore faut-il que la
          // réponse soit dans le bon format
          response.json().then(function(data) {
            console.log("terms : ", data);
            // On ajoute une propriété "selected"
            // à chaque élement du tableau data
            for (const term of data) {
              term.selected = false;
            }
            // On appelle le callback
            success(data);
          });
        }
      });
    } catch (error) {
      console.error("Erreur : " + error);
      failure(error);
    }
  };

  createReqCards = (termNumber, callbackSuccess, callbackFailed) => {
    // création de la requête
    console.log("Dans creatcreateReqCardseReqCards de coopernet");
    console.log("token : ", this.token);
    const req_cards = new XMLHttpRequest();
    req_cards.onload = () => {
      // passage de la requête en paramètre, sinon, c'est this (coopernet qui serait utilisé)
      this.getCards(req_cards, termNumber, callbackSuccess, callbackFailed);
    };
    // Fait appel au "end-point créé dans le module drupal memo"
    // Pour régler le problème de cache, j'ai ajouté le paramètre "time" à la
    // requête get cf : https://drupal.stackexchange.com/questions/222467/drupal-8-caches-rest-api-calls/222482
    req_cards.open(
      "GET",
      this.url_basis +
        "memo/list_cartes_term/" +
        this.id +
        "/" +
        termNumber +
        "&_format=json&time=" +
        Math.floor(Math.random() * 10000),
      true
    );
    req_cards.setRequestHeader(
      "Authorization",
      "Basic " + btoa(this.login + ":" + this.pwd)
    );
    req_cards.send(null);
  };
  getCards = (req, termNumber, callbackSuccess, callbackFailed) => {
    console.log("Dans getCards de Fetch");
    // On teste directement le status de notre instance de XMLHttpRequest
    if (req.status === 200) {
      // Tout baigne, voici le contenu du token
      let jsonResponse = JSON.parse(req.responseText);
      // ajout de la propriété show_reponse à chaque carte
      console.log("Data renvoyée par getCards", jsonResponse);
      jsonResponse.forEach(function(element) {
        element.cartes.forEach(function(ele) {
          ele.show_reponse = false;
        });
      });
      // on remet les colonnes dans l'ordre grâce à sort
      jsonResponse.sort((a, b) => a.id - b.id);

      callbackSuccess(jsonResponse, termNumber);
    } else {
      // On y est pas encore, voici le statut actuel
      console.log("Pb getCards - Statut : ", req.status, req.statusText);
    }
  };
}

export default Fetch;
