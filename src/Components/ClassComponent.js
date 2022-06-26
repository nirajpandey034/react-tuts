import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "niraja",
    };
  }

  render() {
    return (
      <div>
        {this.state.name}
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
