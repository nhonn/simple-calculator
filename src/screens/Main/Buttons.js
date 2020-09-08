import React from "react";
import PropTypes from "prop-types";
import ButtonsGroup from "components/ButtonsGroup";

const Buttons = ({ onClick }) => {
  const row = [
    {
      label: "THEME",
      variant: "func",
      onClick: () => onClick({ type: "func", value: "theme" }),
    },
    {
      label: "ans",
      variant: "func",
      onClick: () => onClick({ type: "func", value: "ans" }),
    },
    {
      label: "del",
      variant: "func",
      onClick: () => onClick({ type: "func", value: "del" }),
    },
    {
      label: "clear",
      variant: "func",
      onClick: () => onClick({ type: "func", value: "clear" }),
    },
  ];
  const row2 = [
    {
      label: "7",
      variant: "normal",
      onClick: () => onClick({ type: "num", value: "7" }),
    },
    {
      label: "8",
      variant: "normal",
      onClick: () => onClick({ type: "num", value: "8" }),
    },
    {
      label: "9",
      variant: "normal",
      onClick: () => onClick({ type: "num", value: "9" }),
    },
    {
      label: "/",
      variant: "operator",
      onClick: () => onClick({ type: "operator", value: "/" }),
    },
  ];
  const row3 = [
    {
      label: "4",
      variant: "normal",
      onClick: () => onClick({ type: "num", value: "4" }),
    },
    {
      label: "5",
      variant: "normal",
      onClick: () => onClick({ type: "num", value: "5" }),
    },
    {
      label: "6",
      variant: "normal",
      onClick: () => onClick({ type: "num", value: "6" }),
    },
    {
      label: "*",
      variant: "operator",
      onClick: () => onClick({ type: "operator", value: "*" }),
    },
  ];
  const row4 = [
    {
      label: "1",
      variant: "normal",
      onClick: () => onClick({ type: "num", value: "1" }),
    },
    {
      label: "2",
      variant: "normal",
      onClick: () => onClick({ type: "num", value: "2" }),
    },
    {
      label: "3",
      variant: "normal",
      onClick: () => onClick({ type: "num", value: "3" }),
    },
    {
      label: "-",
      variant: "operator",
      onClick: () => onClick({ type: "operator", value: "-" }),
    },
  ];
  const row5 = [
    {
      label: ".",
      variant: "normal",
      onClick: () => onClick({ type: "num", value: "." }),
    },
    {
      label: "0",
      variant: "normal",
      onClick: () => onClick({ type: "num", value: "0" }),
    },
    {
      label: "=",
      variant: "equal",
      onClick: () => onClick({ type: "func", value: "=" }),
    },
    {
      label: "+",
      variant: "operator",
      onClick: () => onClick({ type: "operator", value: "+" }),
    },
  ];

  return (
    <>
      <ButtonsGroup buttons={row} />
      <ButtonsGroup buttons={row2} />
      <ButtonsGroup buttons={row3} />
      <ButtonsGroup buttons={row4} />
      <ButtonsGroup buttons={row5} />
    </>
  );
};

Buttons.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Buttons;
