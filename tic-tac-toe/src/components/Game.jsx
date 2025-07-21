import React from 'react'
import GameCell from './GameCell'
import {useNavigate} from 'react-router-dom'
import { GameBoardStyle } from './Game.styled'
import Button from './Button/Button'
import {Container} from './styles/General.styled'
import { GameContext } from './context/GameContext'
import { useContext } from 'react'
import Player from './Player/Player'


const Game = () => {
  const board = ['', '', '', '','', '','', '', '']
  const navigate = useNavigate();
  const {game} = useContext(GameContext)
  return (
    <Container>
      <Player player={game.player1}/>
    <GameBoardStyle>{game.board.map((item, index) =>{
    return <GameCell key={index} cellItem={item} index={index} />
    })
    }</GameBoardStyle>
  
      <Player player={game.player2}/>
    </Container>
  )
}

export default Game













      
   

