import React, { Component } from "react";
class Card extends Component {
  state = {};
  componentDidUpdate(prevProps) {
    //  Solution abandonnée car étrangement l'ancienne props est
    // tjs égale à la nouvelle !!! A creuser
    // Utilisation classique (pensez bien à comparer les props) :
    // console.log("componentDidUpdate");
    // console.log("ancienne props : ", prevProps.card);
    // console.log("nouvelle props : ", this.props.card);
    // if (
    //   this.props.card.question !== prevProps.card.question ||
    //   this.props.card.reponse !== prevProps.card.reponse
    // ) {
    //   console.log("Question ou réponse modifiée");
    // } else {
    //   console.log("Pas de modification");
    // }
  }
  render() {
    return (
      <article>
        <h3>{this.props.card.question}</h3>
        <p>{this.props.card.reponse}</p>
        <button
          onClick={e => {
            this.props.onClickEditCard(
              e,
              this.props.column_index,
              this.props.card_index
            );
          }}
        >
          Modifier
        </button>
      </article>
    );
  }
}

export default Card;
