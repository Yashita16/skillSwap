import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const IntroSection = () => {
  const navigate = useNavigate()

  return (
    <div className="relative w-full">


      <img
        src={assets.intro_background}
        alt="background intro"
        className="w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary leading-tight max-w-2xl">
          Exchange Skills, Grow Together
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-secondary/90 max-w-md sm:max-w-xl">
          Connect with people, learn new skills, and share what you know
        </p>

        <button
          onClick={() => navigate('/explore')}
          className="mt-2 px-8 py-3 bg-secondary text-white text-sm sm:text-base font-semibold rounded-full hover:opacity-90 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          Get Started
        </button>

      </div>
    </div>
  )
}

export default IntroSection