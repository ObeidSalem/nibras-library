import React from 'react'
import './AboutUs.css'
import hadhrami_pic from '../img/hadhrami_pic.png'
import logo from '../img/logo.png'



const AboutUs = () => {
    return (
        // <!DOCTYPE html>
        // <html>
        // <head>
        //     <title>About Us</title>
        //     <link rel="preconnect" href="https://fonts.googleapis.com">
        // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        // <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
        //     <link rel="stylesheet" type="text/css" href="main.css">
        // </head>
        // <body>
        <div className="container">
            <div className="bg1">
                <div className="AboutUs">
                    <h1>About Us</h1>
                </div>
            </div>
            <div className="background bigimage1 section__container">
                <img className="Chapter__image" src={hadhrami_pic}></img>
            </div>
            <div className="background bigimage5 section__container">
                <div className="Title white">
                    <h2>Who We Are?</h2>
                </div>
                <div className="paragraph white">
                    <p>
                    An NGO that aims to build the character of the Hadhrami students. Encouraging them to serve their surrounding community by achieving projects, organizing events and engaging with the international community.                    </p>
                </div>
            </div>
            <div className="background bigimage2 section__container">
                <div className="">
                    {/* <h2>Our Goals</h2> */}
                    <img className="Chapter__image" src={logo}></img>
                    <div className="black">
                        <h2>
                        Where knowledge is shared
                        </h2>
                        <br />
                        <h3>
                        Throwing away books is a waste, keeping those books on the shelf is STILL a waste. 
                        </h3>
                    </div>
                </div>
            </div>
            <div className="background bigimage3 section__container">
                <div className="Title white">
                    <h2>About Us?</h2>
                </div>
                <div className="paragraph white">
                    <p>
                    Nibras is a sustainable project was initiated by the Hadhrami students chapter-IIUM. Nibras is a virtual library platform that offers the IIUM community the magnificent opportunity to lend & borrow books. Nibras Library aims to facilitate the process of learning and sharing knowledge.                    </p>
                </div>
            </div>
            <div className="background bigimage4 section__container">
                <div className="Title black">
                    <h2>Our Goals</h2>
                </div>
                <div className="paragraph black">
                    <p>
                    To facilitate the process of learning and spreading the knowledge.                    
                    <br/>To encourage the IIUM community to share the knowledge.
                    <br/>To urge students to make the best use of knowledge.
                    <br/>To grant students the ability to make an intellectual meaningful content.
                    <br/>To enlighten the IIUM community about modern intellectual issues.
                    </p>
                </div>
            </div>
        </div>
        // </body>
        // </html>
    )
}

export default AboutUs
