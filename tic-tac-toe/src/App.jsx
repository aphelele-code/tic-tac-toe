import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import {GlobalStyle} from './components/styles/Global.styled'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/styles/Theme';
import ThemeContext from './components/context/ThemeContext';
import { useContext } from 'react';
import Header from './components/Header/Header';
import { ModalContext } from './components/context/ModalContext';
import { ModalContextProvider } from './components/context/ModalContext';



const App = () => {
const {handleModal} = useContext(ModalContext)
  const {theme} = useContext(ThemeContext)
console.log('theme:', theme)
  const mode = theme === 'light' ? lightTheme : darkTheme
  return (
    <ThemeProvider theme={mode} >
       
      <Router>
 
  <Header/>
        <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/game' element= {<Game/>}/>
        </Routes>
      
        <ModalContextProvider/>
            <GlobalStyle/> 
        
      </Router>
      <ModalContextProvider/>
    </ThemeProvider>
  )
}

export default App
