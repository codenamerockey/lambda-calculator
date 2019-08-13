import React, { useState } from "react";
import SpecialButton from "./SpecialButton";
import "../../../App.css";

//import any components needed

//Import your array data to from the provided data file
import data from "../../../../src/data";

const Specials = () => {
  console.log(data.specials);
  // STEP 2 - add the imported data to state
  const [specials, setSpecials] = useState(data.specials);

  return (
    <div>
      {specials.map(spc => {
        return <SpecialButton key={spc} specialButton={spc} />;
      })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Specials;
