import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SkillsPage from './pages/SkillsPage'
import Explore from './pages/Explore'
import Profile from './pages/Profile'
import SelfProfile from './pages/SelfProfile'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/skills' element={<SkillsPage />}></Route>
        <Route path='/skills' element={<SkillsPage />}></Route>
        <Route path='/explore' element={<Explore></Explore>}></Route>
        <Route path='/profile' element={<SelfProfile></SelfProfile>}></Route>

         <Route path="/profile/:id" element={<Profile />} />
         
      </Routes>
      
    </div>
  )
}

export default App
