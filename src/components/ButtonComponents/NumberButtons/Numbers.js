import React, { useState } from "react";
import "../../../App.css";

//import any components needed
import NumberButton from "./NumberButton";
//Import your array data to from the provided data file
import data from "../../../data";

const Numbers = () => {
  console.log(data.numbers);

  // console.log("RS: data.js: Numbers()", numbers);
  // STEP 2 - add the imported data to state
  const [numberArray, setnumberArray] = useState(data.numbers);

  return (
    <div>
      {numberArray.map(num => {
        return <NumberButton key={num} num={num} />;
      })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Numbers;
