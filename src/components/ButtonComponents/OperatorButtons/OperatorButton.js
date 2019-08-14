import React from "react";
import "../../../App.css";

const OperatorButton = props => {
  return (
    <>
      <button className="buttonDiv button btn-darkBlue">
        {props.buttonChar}
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;
