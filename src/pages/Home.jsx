import React from 'react'
import Navbar from '../components/Navbar'
import IntroSection from '../components/IntroSection'
import HowWorks from '../components/HowWorks'
import FeaturedSkills from '../components/FeaturedSkills'
import SuggestedUser from '../components/SuggestedUser'
import ExplorePeople from '../components/Explorepeople'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <HowWorks />
      <FeaturedSkills />
      <ExplorePeople />
      <Contact />
      

      
      
    </div>
  )
}

export default Home
