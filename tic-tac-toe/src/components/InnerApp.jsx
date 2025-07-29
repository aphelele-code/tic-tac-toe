import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Game from './Game';
import {GlobalStyle} from './styles/Global.styled'
import Header from './Header/Header';




const InnerApp = () => {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
};

export default InnerApp