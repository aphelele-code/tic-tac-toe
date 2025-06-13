import React from 'react'
import {CellStyle} from './GameCell.styled.jsx'
import { GameContext } from './context/GameContext.jsx'
import { useContext } from 'react'
import { checkForWinner } from './context/utils/GameUtils/index.jsx'

const GameCell = ({cellItem, index}) => {
  const{updateBoard, game} = useContext(GameContext);

  const cellClickHandler = () => {
     updateBoard(index)
   const result = checkForWinner(game.board);
   
   
  //  if(result){
   
  //  }
    
  }

  return (
   
      <CellStyle
       onClick={() => {
console.log(cellItem, index);
 updateBoard(index);
 cellClickHandler();

}}
>
  {cellItem}
  
  </CellStyle>
 
  )
}

export default GameCell

