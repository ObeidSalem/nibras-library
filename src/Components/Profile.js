import React from 'react'
import { useState } from 'react'
import './Profile.css'
import { FiEdit } from "react-icons/fi";
import ImageUpdatePopup from './ImageUpdatePopup';
import { useAuth } from "../context/AuthContext"
import { useHistory } from "react-router-dom"



const Profile = ({firebase, refBooks, email, users, myFavorite, myBooks}) => {
    const [imageUpdateTrigger, setImageUpdateTrigger] = useState(false)
    const [infoUpdateTrigger, setInfoUpdateTrigger] = useState(false)
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    const user = users[0]

    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          history.push("/")
        } catch {
          setError("Failed to log out")
        }
    }

    function handleDelete(book) {
        console.log(book.id)
        refBooks.doc(book.id).delete();
    }

    console.log(currentUser)
    return (currentUser) ?  (
        <div className="profile__container">
            <div className="profile__right">
                <div className='profile__userInfo'>
                    <div>
                        <img className="profile__image" src='/images/blank-profile-image.png' alt="Profile Image"/>
                        <ImageUpdatePopup trigger={imageUpdateTrigger} setTrigger={setImageUpdateTrigger}>
                        <h3>Update Image Info</h3>
                        <hr></hr>
                        <form>
                            <h2>yet to be developed</h2>
                            <button type='submit' className="save__button">SAVE</button>
                            <br></br>
                            <br></br>
                        </form>
                     </ImageUpdatePopup>
                    </div>
                    <div onClick={() => setImageUpdateTrigger(true)} className='right'><FiEdit className = 'edit__icon' /></div>

                    <div className='profile__info'>
                        <h4 class='profile__details'>{(email) ? user.firstNameRef : ""}</h4>
                        <h4 class='profile__details'>{email && currentUser.email || ''}</h4>
                        <h4 class='profile__details'>{email && user.phoneRef || ''}</h4>
                        <h4 class='profile__details'>{email && user.addressRef || ''}</h4>
                    </div>
                    <ImageUpdatePopup trigger={infoUpdateTrigger} setTrigger={setInfoUpdateTrigger}>
                        <h3>Update your Info</h3>
                        <hr></hr>
                        <form>
                            <div className='row__inputs'>
                                <input  className='input__failed ten__px__margin__to__right' type="input" placeholder="First Name:" required></input > 
                                <input  className='input__failed ' type="input" placeholder="last Name:" required></input > 
                            </div>
                            <div >
                                <input  className='input__failed' type="input" placeholder="Phone Number:" required></input > 
                                <input  className='input__failed' type="password" placeholder="Old Password:" required></input > 
                                <input  className='input__failed' type="password" placeholder="New Password:" required></input > 
                                <input  className='input__failed' type="password" placeholder="Confirm New Password:" required></input > 
                            </div>
                            <button type='submit' className="save__button">SAVE</button>
                            <br></br>
                            <br></br>
                        </form>
                     </ImageUpdatePopup>
                    <div onClick={() => setInfoUpdateTrigger(true)} className='right'><FiEdit className = 'edit__icon' /></div>
                    <input className='sign__out' type='button' onClick={handleLogout} value='Sign Out'></input>
                </div>
            </div>
            <div className="profile__left">
                <div className="profile__myFavorite">
                    <h2 className="left">
                        My Favorite Books
                    </h2>
                    <hr></hr>
                    {myFavorite.map(book =>(
                        <div className="myProfileBook__container" key={book.id}>
                            <div className="myProfileBook__book">
                                <div className="myBook__left">
                                    <img className="book__image" src={book.coverPage || "https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED"}/>
                                </div>
                                <div className='book__right__list'>
                                    <h5 className="left">{book.title}</h5>
                                    <h6 className="left">
                                    Category: {book.category}
                                    </h6>
                                    <h6 className="left">
                                    Author: {book.author}
                                    </h6>
        
                                    
                                </div>
                            </div>
                            <div className="book__buttons__profile">
                            <input className='book__contact' type="button" value="Contact"></input> 
                                    <input className='book__favorite InActiveFavorite' type="button" value=""></input> 
                            </div>
                        </div>
                    ))}
                </div>
                <div className="profile__myBooks">
                    <h2 className="left">
                        <br></br>
                        My Books
                    </h2>
                    <hr></hr>
                    {myBooks.map(book =>(
                        <div className="myProfileBook__container" key={book.id}>
                            <div className="myProfileBook__book">
                                <div className="myBook__left">
                                    <img className="book__image" src={book.coverPage || "https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED"}/>
                                </div>
                                <div className='book__right__list'>
                                    <h5 className="left">{book.title}</h5>
                                    <h6 className="left">
                                    Category: {book.category}
                                    </h6>
                                    <h6 className="left">
                                    Author: {book.author}
                                    </h6>
        
                                    
                                </div>
                            </div>
                            <div className="book__buttons__profile">
                                <input className='book__contact' type="button" value="Mark as Unavailable"></input> 
                                <input onClick={() => (handleDelete(book))} className='book__delete' type="button" value="Delete"></input> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ) : "";
}

export default Profile
