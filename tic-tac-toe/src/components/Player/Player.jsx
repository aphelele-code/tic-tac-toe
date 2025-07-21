import React from 'react'
import { PlayerWrapper } from './Player.styled'

const Player = ({player}) => {


  return (
    <PlayerWrapper>
    <div>
      {player.name}({player.choice})
      <div>{player.score}</div>
    </div>
    </PlayerWrapper>
  )
}

export default Player
