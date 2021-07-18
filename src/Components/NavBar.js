import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { CgMenuRightAlt, CgCloseO } from "react-icons/cg";
import logo from '../img/logo.jpeg'
import './NavBar.css'

const NavBar = () => {
    // const [show, setShow] = useState(false);
    return (
        <>
            <div className="header one-edge-shadow ">
              
                <div className="header__container">
                    <Link className='link' to = '/'> <img className="header__logo" src={logo} alt='logo'/></Link>
                
                    <div className="header__navBtn" id='header__navBtn'>
                        <div className="icon close" onClick={()=>{
                            // setShow(false)
                            console.log('Clicked')
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
                            <input type="button" className="header__login" value="Login">
                            </input>
                            <input type="button" className="header__signUp" value="Sign Up">
                            </input>
                        </div>
                    </div>
                    <div className="icon menu" OnClick={()=>{
                            
                    }}>
                        <CgMenuRightAlt size='2em' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
