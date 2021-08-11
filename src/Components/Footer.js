import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import hadhrami_pic from '../img/hadhrami_pic.png'
const Footer = () => {
    return (
        <>
            <div className="margin__top__60"></div>
            <div className= "main__footer">
                <hr id="footer__horizontal__line" /> 
                <div className= " footer__container ">
                    <div className="club__logo">
                        <img className="footer__image" src={hadhrami_pic} alt="hadhrami-pic"/>
                    </div>
                    <div className="Footer__info">
                        <ul className="footer__ul">
                            <li className="footer__li">Copyright &copy;{new Date().getUTCFullYear()} Hadhrami Students CHapter, All Rights Reserved</li>
                            <li className="footer__li">Nibrashs1@gmail.com</li>
                            <li className="footer__li">HADHRAMI_IIUM</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
