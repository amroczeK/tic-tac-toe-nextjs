import { Board, SquareValue } from "@/types";

export const createInitialBoard = (): Board => {
  const initialBoard: Board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  return initialBoard;
};

export const calculateWinner = (board: Board): SquareValue => {
  // Define the lines that need to be checked for a winning condition
  const lines = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    const [rowA, colA] = [Math.floor(a / 3), a % 3];
    const [rowB, colB] = [Math.floor(b / 3), b % 3];
    const [rowC, colC] = [Math.floor(c / 3), c % 3];

    if (
      board[rowA][colA] &&
      board[rowA][colA] === board[rowB][colB] &&
      board[rowA][colA] === board[rowC][colC]
    ) {
      return board[rowA][colA];
    }
  }

  return null;
};
