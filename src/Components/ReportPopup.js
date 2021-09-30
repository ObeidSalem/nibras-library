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

    const handleReport = async (description, book)=>{
        console.log(book)
        try {
            await props.refReports
            .doc(book.id)
            .set(book)

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
                <button onClick={() => handleReport(props.description, props.book)} className="close__button">CANCEL</button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default ReportPopup
