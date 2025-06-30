import React from 'react'
import GameCell from './GameCell'
import {useNavigate} from 'react-router-dom'
import { GameBoardStyle } from './Game.styled'
import Button from './Button/Button'
import {Container} from './styles/General.styled'
import { GameContext } from './context/GameContext'
import { useContext } from 'react'


const Game = () => {
  const board = ['', '', '', '','', '','', '', '']
  const navigate = useNavigate();
  const {game} = useContext(GameContext)
  return (
    <Container>
    <GameBoardStyle>{game.board.map((item, index) =>{
    return <GameCell key={index} cellItem={item} index={index} />
    })
    }</GameBoardStyle>
  <Button  onClick={ () => {
        navigate('/')
      }} label='Back to Home'/>
    </Container>
  )
}

export default Game













      
   

