import React, { Component } from "react";
class Nav extends Component {
  state = {};
  buttonClasses = selected => {
    // opérateur ternaire qui est une
    // alternative à if else
    const button_classes = selected
      ? "btn btn-warning mr-1 mb-1"
      : "btn btn-secondary mr-1 mb-1";
    return button_classes;
  };
  render() {
    return (
      <nav>
        <ul>
          {this.props.terms.map(term => (
            <li
              onClick={e => {
                console.log("onClick sur term ", term.id);
                this.props.onClickTerm(e, term.id);
              }}
              className={this.buttonClasses(term.selected)}
              key={term.id}
            >
              {term.name}
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;
