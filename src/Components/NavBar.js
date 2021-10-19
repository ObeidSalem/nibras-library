import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { CgMenuRightAlt, CgCloseO } from "react-icons/cg";
import logo from '../img/logo.jpeg'
import './NavBar.css'
import { useAuth } from "../context/AuthContext"



const NavBar = () => {
    const [show, setShow] = useState(1);
    const menuStyle = ["header__navBtn active", "header__navBtn inActive"]
    const { currentUser } = useAuth()
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
                                <Link className='link btn' to = '/' onClick={()=>{setShow(1)}}>Home</Link>
                            </div>
                            <div className="header__option">
                                <Link className='link btn' to = '/AboutUs' onClick={()=>{setShow(1)}}>About Us</Link>

                            </div> 
                            <div className="header__option">
                                <Link className='link btn' to = '/AddBook' onClick={()=>{setShow(1)}}>Add Book</Link>

                            </div>
                        </div>

                        <div className="header__buttons">
                            {currentUser &&  
                                <Link className='btnlink sign__out' to = '/Profile' onClick={()=>{setShow(1)}}>
                                    My Profile
                                </Link> }
                            {!currentUser && 
                            <>
                                <Link className='btnlink header__signUp header__login' to = '/login' onClick={()=>{setShow(1)}}>
                                    Login
                                </Link>
                                <Link className='btnlink' to = '/singUp' onClick={()=>{setShow(1)}}>
                                    <input type="button" className="header__signUp" value="Sign Up"></input>
                                </Link> 
                            </>
                            }
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
