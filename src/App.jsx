import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Home from './components/pages/home';
import NavBar from './components/ui-elements/nav bar';
import  {Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
