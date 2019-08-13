import React, { useState } from "react";

//import any components needed

//Import your array data to from the provided data file
import data from "../../../data";

const Numbers = () => {
  console.log(data.numbers);

  // console.log("RS: data.js: Numbers()", numbers);
  // STEP 2 - add the imported data to state
  const [numberArray, setnumberArray] = useState(data.numbers);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      <h1>Hello World</h1>
    </div>
  );
};

export default Numbers;
