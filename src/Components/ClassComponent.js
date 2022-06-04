import React, { Component } from "react";

export class ClassComponent extends Component {
  constructor(props) {
    super();
  }

  clickHandler (event){
    console.log("Button Clicked from class component");
}
  render() {
    return (
      <div>
        <button type="button" onClick={()=>this.clickHandler()}>Class Submit</button>
      </div>
    );
  }
}

export default ClassComponent;
