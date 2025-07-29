// import {createContext} from 'react';
// import { useState } from 'react';
// import Avatar, { genConfig } from 'react-nice-avatar'

// export const GameContext = createContext({})

// export const GameContextProvider = (props) => { 
//     const [game, setGame] = useState({
//         board: ['', '','', '', '', '', '', '', ''],
//         player1:{
//             choice: 'x',
//             name: "Akhil",
//             score: 0,
//             color: '#8437f9',
//             avatarConfig : genConfig(),
//         },
//         player2: {
//             choice:"o",
//             name: 'Aphelele',
//             score: 0,
//              color: '#f9c811',
//             avatarConfig : genConfig(),
         
//         },
//         turn: 'x',
//         roundWinner : ''
//     })

//       const updateBoard= (index) => {
//         const updatedBoard = [...game.board];
//         updatedBoard[index] = game.turn
//         setGame( prevGame => ({
//             ...prevGame,
//             board:updatedBoard,
//             turn: prevGame.turn === 'x'? 'o' : 'x'
//         }))
      
//     }

//     const resetBoard = () => {
//         setGame({
// ...game,
// board: ['', '','', '', '', '', '', '', ''],
//         turn: game.turn === 'x' ? 'o' :  'x'
//         })
//     }

//     const toggleChoice = (choice) => choice === 'x' ? 'o' : 'x'
// const switchTurn = () => {
//     setGame(prevGame => ({
//         ...prevGame,
//         player1: {
//             ...prevGame.player1,
//             choice: toggleChoice(prevGame.player1.choice)
//         },
//           player2: {
//             ...prevGame.player2,
//             choice: toggleChoice(prevGame.player2.choice)
//         },
//         turn : 'o'
//     }))
// }

// const updateScore = (winner) => {
// // winner is always going to be :
// // player1, player2 or draw

// if(winner === 'DRAW'){
//    setGame( (prevGame) => ({
//         ...prevGame,
//         player1: {
//             ...prevGame.player1,
//             score: prevGame.player1.score + 0.5,
//         },
//           player2: {
//             ...prevGame.player2,
//             score: prevGame.player2.score + 0.5,
//         },
//         roundWinner: '',
//     }))  
// }else{
//      setGame( (prevGame) => ({
//         ...prevGame,
//         [winner]: {
//             ...prevGame[winner],
//             score: prevGame[winner].score + 1
//         },
//         roundWinner: winner
//     }))
// }
    
  
// }


//     const roundComplete = (result) => {
       
//         if(game.turn === game.player1.choice  && result !== 'DRAW'){
//             console.log('Player 1 WINS')
//             updateScore('player1')
//         }else if(game.turn === game.player2.choice && result !== 'DRAW'){
//           console.log('Player 2 WINS') 
//           updateScore('player2')
//         }else{
//             console.log('Draw')
//             updateScore('DRAW')
//         }
//          switchTurn()
//     }

//     return (
//         <GameContext.Provider value={{
          
//             game ,updateBoard, roundComplete , resetBoard
//         }}>
// {props.children}
//         </GameContext.Provider>

        
//     )
// }


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
      name: 'Akhil',
      score: 0,
      color: '#8437f9',
      avatarConfig: genConfig()
    },
    player2: {
      choice: 'o',
      name: 'Aphelele',
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




























