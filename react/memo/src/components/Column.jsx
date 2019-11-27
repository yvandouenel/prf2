import React, { Component } from "react";
import Card from "./Card";

class Column extends Component {
  state = {};
  render() {
    return (
      <section className="col-md-3">
        <h2>{this.props.column.name}</h2>
        <button
          onClick={e => {
            console.log("colonne index : ", this.props.column_index);
            this.props.onClickAddCard(e, this.props.column_index);
          }}
        >
          Ajouter
        </button>
        {this.props.column.cartes.map(card => {
          return (
            <Card
              onClickEditCard={this.props.onClickEditCard}
              key={card.id}
              card={card}
              column_index={this.props.column_index}
              card_index={this.props.column.cartes.indexOf(card)}
            />
          );
        })}
      </section>
    );
  }
}

export default Column;
