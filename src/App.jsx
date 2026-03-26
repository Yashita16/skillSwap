import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SkillsPage from './pages/SkillsPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/skills' element={<SkillsPage />}></Route>
      </Routes>
      
    </div>
  )
}

export default App
