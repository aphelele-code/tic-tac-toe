import React from 'react'
import { PlayerWrapper } from './Player.styled'
import Avatar from 'react-nice-avatar'
import { SubTitle } from '../styles/General.styled'
import { AvatarWrapper } from './Player.styled'

const Player = ({player, isPlayerActive}) => {


  return (
    <PlayerWrapper >
    {/* <div> */}
    <AvatarWrapper isPlayerActive={isPlayerActive ?? false}>
 <Avatar style={{ width: '10rem', height: '10rem' }} {...player.avatarConfig} />
    </AvatarWrapper>
     <SubTitle>{player.name}({player.choice.toUpperCase()})</SubTitle> 
      <SubTitle >{player.score}</SubTitle>
    {/* </div> */}
    </PlayerWrapper>
  )
}

export default Player
