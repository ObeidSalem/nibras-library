import React from 'react'
import { useState } from 'react'
import './Profile.css'
import { FiEdit } from "react-icons/fi";
import ImageUpdatePopup from './ImageUpdatePopup';
import { useAuth } from "../context/AuthContext"
import { useHistory } from "react-router-dom"
import firebase from "../firebase";
import imageCompression from 'browser-image-compression';




const Profile = ({favoritesInUsersCollections, refBooks, refUsers, email, users, myFavorite, myBooks}) => {
    const [imageUpdateTrigger, setImageUpdateTrigger] = useState(false)
    const [infoUpdateTrigger, setInfoUpdateTrigger] = useState(false)
    const [isAvailable, setIsAvailable] = useState(true)
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    const user = users[0]
    const [userFavorite, userUserFavorite] = useState([])
    const [loading, setLoading] = useState(false)
    const [NameRef, setName] = useState("")
    const [phoneRef, setPhoneNo] = useState("")
    const [addressRef, setAddress] = useState("")
    const [fileUrl, setFileUrl] = React.useState(null);
    const [isUploaded, setIsUploaded] = useState(false)
    const [avatar, setAvatar] = useState('');


    
    // console.log(Userid)

    async function handleSubmit() {
        try {
        // console.log(Userid)
        await refUsers.doc(user.id).update({
            firstNameRef:NameRef,
            phoneRef:phoneRef,
            addressRef:addressRef
        })
        } catch (error){
            console.log(error);
        }
        console.log(user)
    }

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
        // console.log(book.id)
        refBooks.doc(book.id).delete();
    }

    function handleAvailability(book) {
        // console.log("before " + book.isAvailable)
        setIsAvailable(book.isAvailable)
        isAvailable ? setIsAvailable(false) : setIsAvailable(true);
        refBooks.doc(book.id).update({ 
            isAvailable: isAvailable
        });
        // console.log("after " + book.isAvailable)
    }

    async function handleImageUpload(event) {

        setIsUploaded(true)
  
        const imageFile = event.target.files[0];
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(imageFile.name);
        let imageURL = "";
        console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
        console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);
      
        const options = {
          maxSizeMB: 2,
          maxWidthOrHeight: 1920,
          useWebWorker: true
        }
        try {
          const compressedFile = await imageCompression(imageFile, options);
          console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
          console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
      
          await fileRef.put(compressedFile);
          setFileUrl(await fileRef.getDownloadURL().then(url => {
            console.log(url);
            imageURL = url;
          }));    
          refUsers.doc(user.id).update({ 
            UserAvatar: imageURL
          });
          setAvatar(user.UserAvatar)
          setIsUploaded(false)
          setImageUpdateTrigger(false)
          history.push("/Profile")
        } catch (error) {
          console.log(error);
        }
    }

    async function handleDeleteImage() {

        // const storageRef = firebase.storage().ref();        
        // var deleteFile = storageRef.refFromURL(user.UserAvatar);

        // deleteFile.delete().then(() => {
        //     console.log("File Deleted")
        // }).catch((error) => {
        //     console.log(error)
        // });

        try {  
            await refUsers.doc(user.id).update({ 
              UserAvatar: '/images/blank-profile-image.png'
            });
            setAvatar(user.UserAvatar)
            setImageUpdateTrigger(false)
            history.push("/Profile")
          } catch (error) {
            console.log(error);
          }
    }

    function handleUnfavored(book) {
        console.log("Unfavored Clicked")
        console.log("User.id", user.id);
        console.log("book.id", book.id)
        console.log("favoritesInUsersCollections",favoritesInUsersCollections)
        const unfavored = favoritesInUsersCollections
        const Index = unfavored.indexOf(book.id)
        console.log("Index",Index)
        if (Index > -1) {
            unfavored.splice(Index, 1)
        }
        console.log("unfavored after",unfavored)

        refUsers.doc(user.id).update({ 
            favorite: unfavored
        });
        history.push("/Profile")
    }

    return (currentUser) ?  (
        <div className="profile__container">
            <div className="profile__right">
                <div className='profile__userInfo'>
                    <div>
                        <img className="profile__image" src={email && user.UserAvatar || '/images/blank-profile-image.png'} alt="Profile Image"/>
                        <ImageUpdatePopup trigger={imageUpdateTrigger} setTrigger={setImageUpdateTrigger}>
                        <h3>Update Image</h3>
                        <hr></hr>
                        <form>
                            <input
                                className="input__style"   
                                placeholder="Book Title"
                                type="file"
                                value={setFileUrl || ""}
                                onChange={handleImageUpload}
                            />
                            {isUploaded && <p>Uploading...</p>}
                            <button 
                                onClick={(e) => { 
                                    e.preventDefault()
                                    handleDeleteImage()
                                    // setAvatar('/images/blank-profile-image.png')
                                  }}
                                type='submit' 
                                className="save__button">
                                    REMOVE PHOTO
                            </button>
                            <br></br>
                            <br></br>
                        </form>
                     </ImageUpdatePopup>
                    </div>
                    <div onClick={() => setImageUpdateTrigger(true)} className='right'><FiEdit className = 'edit__icon' /></div>

                    <div className='profile__info'>
                        <h4 className='profile__details'>{(email) ? user.firstNameRef : ""}</h4>
                        <h4 className='profile__details'>{(email) ? currentUser.email : ""}</h4>
                        <h4 className='profile__details'>{(email) ?  user.phoneRef : ""}</h4>
                        <h4 className='profile__details'>{(email) ?  user.addressRef : ""}</h4>
                    </div>
                    <ImageUpdatePopup trigger={infoUpdateTrigger} setTrigger={setInfoUpdateTrigger}>
                        <h3>Update your Info</h3>
                        <hr></hr>
                        <form>
                            <div >
                                <input  
                                    className='input__failed ' 
                                    type="input" 
                                    placeholder="New Name:" 
                                    value={NameRef} 
                                    onChange={(e) =>{setName(e.target.value)}} 
                                    required 
                                ></input > 
                            
                                <input  
                                    className='input__failed' 
                                    type="input" 
                                    placeholder="New Phone Number:" 
                                    value={phoneRef} 
                                    onChange={(e) => setPhoneNo(e.target.value)} 
                                    required 
                                ></input > 
                                <input  
                                    className='input__failed' 
                                    type="input" 
                                    placeholder="New address" 
                                    value={addressRef} 
                                    onChange={(e) => setAddress(e.target.value)} 
                                    required
                                ></input > 
                           
                            </div>
                            <input onClick={(e) =>{
                                e.preventDefault()
                                handleSubmit()
                                setInfoUpdateTrigger(false)
                            }}
                             type="submit" className="save__button" value="SAVE"></input>
                
                            <br></br>
                            <br></br>
                        </form>
                     </ImageUpdatePopup>
                    <div onClick={() => setInfoUpdateTrigger(true)} className='right'><FiEdit className = 'edit__icon' /></div>
                    <input className='sign__out' type='button' onClick={handleLogout} value='Sign Out'></input>
                </div>
            </div>
            <div className="profile__left">
                {/* <div className="profile__myFavorite">
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
                            <div className="book__buttons__profile"> */}
                                {/* <input 
                                    className='book__contact' 
                                    type="button" 
                                    value="Contact"
                                ></input>  */}
                                {/* {(book.isAvailable) ?
                                    <input 
                                        onClick={currentUser ? (()=>{
                                            // setTargetBtn(book); 
                                            // setContactBtnPopUp(true)
                                        }) :  (
                                            ()=>history.push("/LogIn")
                                            )}  
                                        className='book__contact' 
                                        type="button" 
                                        value="Contact"
                                    ></input> 
                                :  */}
                                    {/* <input 
                                        onClick={() => 
                                            // setAvailabilityBtnPopUp(true) 
                                            console.log("Unavailable")
                                        } 
                                        className='book__contact' 
                                        type="button"
                                        style={{
                                            borderColor: "#221246",
                                            color: "#221246",
                                            backgroundColor: "#eee"
                                        }}  
                                        value="Unavailable"
                                    ></input> 
                                }
                                <input 
                                    className='book__favorite ActiveFavorite' 
                                    type="button" 
                                    value=""
                                    onClick={()=> {
                                        handleUnfavored(book)
                                    }}
                                ></input> 
                            </div>
                        </div>
                    ))}
                </div> */}
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
                                <img className="book__image" 
                                    src={book.coverPage}
                                    onError={(e)=>{e.target.onerror = null; e.target.src="https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED"}}
                                />                                </div>
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
                                {(book.isAvailable)? 
                                    <input 
                                        onClick={() => (handleAvailability(book))}  
                                        type="button" 
                                        id="book__is__available" 
                                        className= 'book__contact'
                                        style={{
                                            borderColor: "#221246",
                                            color: "#221246",
                                            backgroundColor: "#eee"
                                        }} 
                                        value="Mark as Unavailable" 
                                    >
                                    </input> 
                                :
                                    <input 
                                        onClick={() => (handleAvailability(book))}  
                                        type="button"  
                                        className= 'book__contact' 
                                        value="Mark as Available" 
                                    >
                                    </input>
                                }
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
