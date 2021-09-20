import React from 'react'
import ContactPopup from './ContactPopup'
import ReportPopup from './ReportPopup'
import {useState} from 'react'
import { useAuth } from "../context/AuthContext"
import { useHistory } from "react-router-dom"


const BookList = ({books}) => {
    const [contactBtnPopUp, setContactBtnPopUp] = useState(false)
    const [targetBtn, setTargetBtn] = useState()
    const [reportBtnPopUp, setReportBtnPopUp] = useState(false)
    const { currentUser } = useAuth()
    const history = useHistory()


    return (
        <>
            {books.map(book =>(
                <div className="book__container" key={book.id} id={book.id}>
                    <input onClick={() => setReportBtnPopUp(true)} className='book__report reportIcon' type="button" value=""></input>
                     <ReportPopup trigger={reportBtnPopUp} setTrigger={setReportBtnPopUp}>
                        <h3>Report</h3>
                        <hr></hr>
                        <form>
                            <textarea  type="textarea" placeholder="Description:" rows="4" cols="50"></textarea > 
                            <br></br>
                            <br></br>
                        </form>
                     </ReportPopup>
                    <img className="book__image" src={book.image}/>
                    <h5 className="left">{book.title}</h5>
                    <h6 className="left">
                    Category: {book.category}
                    </h6>
                    <h6 className="left">
                    Author: {book.author}
                    </h6>
                    <h6 className="left">
                    code: {book.code}
                    </h6>
                    {/* <p className="left">
                        {book.description}                        
                    </p> */}
                    <div className="book__buttons">
                        {currentUser && <input onClick={() => (setTargetBtn(book), setContactBtnPopUp(true), console.log(books), console.log(book)) } className='book__contact' type="button" value="Contact"></input> }
                        {!currentUser && <input onClick={() => history.push("/LogIn")} className='book__contact' type="button" value="Contact"></input> }
                        {currentUser && <input onClick={() => alert("Added to favorite >> Yet to be developed")} className='book__favorite InActiveFavorite' type="button" value=""></input>  }
                        {!currentUser && <input onClick={() => history.push("/LogIn")} className='book__favorite InActiveFavorite' type="button" value=""></input>  }

                        <ContactPopup book={targetBtn} trigger={contactBtnPopUp} setTrigger={setContactBtnPopUp}>
                        </ContactPopup>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BookList
