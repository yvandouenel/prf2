import React, { Component } from "react";
class Card extends Component {
  state = {};
  render() {
    return (
      <article>
        <h3>{this.props.card.question}</h3>
        <p>{this.props.card.reponse}</p>
        <button
          onClick={e => {
            this.props.onClickEditCard(e, this.props.card);
          }}
        >
          Modifier
        </button>
      </article>
    );
  }
}

export default Card;
