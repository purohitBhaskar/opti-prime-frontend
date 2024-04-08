import React from 'react'
import "./App.css"
import LeftBar from "../src/components/LeftBar"
import TopBar from "../src/components/TopBar"
import MainContent from './components/MainContent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GeneratorOne from "../src/components/GeneratorOne"
import GeneratorTwo from "../src/components/GeneratorTwo"
const App = () => {
  return (
    <Router>
      <div className='app'>
        <LeftBar />
        <div className="right-section">
          <TopBar />
          <Routes>
            <Route path='/generator1' element={<GeneratorOne/>}></Route>
            <Route path='/generator2' element={<GeneratorTwo/>}></Route>
            <Route path='/' element={<MainContent/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App