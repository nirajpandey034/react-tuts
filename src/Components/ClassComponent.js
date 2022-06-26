import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "niraj",
    };
  }

  render() {
    return (
      <div>
        {this.state.name} <br />
        <button
          onClick={() => {
            this.setState({ name: "manish" });
          }}
        >
          Change
        </button>
      </div>
    );
  }
}
