import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import ChatState from './context/ChatState';
import Login from './components/Login';
import GlobalChat from './components/GlobalChat';
import Singup from './components/Singup';
import { useState } from 'react';


function App() {
  return (
    <>
    <ChatState>
    <Router>
    <Navbar/>
    <Routes>
        <Route exact path="/about" element = {<About/>}>
          
          </Route>
        <Route exact path="/" element = { <Home /> }>
         
          </Route>
        <Route exact path="/GlobalChat" element = { <GlobalChat/> }>
         
          </Route>
        <Route exact path="/login" element = { <Login />}>
         
          </Route>
        <Route exact path="/singup" element = { <Singup/>}>
         
          </Route>
        
      </Routes>
      </Router>
      </ChatState>
    </>
  );
}

export default App;
