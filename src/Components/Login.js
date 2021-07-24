import React from 'react'
import { Link } from 'react-router-dom'
import logo_pic from '../img/logo.jpeg'
import './Login.css'

const Login = () => {
    return (
        <div className="main" >
        <div  className="pic">
        <img className="l-img"src={logo_pic} alt="hadhrami-pic" />
        </div>
        <hr />
        <div className="main-text">
        <br /><br />
        
        <br />
        <input id="emAndPass" type="email" placeholder="email"/>
        <br /><br />
        <input id="emAndPass" type="password" placeholder="password"/>
        
        <br />
       

        
        

        <br />


        <input type="button" className="header__signUp" value="Log In"></input>

        <h5>Don’t have an account?  Sing Up </h5>



        </div>
        

    </div>

                
    )
}

export default Login