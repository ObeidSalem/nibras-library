import React from 'react'
import ContactPopup from './ContactPopup'
import ReportPopup from './ReportPopup'
import {useState} from 'react'

const BookList = ({books}) => {
    const [contactBtnPopUp, setContactBtnPopUp] = useState(false)
    const [reportBtnPopUp, setReportBtnPopUp] = useState(false)


    return (
        <>
            {books.map(book =>(
                <div className="book__container" key={book.id}>
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
                        <input onClick={() => setContactBtnPopUp(true)} className='book__contact' type="button" value="Contact"></input> 
                        <input className='book__favorite InActiveFavorite' type="button" value=""></input> 
                        <ContactPopup trigger={contactBtnPopUp} setTrigger={setContactBtnPopUp}>
                            <h3>Contact Details</h3>
                            <hr></hr>
                            <h5>Book Name:   {book.title}</h5>
                            <h5>Book Description:   {book.description}</h5> 
                            <h5>Owner's Name:   {/*book.id*/}Obeid Salem Ahmed Bashwaer</h5> 
                            <h5>Email:  {/*book.email*/}o.salem322@gmail.com</h5> 
                            <h5>Location: {/*book.location*/}IIUM Gombak campus</h5> 
                            <h5>Phone No.:  {/*book.phoneNo*/}+601116942582</h5> 
                            <br></br>
                        </ContactPopup>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BookList
