import React from 'react'
import "./Popup.css"

const BookInfoPopup = (props) => {
    return ( props.trigger) ? (
        <div className="popup">
            <div className="popup__container">
                <button onClick={() => props.setTrigger(false)} className="close__button">CANCEL</button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default BookInfoPopup
