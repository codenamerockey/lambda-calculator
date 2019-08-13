import React from "react";
import "../../../App.css";

const SpecialButton = props => {
  return (
    <>
      <button className="button btn-darkBlue">{props.specialButton}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default SpecialButton;
