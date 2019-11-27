import React, { Component } from "react";
import Nav from "./components/Nav";
import Fetch from "./services/Fetch";
import Column from "./components/Column";
import "./App.css";

class App extends Component {
  state = {
    terms: [],
    columns: [],
    editing_card: false
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
    console.log("dans handleSubmit");
    event.preventDefault();
    // copie du state
    const copy_state = { ...this.state };
    copy_state.editing_card = false;
    // Récupération des infos concernant la carte en cours d'édition
    // destructuring object
    const { column_index, card_index } = this.state.editing_card;
    const card = this.state.columns[column_index].cartes[card_index];
    // on va chercher le term qui a pour propriété selected à true
    const term_index = this.state.terms.findIndex(
      term => term.selected === true
    );
    // sauvegarde des données sur le serveur
    this.fetch.createReqEditCard(
      card,
      this.state.terms[term_index].id,
      this.successEditCard,
      this.failureEditCard
    );

    this.setState(copy_state);
  };
  successEditCard = () => {
    console.log("Dans successEditCard");
  };
  failureEditCard = () => {
    console.log("Dans failureEditCard");
  };
  handleChangeQuestionReponse = (event, qr) => {
    console.log("dans handleChangeQuestionReponse");
    // copie du state
    const copy_state = { ...this.state };
    // destructuring object
    const { column_index, card_index } = this.state.editing_card;
    // modification de la copie du state

    copy_state.columns[column_index].cartes[card_index][qr] =
      event.target.value;
    // changement du state
    this.setState(copy_state);
  };

  // affichage du formulaire
  dumpForm = () => {
    if (this.state.editing_card) {
      console.log("Affichage du formulaire");
      // destructuring object
      const { column_index, card_index } = this.state.editing_card;
      return (
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="question">
            Question
            <input
              value={
                this.state.columns[column_index].cartes[card_index].question
              }
              onChange={e => {
                this.handleChangeQuestionReponse(e, "question");
              }}
              type="text"
              id="question"
            />
          </label>
          <label htmlFor="reponse">
            Réponse
            <input
              value={
                this.state.columns[column_index].cartes[card_index].reponse
              }
              onChange={e => {
                this.handleChangeQuestionReponse(e, "reponse");
              }}
              type="text"
              id="reponse"
            />
          </label>

          <input type="submit" value="Envoyer" />
        </form>
      );
    } else {
      console.log("Pas de formulaire");
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
  handleEditCard = (e, column_index, card_index) => {
    console.log("Dans handleEditCard");
    console.log("index de la colonne : ", column_index);
    console.log("index de la carte : ", card_index);

    // copie du state
    const copy_state = { ...this.state };
    // Modification de la copie du state
    copy_state.editing_card = {
      column_index: column_index,
      card_index: card_index
    };
    console.log("editing_card : ", copy_state.editing_card);
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
                  column_index={this.state.columns.indexOf(column)}
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
