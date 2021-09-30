import React from 'react'
import { useParams } from 'react-router'
import {useState} from 'react'

import "./Popup.css"

const BookInfoPopup = (props) => {
    console.log(props)

    return ( props.trigger) ?  ( 
        <div className="popup">
            <div className="popup__container left">
                <h3>Contact Details</h3>
                <hr></hr>
                <h5>Book Name:   {props.book.title}</h5>
                <h5>Book Description:   {props.book.description}</h5> 
                <h5>Owner's Name:   {props.book.owner}</h5> 
                <h5>Email:  {props.book.email}</h5> 
                <h5>Location: {props.book.location}</h5> 
                <h5>Phone No.:  {props.book.phoneNo}</h5> 
                <br></br>
                <button onClick={() => props.setTrigger(false)} className="close__button">CANCEL</button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default BookInfoPopup
