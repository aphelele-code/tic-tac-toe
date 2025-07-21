import {createContext} from 'react';
import { useState } from 'react';

export const GameContext = createContext({})

export const GameContextProvider = (props) => { 
    const [game, setGame] = useState({
        board: ['', '','', '', '', '', '', '', ''],
        player1:{
            choice: 'x',
            name: "Akhil",
            score: 0
        },
        player2: {
            choice:"o",
            name: 'Aphelele',
            score: 0
        },
        turn: 'x'
    })

      const updateBoard= (index) => {
        let updatedBoard = game.board;
        updatedBoard[index] = game.turn
        setGame({
            ...game,
            board:updatedBoard,
            turn: game.turn === 'x'? 'o' : 'x'
        })
      
    }

    const resetBoard = () => {
        setGame({
...game,
board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        
        })
    }

    const roundComplete = () => {
        if(game.turn === game.player1.choice){
            console.log('Player 1 WINS')
            setGame({
                ...game,
               player1: {
                ...game.player1,
                score: game.player1.score + 1
               }
            })
        }else if(game.turn === game.player2.choice){
          console.log('Player 2 WINS') 
           setGame({
                ...game,
               player1: {
                ...game.player2,
                score: game.player2.score + 1
               }
            }) 
        }else{
            console.log('Draw')
        }
    }

    return (
        <GameContext.Provider value={{
            //How did we make each cell have an X
            game,updateBoard, roundComplete
        }}>
{props.children}
        </GameContext.Provider>

        
    )
}




























