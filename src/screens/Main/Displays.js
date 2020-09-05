import React from "react";
import Calculation from "../../components/CalculationDisplay";
import Result from "../../components/ResultDisplay";

const Displays = ({ calculation, result }) => {
  return (
    <>
      <Calculation value={calculation} />
      <Result value={result} />
    </>
  );
};

export default Displays;
