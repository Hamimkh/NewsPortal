import React, {useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate()
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const handleLogoClick=()=>{
      navigate("/")

    }

    return (
      <div className={`navbar ${menuOpen ? 'open' : ''}`}>
        <div className="logo" onClick={handleLogoClick}>NewsPortal</div>
        
         <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
         <span className='close-icon' onClick={toggleMenu}>&times;</span>
            <li className="items"><Link to="/" className='navItem'>Home</Link></li>
            <li className="items"><Link to="/business" className='navItem'>Business</Link></li>
            <li className="items"><Link to="/entertainment" className='navItem' >Entertainment</Link></li>
            <li className="items"><Link to="/general" className='navItem'>General</Link></li>
            <li className="items"><Link to="/health" className='navItem'>Health</Link></li>
            <li className="items"><Link to="/science" className='navItem'>Science</Link></li>
            <li className="items"><Link to="/sports" className='navItem'>Sports</Link></li>
            <li className="items"><Link to="/technology" className='navItem'>Technology</Link></li>
        </ul>
      </div>
    )
  }

export default Navbar
