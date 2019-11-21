import React, { Component } from "react";
import Card from "./Card";

class Column extends Component {
  state = {};
  render() {
    return (
      <section className="col-md-3">
        <h2>{this.props.column.name}</h2>
        {this.props.column.cartes.map(card => {
          return <Card key={card.id} card={card} />;
        })}
      </section>
    );
  }
}

export default Column;
