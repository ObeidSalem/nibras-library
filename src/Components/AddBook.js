// import "./AddBook.css";
import './singUp.css'
import logo_pic from '../img/logo.jpeg'
import React, { useRef, useState } from "react"
import { Form, Dropdown, Alert } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import { Link, useHistory } from "react-router-dom"
import firebase from "../firebase";
import { v4 as uuidv4 } from "uuid";


const db = firebase.firestore();


export default function AddBook({users}) {
  const { signup } = useAuth()
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const phoneRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState("")

  const [isUploaded, setIsUploaded] = useState(false)
  const [disabled, setDisabled] = useState(true);
  const [coverPage, setCoverPage] = useState();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [category, setCategory] = useState("Novels");
  const [description, setDescription] = useState();
  const [owner, setOwner] = useState("");
  const uid = null;
  const email = null;
  const [location, setLocation] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [isAvailable, setIsAvailable] = useState(true)
  const [fileUrl, setFileUrl] = React.useState(null);
  const user = users[0];

  const history = useHistory()

  const ref = firebase.firestore().collection("Books");
  console.log(firebase.auth().currentUser)
  console.log(user)

    async function addBook(newBook) {
        // console.log(newBook)
        // uploadImage();
        console.error("AddBook function has been called");
        ref
        //.doc() use if for some reason you want that firestore generates the id
        .doc(newBook.id)
        .set(newBook)
        .catch((err) => {
            console.error(err);
        });
        
        history.push("/")
    }


    const onFileChange = async (e) => {
        setDisabled(false)
        setIsUploaded(true)
        const file = e.target.files[0];
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(file.name);
        let imageURL = "";
        await fileRef.put(file);
        setFileUrl(await fileRef.getDownloadURL().then(url => {
          console.log(url);
          imageURL = url;
        }));    
        setCoverPage(imageURL)
        setIsUploaded(false)
        setDisabled(true)
      };

  return (
     <>
      {firebase.auth().currentUser ?
        <div className="main add__book" > 
          {
            email = firebase.auth().currentUser.email,
            uid = firebase.auth().currentUser.uid
          }       
            <div className="main-text">
              <br />
              <h2 >Add Book</h2>
              <br />
              <hr />

              {error && <Alert variant="danger">{error}</Alert>}
            <input
                className="input__style"   
                placeholder="Book Title"
                type="file"
                value={setFileUrl || ""}
                onChange={onFileChange}
            />
            {isUploaded && <p>Uploading...</p>}
            <input
                className="input__style"   
                placeholder="Book Title"
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value)
                  setOwner(user.firstNameRef)
                  setLocation(user.addressRef)
                  setPhoneNo(user.phoneRef)
                  setIsAvailable(true)
                  // console.log(owner + location + phoneNo + uid)
                }}
                required 
            />
            <input
                className="input__style"   
                placeholder="Author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <select 
              className="input__style"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              >
                <option>Novels</option>
                <option>Study Materials</option>
                <option>Others</option>             
              
            </select>
            {/* <input
                className="input__style"   
                placeholder="Category"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
             */}
            <textarea
                className="input__style"   
                placeholder="Description"
                type="text"
                value={description}
                onChange={(e) => {setDescription(e.target.value)}}
            />
            <input onClick={() => { 
              {disabled && title && author && category && description && 
              addBook({ coverPage, title, description, author, category, id: uuidv4(), isAvailable, owner, email, phoneNo, location})}
            }}
                type="submit" className="header__signUp center" value="Save">
            </input>
            {/* <button onClick={() => addBook({ title, desc, author, category, id: uuidv4() })}>
                Submit
            </button> */}
        </div>
        {/* {books.map((Book) => (
        <div className="Book" key={Book.id}>
            <p>{Book.title}</p>
            <p>{Book.author}</p>
            <p>{Book.category}</p>
            <p>{Book.desc}</p>
        </div>
        ))} */}
        </div>
      : history.push("/login")}
    </>
  )
}