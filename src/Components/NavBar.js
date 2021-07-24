import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { CgMenuRightAlt, CgCloseO } from "react-icons/cg";
import logo from '../img/logo.jpeg'
import './NavBar.css'

const NavBar = () => {
    const [show, setShow] = useState(1);
    
    const menuStyle = ["header__navBtn active", "header__navBtn inActive"]
    return (
        <>
            <div className="header one-edge-shadow ">
              
                <div className="header__container">
                    <Link className='link' to = '/'> <img className="header__logo" src={logo} alt='logo'/></Link>
                
                    <div className={menuStyle[show]} id='header__navBtn'>
                        <div className="icon close" onClick={()=>{
                            setShow(1)
                            console.log('Hide the menu')
                        }}> 
                            <CgCloseO size='2em'/>
                        </div>

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
                            
                            <Link className='btnlink' to = '/login'>
                            <input type="button" className="header__login" value="Login">
                            </input>
                            </Link>
                            <Link className='btnlink' to = '/singUp'>
                            <input type="button" className="header__signUp" value="Sign Up">
                            </input>
                            </Link>
                        </div>
                    </div>
                    <div className="icon menu" onClick={()=>{
                            setShow(0)
                            console.log('Show the menu')
                    }}>
                        <CgMenuRightAlt size='2em' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
