import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import hadhrami_pic from '../img/hadhrami_pic.png'
const Footer = () => {
    return (
        
        <div className= "main-footer">
            <hr class="hr1" /> 
            <div className= " continer">
                <div className="row" >
                {/* colum1 */}
                <div className="col1">
                 <img className="footer-img"src={hadhrami_pic} alt="hadhrami-pic" width="50" height="80"/>
                </div>
                {/* colum2 */}
                <div className="col2">
                    <ul clasName="list-unstyled">
                        <li>copyright &copy;{new Date().getUTCFullYear()} Hadhrami Students CHapter, All Rights Reserved</li>
                        <li>Nibrashs1@gmail.com</li>
                        <li>hadhrami_iium</li>
                    
                    </ul>
                </div>

                </div>

            </div>
           
        </div>
    )
}

export default Footer
