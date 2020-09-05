import React from "react";
import PropTypes from "prop-types";
import Calculation from "components/CalculationDisplay";
import Result from "components/ResultDisplay";

const Displays = ({ calculation, result }) => (
  <>
    <Calculation value={calculation} />
    <Result value={result} />
  </>
);

Displays.propTypes = {
  calculation: PropTypes.elementType.isRequired,
  result: PropTypes.elementType.isRequired,
};

export default Displays;
