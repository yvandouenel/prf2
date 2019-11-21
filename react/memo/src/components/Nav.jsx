import React, { Component } from "react";
class Nav extends Component {
  state = {};
  render() {
    return (
      <nav>
        <ul>
          {this.props.terms.map(term => (
            <li key={term.id}>{term.name}</li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;
