import React from 'react'
import "./Popup.css"

const UnavailablePopup = (props) => {
    return ( props.trigger) ? (
        <div className="popup">
            <div className="popup__container">
                <h2>This book currently is unavailable.</h2>
                <br/>
                <h4>The owner of this book has decided to mark this book as unavailable, as this book Potentially has been loaned to someone.</h4>
                <br/><br/>
                <button onClick={() => props.setTrigger(false)} className="close__button">CANCEL</button>
            </div>
        </div>
    ) : "";
}

export default UnavailablePopup
