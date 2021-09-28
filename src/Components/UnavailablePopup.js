import React from 'react'
import "./Popup.css"

const UnavailablePopup = (props) => {
    return ( props.trigger) ? (
        <div className="popup">
            <div className="popup__container">
                <h2>This book currently unavailable.</h2>
                <br/>
                <h4>You may add this book to your favorite list.</h4>
                <br/><br/>
                <button onClick={() => props.setTrigger(false)} className="close__button">CANCEL</button>
            </div>
        </div>
    ) : "";
}

export default UnavailablePopup
