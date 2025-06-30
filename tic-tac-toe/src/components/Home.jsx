import React from 'react'
import Button from './Button/Button.jsx'
import './Home.styled.jsx'
import {useNavigate} from 'react-router-dom'
import { Container } from './styles/General.styled.jsx'
import {Title} from './styles/General.styled.jsx'
import { SubTitle } from './styles/General.styled.jsx'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
    
  <Container>

  
<Title >TicTacToe</Title>
<SubTitle>Play with a friend!</SubTitle>
    <Button onClick={() =>{
      navigate('/game')
    }} label='Play Now' >Play Now</Button>
    </Container>
    </div>
  )
}

export default Home
