import React from 'react'
import ContactPopup from './ContactPopup'
import ReportPopup from './ReportPopup'
import UnavailablePopup from './UnavailablePopup'
import {useState} from 'react'
import { useAuth } from "../context/AuthContext"
import { useHistory } from "react-router-dom"


const BookList = ({books, refReports}) => {
    const [contactBtnPopUp, setContactBtnPopUp] = useState(false)
    const [reportBtnPopUp, setReportBtnPopUp] = useState(false)
    const [availabilityBtnPopUp, setAvailabilityBtnPopUp] = useState(false)
    const [description, setDescription] = useState("")
    const [targetBtn, setTargetBtn] = useState()
    const { currentUser } = useAuth()
    const history = useHistory()

    
    return (
        <>
            {books.map(book =>(
                <div className="book__container" key={book.id} id={book.id}>
                    <div className="book__content">
                        <input onClick={() => setReportBtnPopUp(true)}
                        className='book__report reportIcon' type="button" value=""></input>
                        <img className="book__image" 
                            src={book.coverPage}
                            onError={(e)=>{e.target.onerror = null; e.target.src="/images/Book_cover_alt.jpg"}}
                        />                        
                        <h5 className="left">{book.title}</h5>
                        <h6 className="left">
                        Author: {book.author}
                        </h6>
                        <h6 className="left">
                        Category: {book.category}
                        </h6>
                    </div>
                    <div className="book__buttons__home">
                        {(book.isAvailable) ?
                            <div 
                                onClick={currentUser ? (()=>{
                                    setTargetBtn(book); 
                                    setContactBtnPopUp(true)
                                }) :  (()=>history.push("/LogIn"))}  
                                className='book__contact' 
                            >
                                Contact
                            </div> 
                        : 
                            <div 
                                onClick={() => setAvailabilityBtnPopUp(true) } 
                                className='book__contact' 
                                type="button"
                                style={{
                                    borderColor: "#221246",
                                    color: "#221246",
                                    backgroundColor: "#eee"
                                }}  
                                value="Unavailable"
                            >
                                Unavailable
                            </div> 
                        }
                        {/* {currentUser && 
                            <div onClick={() => alert("Added to favorite >> Yet to be developed")} 
                                className='book__favorite InActiveFavorite' 
                            ></div>  
                        }
                        {!currentUser && 
                            <div onClick={() => history.push("/LogIn")} 
                                className='book__favorite InActiveFavorite' 
                            ></div>  
                        } */}
                    </div>
                </div>
            ))}
            <ReportPopup description={description} refReports={refReports} book={targetBtn} trigger={reportBtnPopUp} setTrigger={setReportBtnPopUp}>
                <h3>Report</h3>
                <hr></hr>
                <form>
                    {/* <textarea  type="textarea" placeholder="Description:" ></textarea >  */}
                    <textarea
                        // className="input__style"   
                        placeholder="Description:"
                        rows="4" cols="50"
                        type="text"
                        value={description}
                        onChange={(e) => {setDescription(e.target.value)}}
                    />
                    <br></br>
                    <br></br>
                </form>
            </ReportPopup>
            <ContactPopup book={targetBtn} trigger={contactBtnPopUp} setTrigger={setContactBtnPopUp}>
            
            </ContactPopup>
            <UnavailablePopup trigger={availabilityBtnPopUp} setTrigger={setAvailabilityBtnPopUp}>
                <h3>Report</h3>
                <hr></hr>
                <form>
                    <textarea  type="textarea" placeholder="Description:" rows="4" cols="50"></textarea > 
                    <br></br>
                    <br></br>
                </form>
            </UnavailablePopup>
        </>
    )
}

export default BookList
