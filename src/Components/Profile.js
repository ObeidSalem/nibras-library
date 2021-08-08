import React from 'react'
import './Profile.css'
import { FiEdit } from "react-icons/fi";


const Profile = ({myFavorite, myBooks}) => {
    return (
        <div className="profile__container">
            <div className="profile__right">
                <div className='profile__userInfo'>
                    <div>
                        <img className="profile__image" src='/images/blank-profile-image.png' alt="Profile Image"/>
                    </div>
                    <div className='right'><FiEdit size='1.5em'/></div>

                    <div className='profile__info'>
                        <h5 class='profile__details'>User Name should be here</h5>
                        <h5 class='profile__details'>User Phone Number should be here</h5>
                        <h5 class='profile__details'>User Email should be here</h5>
                        <h5 class='profile__details'>User Location should be here</h5>
                    </div>
                    <div className='right'><FiEdit size='1.5em'/></div>
                    <input className='sign__out' type='button' value='Sign Out'></input>
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
                            <div className="myBook__left">
                                <img className="book__image__list" src={book.image}/>
                            </div>
                            <div className='book__right__list'>
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
                                    <input className='book__contact' type="button" value="Contact"></input> 
                                    <input className='book__favorite InActiveFavorite' type="button" value=""></input> 
                                </div>
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
                            <div className="myBook__left">
                                <img className="book__image__list" src={book.image}/>
                            </div>
                            <div className='book__right__list'>
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
                                    <input className='book__contact' type="button" value="Mark as Unavailable"></input> 
                                    <input className='book__favorite' type="button" value="Delete"></input> 
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile
