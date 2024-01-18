"use client";

import { useState } from "react";
import { Board, GameState, SquareValue } from "@/types";
import GameBoard from "@/components/GameBoard";
import { calculateWinner, createInitialBoard } from "@/helpers";

export default function Home() {
  const [gameState, setGameState] = useState<GameState>({
    board: createInitialBoard(),
    currentPlayer: "X",
    winner: null,
    isDraw: false,
  });

  const handleSquareClick = (row: number, col: number) => {
    // Create a deep copy of the board
    const newBoard = gameState.board.map((row) => [...row]);

    // Check if the square is empty and the game is still ongoing
    if (newBoard[row][col] || gameState.winner) {
      alert("The game is over, start a new one.");
      return;
    }

    // Update the board
    newBoard[row][col] = gameState.currentPlayer;

    // Calculate if there's a winner or if the game is a draw
    const winner = calculateWinner(newBoard);

    // Update the game state
    setGameState({
      ...gameState,
      board: newBoard,
      currentPlayer: gameState.currentPlayer === "X" ? "O" : "X", // Toggle the current player
      winner: winner,
      isDraw:
        !winner && newBoard.every((row) => row.every((cell) => cell !== null)), // Check for draw
    });
  };

  const handleNewGameClick = () => {
    setGameState({
      board: createInitialBoard(),
      currentPlayer: "X",
      winner: null,
      isDraw: false,
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="game flex flex-col gap-4 items-center">
        {gameState.currentPlayer && !gameState.winner && !gameState.isDraw && (
          <h1>Current player is {gameState.currentPlayer}</h1>
        )}
        {gameState.winner && <h1>The winner is {gameState.winner}!</h1>}
        {gameState.isDraw && <h1>The game is a draw!</h1>}
        <GameBoard board={gameState.board} onSquareClick={handleSquareClick} />
        <button className="new-game-btn" onClick={handleNewGameClick}>
          New Game
        </button>
      </div>
    </main>
  );
}
