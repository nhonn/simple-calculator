import stringMath from "string-math";

const calc = (btn, calculation, result, ans) => {
  let calcString = calculation;
  let resString = result;
  let ansString = ans;

  if (btn.type === "num") {
    if (resString === "0") resString = btn.value;
    else resString = resString + btn.value;
  }
  if (btn.type === "operator") {
    calcString = calcString + resString + btn.value;
    resString = "";
  }
  if (btn.type === "func") {
    if (btn.value === "clear") {
      calcString = "";
      resString = "0";
    }
    if (btn.value === "ans") resString = ansString;
    if (btn.value === "del") {
      resString =
        resString.length === 1
          ? "0"
          : resString.substring(0, resString.length - 1);
    }
    if (btn.value === "=") {
      const res = stringMath(calcString + resString);
      resString = res.toString();
      calcString = "";
      ansString = resString;
    }
  }
  return {
    calcString: calcString,
    resString: resString,
    ansString: ansString,
  };
};

export default calc;
