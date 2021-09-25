import './singUp.css'
import firebase from "firebase/app"
import "firebase/auth"
import logo_pic from '../img/logo.jpeg'
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const { signup } = useAuth()
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const phoneRef = useRef()
  const addressRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    // const ref = firebase.firestore().collection("Users");

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef, passwordRef)
      .then(() =>{
        let user = firebase.auth().currentUser;

        //save this user into fireStore
        let databaseRef = firebase.database().ref()

        //Create user data
        let userData = {
          email : emailRef,
          fname : firstNameRef,
          lname : lastNameRef,
          address : addressRef,
          phone : phoneRef,
          last_login : Date.now()
        }

        databaseRef.child('users/' + user.id).set(userData)
      })
      history.push("/")
    } catch {
      setError(error)
      setError("Failed to create an account")
    }

    setLoading(false)
  }

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
            <Form.Group id="first_name">
              <Form.Control className="input__style" placeholder="First Name" type="text" ref={firstNameRef} />
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
            <Form.Group id="address">
              <Form.Control className="input__style" placeholder="Address" type="text" ref={addressRef} required />
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