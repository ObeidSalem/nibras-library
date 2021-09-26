import './singUp.css'
import logo_pic from '../img/logo.jpeg'
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import { Link, useHistory } from "react-router-dom"
import firebase from 'firebase'
import "firebase/database"

export default function Signup() {
  const { signup } = useAuth()
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const phoneRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()


 




  async function handleSubmit(e) {
    e.preventDefault()
    // constructor() ; {
      // super();
      
    // }

    const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true
  });
  const userRef = db.collection("users").add({
    firstname: this.state.firstname,
    lasttname:this.state.lasttname,
    email: this.state.email,
    phonenumber:this.state.phoneRef
  }); 

  this.state = {
    firstname: firstNameRef,
    lasttname: "",
    email:"",
    phonenumber:""
   };




    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)    
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)

  }
  
//  const handleSubmit = (newUser) => 

 
  // async function handleSubmit(e,dispatch, getState, {getFirebase, getFirestore} , newUser) {

  //     e.preventDefault()
      
  //   const firebase = getFirebase();
  //   const firestore = getFirestore();
    
  //   firebase.auth().createUserWithEmailAndPassword(
  //     newUser.email, 
  //     newUser.password
  //   ).then(resp => {
  //     return firestore.collection('users').doc(resp.user.uid).set({
  //       firstName: newUser.firstName,
  //       lastName: newUser.lastName,
  //       initials: newUser.firstName[0] + newUser.lastName[0]
  //     });
  //   }).then(() => {
  //     dispatch({ type: 'SIGNUP_SUCCESS' });
  //   }).catch((err) => {
  //     dispatch({ type: 'SIGNUP_ERROR', err});
  //   });
  // }





  // async function handleSubmit(e , {getFirestore} , newUser) {
  //   e.preventDefault()

  //   if (passwordRef.current.value !== passwordConfirmRef.current.value) {
  //     return setError("Passwords do not match")
  //   }
  
  //   try {
  //     setError("")
  //     setLoading(true)
  //     const firestore = getFirestore()
  //     await signup(emailRef.current.value, passwordRef.current.value)
      
     
  //   // .then(resp => {
  //   //   console.log("2")
  //   //   return firestore.collection('users').doc(resp.user.uid).set({
  //   //     firstName: newUser.firstName,
  //   //     lastName: newUser.lastName,
      
  //   //   });
  //   // })
  //   // console.log("3")
  //   history.push("/")

  // } catch {
  //   setError("Failed to create an account")
  // }

  //   setLoading(false)
  // }


  return (
    <>
    <div className="main" >
        <div  className="pic">
            <img onClick={()=> history.push("/")} className="l-img"src={logo_pic} alt="hadhrami-pic" />
        </div>
        <hr />
        <div className="main-text">
          <br />
          <h2 >Sign Up</h2>
          <br />

          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="first_name"  > 
              <Form.Control className="input__style"  placeholder="First Name" type="text" ref={firstNameRef} required />
            </Form.Group>
            <Form.Group id="last_name">
              <Form.Control className="input__style" placeholder="Last Name" type="text" ref={lastNameRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Control className="input__style" placeholder="Email" type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Control className="input__style" placeholder="Password" type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Control className="input__style" placeholder="Password Confirmation" type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Form.Group id="phone_number">
              <Form.Control className="input__style" placeholder="Phone Number" type="text" ref={phoneRef} required />
            </Form.Group>
            <input type="submit" className="header__signUp" value="Sign Up"></input>
          </Form>
        </div> 
        <div>
        Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>   
    </>
  )
}

// export default handleSubmit;