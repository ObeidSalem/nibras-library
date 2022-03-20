import React from 'react'
import ContactPopup from './ContactPopup'
import ReportPopup from './ReportPopup'
import UnavailablePopup from './UnavailablePopup'
import {useState} from 'react'
import { useAuth } from "../context/AuthContext"
import { useHistory } from "react-router-dom"


const BookList = ({books, refFirebase, refReports, myFavorite, refUsers, user}) => {
    const [contactBtnPopUp, setContactBtnPopUp] = useState(false)
    const [reportBtnPopUp, setReportBtnPopUp] = useState(false)
    const [availabilityBtnPopUp, setAvailabilityBtnPopUp] = useState(false)
    const [description, setDescription] = useState("")
    const [targetBtn, setTargetBtn] = useState()
    const { currentUser } = useAuth()
    const history = useHistory()

    const [favorites, setFavorites] = useState(myFavorite)
    const [isFavorite, setIsFavorite] = useState(0);
    const style = ["book__favorite InActiveFavorite", "book__favorite ActiveFavorite"]
    
    console.log(myFavorite)

    // let myFilter = books.favoriteBy.find(book =>  
    //     {for (let favorite = 0; favorite < myFavorite.length; favorite++){
    //         if (book.id === myFavorite[favorite]){
    //             return book
    //         }
    //     }}
    // )

    // async function handleFavorite() {
    //     try {
    //     console.log(user.id)
    //     console.log(favoriteID)
    //     const FieldValue = require('firebase-admin').firestore.FieldValue;
    //     await refUsers.doc(user.id).update({
    //         favorite: FieldValue.arrayUnion(favoriteID)
    //     })
    //     } catch (error){
    //         console.log(error);
    //     }
    //     console.log(user.favorite)
    // }

    async function handleFavorite(bookId) {
        if (!currentUser){
            history.push("/LogIn")
        }

        try {
            setFavorites(myFavorite)
            console.log(`user.id = ${user.id}`)
            console.log(`bookId = ${bookId}`)
            if (!favorites.includes(bookId)) {
                favorites.push(bookId)
                console.log(favorites)
                await refUsers.doc(user.id).update({ favorite: favorites })
            } 
            
            else if (favorites.includes(bookId)){
                const unfavored = favorites
                const Index = unfavored.indexOf(bookId)
                if (Index > -1) {
                    unfavored.splice(Index, 1)
                    setFavorites(unfavored)
                }
                console.log("unfavored after",unfavored)
        
                refUsers.doc(user.id).update({ 
                    favorite: favorites
                });
            }
        // const FieldValue = require('firebase-admin').firestore.FieldValue;
            // await refUsers.doc(user.id).update({ favorite: refFirebase.FieldValue.delete()})
            // await refUsers.doc(user.id).collection(favorites).doc(favoriteID).set(favoriteID)
            // await refUsers.doc(user.id).update({ favorite: new Array(favorites) })

        } catch (error){    
            console.log(error);
        }
        console.log(user.favorite)
    }


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
                        {(book.id == favorites)? 
                            <div onClick={() =>  {handleFavorite(book.id)}} 
                                className={style[1]}
                            ></div> 
                            : 
                            
                            <div onClick={() => {handleFavorite(book.id)}} 
                                className={style[0]} 
                            ></div> 
                        }
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
