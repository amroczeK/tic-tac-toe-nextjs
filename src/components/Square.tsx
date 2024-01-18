import React from "react";
import { SquareValue } from "@/types";

type SquareProps = {
  value: SquareValue;
  onClick: () => void;
};

function Square({ value, onClick }: SquareProps) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
