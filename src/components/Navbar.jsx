import React from 'react'
import { Link } from 'react-router-dom';
import assets from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
   const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Explore', path: '/explore' },
        { name: 'Connection', path: '/connection' },
        { name: 'Profile', path: '/profile' },
    ];

    const {user , setUser , navigate  } =useAppContext();

    const ref = React.useRef(null)

    
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

   
  return (
   
            
            <nav className='fixed top-0 left-0 bg-primary w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50  bg-primary/80 shadow-md text-secondary backdrop-blur-lg py-3 md:py-4'>

                {/* Logo */}
                <Link to={'/'} className="flex items-center gap-2">
                <img src={assets.logo} alt="logo" className='w-10 h-10' />
                <span className='font-bold text-lg text-secondary'>SkillSwap</span>
                    
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8 hover: text-gray">
                    {navLinks.map((link, i) => (
                        <Link Link key={i} to={link.path} className='group flex flex-col gap-0.5  text-secondary '>
                            {link.name}
                            <div className='bg-primary-700   h-0.5 w-0 group-hover:w-full transition-all duration-30' />
                        </Link>
                    ))}
                   
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">

                  {!user ? <button onClick={
                    ()=>{
                      navigate('/login')
                    }
                  } className='px-8 py-2.5 rounded-full ml-4 transition-all duration-500 cursor-pointer "text-secondary bg-primary'>
                        Login
                    </button> :
                    <button  onClick={() => setUser(null)} className='px-8 py-2.5 rounded-full ml-4 transition-all duration-500 cursor-pointer text-secondary bg-primary '>
                        Logout
                    </button>
}
                   
                    

                </div>
                  

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    <button className='px-4 py-2 rounded-full transition-all duration-500 cursor-pointer $ text-secondary bg-primary' onClick={() => setIsMenuOpen(true)}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-primary text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-secondary transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path } onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}

                   

                    {!user ? <button  onClick={() => navigate('/login')} className="bg-primary-dull text-secondary px-8 py-2.5 rounded-full transition-all duration-500 cursor-pointer">
                        Login
                    </button> : <button onClick={() => setUser(null)} className="bg-primary-dull text-secondary px-8 py-2.5 rounded-full transition-all duration-500 cursor-pointer">
                        Logout
                    </button>}
                </div>
            </nav>
    
  )
}

export default Navbar
