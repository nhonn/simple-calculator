import stringMath from "string-math";

const reducer = (state, action) => {
  switch (action.type) {
    case "NUMBER":
      if (state.isNew)
        return {
          ...state,
          calculation: "",
          result: action.payload,
          isNew: false,
        };
      return {
        ...state,
        result:
          state.result === "0" ? action.payload : state.result + action.payload,
      };
    case "OPERATOR":
      return {
        ...state,
        calculation: state.calculation + state.result + action.payload,
        result: "",
      };
    case "CLEAR":
      return {
        ...state,
        calculation: "",
        result: "0",
      };
    case "ANS":
      return {
        ...state,
        result: state.ans,
      };
    case "DEL":
      return {
        ...state,
        result:
          state.result.length === 1
            ? "0"
            : state.result.substring(0, state.result.length - 1),
      };
    case "EQUAL":
      let valid = true;
      const res = stringMath(state.calculation + state.result, (e) => {
        if (e !== null) valid = false;
      });
      if (valid)
        return {
          ...state,
          result: res.toString(),
          ans: res.toString(),
          calculation: "",
          isNew: true,
        };
      return {
        ...state,
        result: "Err",
        calculation: "",
        isNew: true,
      };
    default:
      throw new Error();
  }
};

export default reducer;
