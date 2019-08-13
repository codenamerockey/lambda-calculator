import React, { useState } from "react";
import "../../App.css";

const Display = () => {
  const [result, setResult] = useState(0);
  return <div className="displayContainer">{result}</div>;
};

export default Display;
