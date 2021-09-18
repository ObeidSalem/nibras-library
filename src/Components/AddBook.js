import "./AddBook.css";
import './singUp.css'
import logo_pic from '../img/logo.jpeg'
import React, { useRef, useState } from "react"
import { Form, Dropdown, Alert } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import { Link, useHistory } from "react-router-dom"
import firebase from "../firebase";
import { v4 as uuidv4 } from "uuid";

const db = firebase.firestore();


export default function AddBook() {
  const { signup } = useAuth()
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const phoneRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState("")

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false);
    const [coverPage, setCoverPage] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [fileUrl, setFileUrl] = React.useState(null);

    const history = useHistory()

    const ref = firebase.firestore().collection("Books");


    function addBook(newBook) {
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
        const file = e.target.files[0];
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setFileUrl(await fileRef.getDownloadURL());
      };

    const onSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        if (!username || !fileUrl) {
          return;
        }
        await db.collection("users").doc(username).set({
          name: username,
          avatar: fileUrl,
        });
      };

  return (
     <>
    <div className="main add__book" >        
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
            value={coverPage}
            onChange={onFileChange}
        />
        <input
            className="input__style"   
            placeholder="Book Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
         <input
            className="input__style"   
            placeholder="Author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
        />
         <input
            className="input__style"   
            placeholder="Category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
        />
         <textarea
            className="input__style"   
            placeholder="Description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        <input onClick={() => addBook({ coverPage, title, description, author, category, id: uuidv4() })}
            type="submit" className="header__signUp" value="Save">
        </input>
        {/* <button onClick={() => addBook({ title, desc, author, category, id: uuidv4() })}>
            Submit
        </button> */}
    </div>
    {loading ? <h1>Loading...</h1> : null}
    {books.map((Book) => (
    <div className="Book" key={Book.id}>
        <p>{Book.title}</p>
        <p>{Book.author}</p>
        <p>{Book.category}</p>
        <p>{Book.desc}</p>
    </div>
    ))}
    </div>
    </>
  )
}