import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.jpeg'
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <div className="header one-edge-shadow ">
                <Link className='link' to = '/'> <img className="header__logo" src={logo} alt='logo'/></Link>
               
        
                <div className="header__nav">
                    <div className="header__option">
                        <Link className='link btn' to = '/'>Home</Link>
                    </div>
                    <div className="header__option">
                        <Link className='link btn' to = '/AboutUs'>About Us</Link>

                    </div>
                    <div className="header__option">
                        <Link className='link btn' to = '/'>Add Book</Link>

                    </div>
                </div>

                <div className="header__buttons">
                    <input type="button" className="header__login" value="  Login  ">
                    </input>
                    <input type="button" className="header__signUp" value="Sign Up">
                    </input>
                </div>
            </div>
        </>
    )
}

export default NavBar
