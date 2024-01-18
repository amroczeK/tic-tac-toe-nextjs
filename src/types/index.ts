export type SquareValue = "X" | "O" | null;
export type Board = SquareValue[][];
export type GameState = {
  board: Board;
  currentPlayer: "X" | "O";
  winner: string | null;
  isDraw: boolean;
};
