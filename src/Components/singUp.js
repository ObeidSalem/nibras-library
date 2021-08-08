import React from 'react'
import { Link } from 'react-router-dom'
import './SingUp.css'
import logo_pic from '../img/logo.jpeg'

const SignUp = () => {
    return (

        <div className="main" >
            <div  className="pic">
            <img className="l-img"src={logo_pic} alt="hadhrami-pic" />
            </div>
            <hr />
            <div className="main-text">
            <br /><br />
            <div className="name-box">

            <input type="text" placeholder="First name"/>
            <input type="text" placeholder="Last name" />
           
            </div>
            <br />
            <input type="email" placeholder="email"/>
            <br />
            <input type="password" placeholder="password"/>
            <br />
            <input type="password" placeholder="conform password"/>
            <br />     
            <input type="text" placeholder="phone number" />

            <h5>Do you live Inside IIUM Gombak Campuss? </h5>
            

            <br />


            <input type="button" className="header__signUp" value="Sign Up"></input>





            </div>
            

        </div>


        
        
    )
}

export default SignUp
