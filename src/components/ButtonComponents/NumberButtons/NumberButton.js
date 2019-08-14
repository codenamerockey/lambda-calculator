import React from "react";
import "../../../App.css";

const NumberButton = props => {
  if (props.number !== 0) {
    return (
      <>
        <button className="button btn-darkBlue">{props.num}</button>
        {/* Display a button element rendering the data being passed down from the parent container on props */}
      </>
    );
  } else {
    return (
      <>
        <button className=" buttonOval">{props.num}</button>
      </>
    );
  }
};

export default NumberButton;
