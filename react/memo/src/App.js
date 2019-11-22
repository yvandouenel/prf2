import React, { Component } from "react";
import Nav from "./components/Nav";
import Fetch from "./services/Fetch";
import Column from "./components/Column";
import "./App.css";

class App extends Component {
  state = {
    terms: [],
    columns: [],
    editingCard: false
  };
  fetch = {};

  componentDidMount = () => {
    console.log("Dans componentDidMount");
    console.log("this : ", this);
    this.fetch = new Fetch("http://www.coopernet.fr/");
    // on va chercher le token
    this.fetch.getToken(this.successToken, this.failureToken);
  };
  handleSubmit = event => {
    event.preventDefault();
  };
  handleChangeQuestion = event => {
    console.log("dans handleChangeQuestion");
  };
  // affichage du formulaire
  dumpForm = () => {
    if (this.state.editingCard) {
      console.log("Affichage du formulaire");
    } else {
      console.log("Pas de formulaire");
    }
    if (false) {
      return (
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="question">
            Question
            <input
              value={this.state.columns[0].cartes[0].question}
              onChange={this.handleChangeQuestion}
              type="text"
              id="question"
            />
          </label>
          <label htmlFor="reponse">
            Réponse
            <input type="text" id="reponse" />
          </label>

          <input type="submit" value="Envoyer" />
        </form>
      );
    }
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
  handleEditCard = (e, card) => {
    console.log("Dans handleEditCard");
    console.log("carte concernée ", card);
    // copie du state
    const copy_state = { ...this.state };
    // Modification de la copie du state
    copy_state.editingCard = card;

    this.setState(copy_state);
  };

  handleClickTerm = (e, term) => {
    console.log("Dans handleClickTerm");
    // Modification de la propriété selected
    // du term concerné
    // copie du state
    const copy_state = { ...this.state };
    // Recherche de l'index du term
    const index_term = copy_state.terms.indexOf(term);
    // On donne la valeur false à tous les term.selected
    for (const term of copy_state.terms) {
      term.selected = false;
    }
    // modification de la copie du state
    copy_state.terms[index_term].selected = true;

    // appel de la méthode qui récupère les cartes
    this.fetch.createReqCards(term.id, this.successCards, this.failureCards);

    // changement du state
    this.setState(copy_state);
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
            {this.dumpForm()}
            {this.state.columns.map(column => {
              return (
                <Column
                  onClickEditCard={this.handleEditCard}
                  key={column.id}
                  column={column}
                />
              );
            })}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
