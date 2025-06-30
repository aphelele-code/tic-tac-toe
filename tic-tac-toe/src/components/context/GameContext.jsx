import {createContext} from 'react';
import { useState } from 'react';

export const GameContext = createContext({})

export const GameContextProvider = (props) => { 
    const [game, setGame] = useState({
        board: ['', '','', '', '', '', '', '', ''],
        player1:{
            choice: 'x',
            name: "Akhil"
        },
        player2: {
            choice:"o",
            name: 'Aphelele'
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

    return (
        <GameContext.Provider value={{
            //How did we make each cell have an X
            game,updateBoard
        }}>
{props.children}
        </GameContext.Provider>

        
    )
}




























