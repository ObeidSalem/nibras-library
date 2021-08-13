import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import { Link } from "react-router-dom"
import logo_pic from '../img/logo.jpeg'
import { useHistory } from "react-router-dom"


export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
        <div className="main forgot__password" >
            <div  className="pic">
                <img onClick={()=> history.push("/")} className="l-img"src={logo_pic} alt="hadhrami-pic" />
            </div>
            <hr />
            <div className="main-text">
                <br />
                <h2>Password Reset</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                    <Form.Control className="input__style" placeholder="Email" type="email" ref={emailRef} required />
                    </Form.Group>
                    <input disabled={loading} type="submit" className="header__signUp" value="Reset Password"></input>
                </Form>
                <div className="w-100 text-center mt-3">
                    <Link to="/login">Login</Link>
                </div>
                <br />
                <div className="w-100 text-center mt-2">
                    Need an account? <Link to="/SingUp">Sign Up</Link>
                </div>
            </div>
      </div>

    </>
  )
}

 