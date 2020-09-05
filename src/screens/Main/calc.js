import stringMath from "string-math";

const calc = (btn, calculation, result, ans, isNew) => {
  let calcString = calculation;
  let resString = result;
  let ansString = ans;
  let isNewInput = isNew;

  if (isNewInput && btn.type === "num") {
    resString = btn.value;
    calcString = "";
    isNewInput = false;
  } else {
    isNewInput = false;
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
        let valid = true;
        const res = stringMath(calcString + resString, (e) => {
          if (e !== null) valid = false;
        });
        if (valid) {
          resString = res.toString();
          ansString = resString;
        } else {
          resString = "Err";
        }
        calcString = "";
        isNewInput = true;
      }
    }
  }
  return {
    calcString: calcString,
    resString: resString,
    ansString: ansString,
    isNewInput: isNewInput,
  };
};

export default calc;
