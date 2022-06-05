import React, { Component } from "react";

export class ClassComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "niraj",
    };
  }
  changeName() {
    if (this.state.name == "niraj") this.setState({ name: "manish" });
    else this.setState({ name: "niraj" });
  }
  render() {
    return (
      <div>
        <p>Hello {this.state.name}</p>
        <button
          onClick={() => {
            this.changeName();
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default ClassComponent;
