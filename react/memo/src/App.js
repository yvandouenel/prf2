import React, { Component } from "react";
import Nav from "./components/Nav";
import Fetch from "./services/Fetch";
import Column from "./components/Column";

import "./App.css";

class App extends Component {
  state = {
    terms: [],
    columns: []
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
    const copy_state = { ...this.state }; // spread operator
    // modification de la copie du state
    copy_state.terms = data;
    // comparaison du copy_state et de this.state
    this.setState(copy_state);
  };
  failureTerms = error => {
    console.log("Erreur attrapée : ", error);
  };

  handleClickTerm = (e, term_id) => {
    console.log("Dans handleClickTerm");
    // Modification de la propriété selected
    // du term concerné
    // copie du state
    const copy_state = { ...this.state };
    // modification de la copie du state
    copy_state.terms[0].selected = true;
    this.setState(copy_state);
    // appel de la méthode qui récupère les cartes
    this.fetch.createReqCards(term_id, this.successCards, this.failureCards);
  };
  successCards = data => {
    console.log("Dans successCards");
    // clone du state
    const copy_state = { ...this.state };
    // affectation de data à la propriété
    // columns de la copie du state
    copy_state.columns = data;
    console.log("state avant le setState : ", this.state);
    // Comparaison de la copie du state et du state pour
    // un éventuel "update" du component grâce à setState
    this.setState(copy_state);
    console.log("state  après le setState: ", this.state);
  };
  failureCards = () => {
    console.log("Dans failureCards");
  };
  render() {
    return (
      <div className="App">
        <header>
          <h1>Memo</h1>
          {/* appel du component nav avec les bons paramètres*/}
          <Nav onClickTerm={this.handleClickTerm} terms={this.state.terms} />
        </header>
        <main className="container-fluid">
          <div className="row">
            {this.state.columns.map(column => {
              return <Column key={column.id} column={column} />;
            })}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
