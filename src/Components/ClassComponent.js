import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "niraj",
      textColor: "blue",
    };
  }

  render() {
    return (
      <div>
        <p style={{color: this.state.textColor}}>{this.state.name}</p>
        <button
          onClick={() => {
            this.setState({ name: "manish", textColor: 'red' });
          }}
        >
          Change
        </button>
      </div>
    );
  }
}
