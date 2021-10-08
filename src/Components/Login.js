import logo_pic from '../img/Authlogo.jpeg'
import './Login.css'
import React, { useRef, useState } from "react"
import { Form, Alert } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="main log__In" >
        <div  className="pic">
            <img onClick={()=> history.push("/")} className="l-img"src={logo_pic} alt="hadhrami-pic" />
        </div>
        <hr />
        <div className="main-text">
          <br />
          <h2 >Log In</h2>
          <br />

          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Control className="input__style" placeholder="Email" type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Control className="input__style" placeholder="Password" type="password" ref={passwordRef} required />
            </Form.Group>
            <input disabled={loading} type="submit" id="login__button" className="header__signUp" value="Log In"></input>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/ForgotPassword">Forgot Password?</Link>
          </div>
        </div>
        <br/> 
        <div className="margin10px">
        Need an account? <Link to="/SingUp">Sign Up</Link>
      </div>
      
      </div>   
    </>
  )
}