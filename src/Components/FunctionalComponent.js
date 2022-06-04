import React from "react";

function FunctionalComponent() {
  const clickHandler = () => {
    console.log("Button Clicked from functional component");
  };
  return (
    <div>
      <button type="button" onClick={clickHandler}>
        Functional Submit
      </button>
    </div>
  );
}

export default FunctionalComponent;
