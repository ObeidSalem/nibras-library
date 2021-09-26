import './singUp.css'
import firebase from "../firebase";
// import firebase from "firebase/app"
import "firebase/auth"
import logo_pic from '../img/logo.jpeg'
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { v4 as uuidv4 } from "uuid";

export default function Signup() {
  const { signup } = useAuth()
  const [firstNameRef, setName] = useState("")
  const [phoneRef, setPhoneNo] = useState("")
  const [addressRef, setAddress] = useState("")
  const [emailRef, setEmail] = useState("")
  const [passwordRef, setPassword] = useState("")
  const [passwordConfirmRef, setPasswordConfirm] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  
  const ref = firebase.firestore().collection("Users");
  function createAccount() {
    console.log("createAccount has been called")
    return new Promise(function(resolve, reject) {
      if (passwordRef === passwordConfirmRef) {
        signup(emailRef, passwordRef).then(() => {
          resolve()
          console.log("account has been created")
        })
      } else {
        reject("Failed to create an account")
      }
    })
  }


  async function handleSubmit(newUser) {
    try {
      setError("")
      setLoading(true)
      await createAccount()
      await ref
      .doc(newUser.id)
      .set(newUser)
      .catch((err) => {
          console.error(err);
      });
      history.push("/")
    } catch (err) {
      setError("Failed to save")
      console.log(err)
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
          <input
                className="input__style"   
                placeholder="Name"
                type="text"
                value={firstNameRef}
                onChange={(e) => setName(e.target.value)}
                required 
            />
            <input
                className="input__style"   
                placeholder="Email"
                type="email"
                value={emailRef}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="input__style"   
                placeholder="password"
                type="Password"
                value={passwordRef}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                className="input__style"   
                placeholder="Password Confirmation"
                type="Password"
                value={passwordConfirmRef}
                onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <input
                className="input__style"   
                placeholder="Phone Number"
                type="text"
                value={phoneRef}
                onChange={(e) => setPhoneNo(e.target.value)}
            />
            <input
                className="input__style"   
                placeholder="Address"
                type="Address"
                value={addressRef}
                onChange={(e) => setAddress(e.target.value)}
            />
           
            <input onClick={() =>handleSubmit({ firstNameRef, emailRef, phoneRef, addressRef, id: uuidv4() })}
              type="submit" className="header__signUp" value="Sign Up"></input>
        </div> 
        <div>
        Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>   
    </>
  )
}

// export default handleSubmit;