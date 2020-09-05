import React from "react";
import ButtonsGroup from "../../components/ButtonsGroup";

const Buttons = ({ onClick }) => {
  const row = [
    {
      label: "THEME",
      variant: "func",
      onClick: () => onClick("theme"),
    },
    {
      label: "ANS",
      variant: "func",
      onClick: () => onClick("ans"),
    },
    {
      label: "DEL",
      variant: "func",
      onClick: () => onClick("del"),
    },
    {
      label: "CLEAR",
      variant: "func",
      onClick: () => onClick("clear"),
    },
  ];
  const row2 = [
    {
      label: "7",
      variant: "normal",
      onClick: () => onClick("7"),
    },
    {
      label: "8",
      variant: "normal",
      onClick: () => onClick("8"),
    },
    {
      label: "9",
      variant: "normal",
      onClick: () => onClick("9"),
    },
    {
      label: "/",
      variant: "operator",
      onClick: () => onClick("/"),
    },
  ];
  const row3 = [
    {
      label: "4",
      variant: "normal",
      onClick: () => onClick("4"),
    },
    {
      label: "5",
      variant: "normal",
      onClick: () => onClick("5"),
    },
    {
      label: "6",
      variant: "normal",
      onClick: () => onClick("6"),
    },
    {
      label: "*",
      variant: "operator",
      onClick: () => onClick("*"),
    },
  ];
  const row4 = [
    {
      label: "1",
      variant: "normal",
      onClick: () => onClick("1"),
    },
    {
      label: "2",
      variant: "normal",
      onClick: () => onClick("2"),
    },
    {
      label: "3",
      variant: "normal",
      onClick: () => onClick("3"),
    },
    {
      label: "-",
      variant: "operator",
      onClick: () => onClick("-"),
    },
  ];
  const row5 = [
    {
      label: ".",
      variant: "normal",
      onClick: () => onClick("."),
    },
    {
      label: "0",
      variant: "normal",
      onClick: () => onClick("0"),
    },
    {
      label: "=",
      variant: "equal",
      onClick: () => onClick("="),
    },
    {
      label: "+",
      variant: "operator",
      onClick: () => onClick("+"),
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

export default Buttons;
