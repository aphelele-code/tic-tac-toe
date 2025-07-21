import React from 'react'
import {CellStyle} from './GameCell.styled.jsx'
import { GameContext } from './context/GameContext.jsx'
import { useContext } from 'react'
import { checkForWinner } from './context/utils/GameUtils/index.jsx'
import { useModal } from './hooks/useModal.jsx'
import RoundOverModal from './Modals/RoundOverModal.jsx'

const GameCell = ({cellItem, index}) => {
  const{updateBoard, game, roundComplete} = useContext(GameContext);
const {handleModal} = useModal()
  

  const cellClickHandler = () => {
      updateBoard(index);
      const result = checkForWinner(game.board)
      if(result){
        roundComplete()
        handleModal(<RoundOverModal/>)
      }

}

    if (cellItem === 'x'){
    return (
      <CellStyle >
        <svg xmlns="http://www.w3.org/2000/svg"  width="75px" height="75px" viewBox="0 0 1024 1024"><path d="M512.481 421.906L850.682 84.621c25.023-24.964 65.545-24.917 90.51.105s24.917 65.545-.105 90.51L603.03 512.377 940.94 850c25.003 24.984 25.017 65.507.033 90.51s-65.507 25.017-90.51.033L512.397 602.764 174.215 940.03c-25.023 24.964-65.545 24.917-90.51-.105s-24.917-65.545.105-90.51l338.038-337.122L84.14 174.872c-25.003-24.984-25.017-65.507-.033-90.51s65.507-25.017 90.51-.033L512.48 421.906z"/></svg>
      </CellStyle>
      
    )
  }
  else if (cellItem === 'o'){
    return (
      <CellStyle>
     <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 24 24">

<title/>

<g id="Complete">

<g id="Circle">

<circle cx="12" cy="12" data-name="Circle" fill="none" id="Circle-2" r="10"  stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>

</g>

</g>

</svg>
</CellStyle>
    );
  }

    return (
   
      <CellStyle
       onClick={cellClickHandler}> 
{ cellItem}


 
  </CellStyle>
 
  )
}

  export default GameCell






