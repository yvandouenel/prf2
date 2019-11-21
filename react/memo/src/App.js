import React, { Component } from "react";
import Nav from "./components/Nav";
import Fetch from "./services/Fetch";

import "./App.css";

class App extends Component {
  state = {
    terms: []
  };
  fetch = {};

  componentDidMount = () => {
    console.log("Dans componentDidMount");
    console.log("this : ", this);
    this.fetch = new Fetch("http://www.coopernet.fr/");
    // on va chercher le token
    this.fetch.getToken(this.successToken, this.failureToken);
  };
  // En cas de succès de getToken
  successToken = data => {
    console.log("dans successToken");
    console.log("data : ", data);
    // on stocke le token au bon endroit
    console.log("this", this);
    this.fetch.token = data;
    // Récupération des termes
    this.fetch.getTerms(this.successTerms, this.failureTerms);
  };
  // En cas d'échec de getToken
  failureToken = error => {
    console.log("dans failureToken");
    console.log("Erreur attrapée : ", error);
  };
  successTerms = data => {
    console.log("successTerms");
    console.log("data : ", data);
    // copie (clone ou passage par valeur) du state
    const copy_state = { ...this.state };
    // modification de la copie du state
    copy_state.terms = data;
    // comparaison du copy_state et de this.state
    this.setState(copy_state);
  };
  failureTerms = error => {
    console.log("Erreur attrapée : ", error);
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Memo</h1>
          {/* appel du component nav avec les bons paramètres*/}
          <Nav terms={this.state.terms} />
        </header>
      </div>
    );
  }
}

export default App;
