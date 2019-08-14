import React, { useState } from "react";

//import any components needed

//Import your array data to from the provided data file
import data from "../../../../src/data";
import OperatorButton from "./OperatorButton";

const Operators = () => {
  // STEP 2 - add the imported data to state
  console.log(data.operators);
  const [operator, setOperator] = useState(data.operators);

  return (
    <div>
      {operator.map(oper => {
        return <OperatorButton key={oper.id} buttonChar={oper.char} />;
      })}

      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Operators;
