import React, {useContext} from 'react'
import { Title, SubTitle } from '../styles/General.styled'
import {ModalHeader, ModalBody, ModalFooter} from '../Modal/Modal.styled'
import Button from '../Button/Button'
import { GameContext } from '../context/GameContext'
import {ModalContext} from '../context/ModalContext'

const RoundOverModal = () => {
  const {resetBoard, game} = useContext(GameContext)
  const {handleModal} = useContext(ModalContext);
  
  const continueRound = () => {
  handleModal(null); 
  resetBoard();
};
  return (
  
     <>
      <ModalHeader> 
      <Title primary>{game .roundWinner ? `${game[game.roundWinner].name} Wins Round` : 'Round Drawn'} </Title>
     </ModalHeader> 
      <ModalBody> 
      <SubTitle primary>Choices will be switched now.</SubTitle>
      <SubTitle primary>{game.player1.name} : {game.player1.score}</SubTitle>
      <SubTitle primary>{game.player2.name} : {game.player2.score}</SubTitle>
     </ModalBody> 
      <ModalFooter>
      <Button
      color='#f9c811'
      onClick={
        continueRound
      }>Continue</Button>
      <Button 
      color= '#8437f9'>Restart</Button>
      </ModalFooter> 

   
     </>
   
  )
}

export default RoundOverModal
