import React from 'react'
import "./Popup.css"

const ReportPopup = (props) => {

    function gitcreateAccount() {
    return new Promise(function(resolve, reject) {
        if (true) {
            resolve()
            console.log("Loged in")
        } else {
          reject("No current user")
        }
      })
    }
    const handleReport = async ()=>{
        console.log(props.book)
        try {
            await props.refReports
            .doc(props.book.id)
            .set(props.book)

          } catch (err) {
            console.log(err)
          }   
        props.setTrigger(false)
    }
    return ( props.trigger) ? (
        <div className="popup">
            <div className="popup__container">
                <input 
                    onClick={() =>{
                       handleReport()
                    }}
                    type="submit" 
                    className="save__button" 
                    value="REPORT"
                ></input>
                <button onClick={() => props.setTrigger(false)} className="close__button">CANCEL</button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default ReportPopup
