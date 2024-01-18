import React from "react";
import { Board } from "@/types";
import Square from "./Square";

type BoardProps = {
  board: Board;
  onSquareClick: (row: number, col: number) => void;
};

function GameBoard({ board, onSquareClick }: BoardProps) {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((cell, colIndex) => (
            <Square
              key={colIndex}
              value={cell}
              onClick={() => onSquareClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
