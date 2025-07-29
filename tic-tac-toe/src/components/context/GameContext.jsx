


import React, { createContext, useState } from 'react';
import { genConfig } from 'react-nice-avatar';

export const GameContext = createContext({});

const winningCombos = [
  [0,1,2],[3,4,5],[6,7,8], // rows
  [0,3,6],[1,4,7],[2,5,8], // cols
  [0,4,8],[2,4,6]          // diagonals
];

// Utility to check winner or draw
const checkForWinner = (board) => {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      board[a] && 
      board[a] === board[b] && 
      board[a] === board[c]
    ) {
      return board[a]; // 'x' or 'o'
    }
  }
  // Draw if no empty spaces
  if (board.every(cell => cell !== '')) return 'DRAW';

  return null;
};

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: Array(9).fill(''),
    player1: {
      choice: 'x',
      name: 'Player 1',
      score: 0,
      color: '#8437f9',
      avatarConfig: genConfig()
    },
    player2: {
      choice: 'o',
      name: 'Player 2',
      score: 0,
      color: '#f9c811',
      avatarConfig: genConfig()
    },
    turn: 'x',
    roundWinner: null
  });

  const updateBoard = (index) => {
    if (game.board[index] !== '') return; // prevent overwriting

    const updatedBoard = [...game.board];
    updatedBoard[index] = game.turn;

    const winner = checkForWinner(updatedBoard);

    setGame(prevGame => {
      let updatedPlayer1 = {...prevGame.player1};
      let updatedPlayer2 = {...prevGame.player2};
      let updatedRoundWinner = null;

      if (winner === 'DRAW') {
        updatedPlayer1.score += 0.5;
        updatedPlayer2.score += 0.5;
        updatedRoundWinner = 'DRAW';
      } else if (winner === prevGame.player1.choice) {
        updatedPlayer1.score += 1;
        updatedRoundWinner = 'player1';
      } else if (winner === prevGame.player2.choice) {
        updatedPlayer2.score += 1;
        updatedRoundWinner = 'player2';
      }

      // Switch turn only if no winner yet
      const nextTurn = winner ? prevGame.turn : (prevGame.turn === 'x' ? 'o' : 'x');

      return {
        ...prevGame,
        board: updatedBoard,
        player1: updatedPlayer1,
        player2: updatedPlayer2,
        turn: nextTurn,
        roundWinner: updatedRoundWinner
      };
    });
  };

  const resetBoard = () => {
    setGame(prevGame => ({
      ...prevGame,
      board: Array(9).fill(''),
      roundWinner: null,
      // Optionally switch who starts next round:
      turn: prevGame.turn === 'x' ? 'o' : 'x'
    }));
  };

  const switchChoices = () => {
    setGame(prevGame => ({
      ...prevGame,
      player1: {
        ...prevGame.player1,
        choice: prevGame.player1.choice === 'x' ? 'o' : 'x',
      },
      player2: {
        ...prevGame.player2,
        choice: prevGame.player2.choice === 'x' ? 'o' : 'x',
      }
    }));
  };

  return (
    <GameContext.Provider value={{
      game,
      updateBoard,
      resetBoard,
      switchChoices,
    }}>
      {props.children}
    </GameContext.Provider>
  );
};




























