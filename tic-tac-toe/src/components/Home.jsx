import React, {useContext} from 'react'
import Button from './Button/Button.jsx'
import './Home.styled.jsx'
import {useNavigate} from 'react-router-dom'
import { Container } from './styles/General.styled.jsx'
import {Title} from './styles/General.styled.jsx'
import { SubTitle } from './styles/General.styled.jsx'
import {SfxContext} from '../components/context/SfxContext.jsx'
const Home = () => {
  const navigate = useNavigate();
  const {playHoverSfx} = useContext(SfxContext)
  return (
    <div>
    
  <Container columnBased>

  
<Title >TicTacToe</Title>
<SubTitle>Play with a friend!</SubTitle>
    <Button onClick={() =>{
      navigate('/game')
    }} label='Play Now' 
    onMouseEnter={playHoverSfx}
    >Play Now</Button>
    </Container>
    </div>
  )
}

export default Home
