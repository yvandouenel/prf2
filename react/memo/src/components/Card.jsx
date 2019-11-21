import React, { Component } from "react";
class Card extends Component {
  state = {};
  render() {
    return (
      <article>
        <h3>{this.props.card.question}</h3>
        <p>{this.props.card.reponse}</p>
      </article>
    );
  }
}

export default Card;
