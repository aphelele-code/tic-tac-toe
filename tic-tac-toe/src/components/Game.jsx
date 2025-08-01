import React from 'react'
import GameCell from './GameCell'
import {useNavigate} from 'react-router-dom'
import { GameBoardStyle } from './Game.styled'
import Button from './Button/Button'
import {Container} from './styles/General.styled'
import { ModalContext } from './context/ModalContext'
import { GameContext } from './context/GameContext'
import RoundOverModal from './Modals/RoundOverModal'
import { useContext , useEffect} from 'react'
import Player from './Player/Player'


const Game = () => {
    const { game} = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  useEffect(() => {
  if (game.roundWinner === null) return; // Don't do anything if the round hasn't ended

  // Only trigger the modal once per round end
  handleModal(<RoundOverModal winner={game.roundWinner} />);
}, [game.roundWinner]);
  return (
    <Container>
      <Player player={game.player1} isPlayerActive = {game.player1.choice === game.turn}/>
    <GameBoardStyle>{game.board.map((item, index) =>{
    return <GameCell key={index} cellItem={item} index={index} />
    })
    }</GameBoardStyle>
  
      <Player player={game.player2} isPlayerActive = {game.player2.choice === game.turn}/>
    </Container>
  )
}

export default Game













      
   

