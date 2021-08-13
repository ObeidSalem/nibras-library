import React from 'react'
import { Link } from 'react-router-dom'
import './SingUp.css'
import logo_pic from '../img/logo.jpeg'
import { Form, Button, Card, Alert } from "react-bootstrap"




const SignUp = () => {
    return (



        <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>

        // <div className="main" >
        //     <div  className="pic">
        //     <img className="l-img"src={logo_pic} alt="hadhrami-pic" />
        //     </div>
        //     <hr />
        //     <div className="main-text">
        //     <br /><br />
        //     <div className="name-box">

        //     <input type="text" placeholder="First name"/>
        //     <input type="text" placeholder="Last name" />
           
        //     </div>
        //     <br />
        //     <input type="email" placeholder="email"/>
        //     <br />
        //     <input type="password" placeholder="password"/>
        //     <br />
        //     <input type="password" placeholder="conform password"/>
        //     <br />     
        //     <input type="text" placeholder="phone number" />

        //     <h5>Do you live Inside IIUM Gombak Campuss? </h5>

        //     <h5> already have an account <Link to="/Login">Log In</Link>  </h5>
            

        //     <br />


        //     <input type="button" className="header__signUp" value="Sign Up"></input>





        //     </div>
            

        // </div>


        
        
    )
}

export default SignUp


// import React, { useRef, useState } from "react"
// import { Form, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from "../context/AuthContext"
// import { Link, useHistory } from "react-router-dom"

// export default function Signup() {
//   const emailRef = useRef()
//   const passwordRef = useRef()
//   const passwordConfirmRef = useRef()
//   const { signup } = useAuth()
//   const [error, setError] = useState("")
//   const [loading, setLoading] = useState(false)
//   const history = useHistory()

//   async function handleSubmit(e) {
//     e.preventDefault()

//     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
//       return setError("Passwords do not match")
//     }

//     try {
//       setError("")
//       setLoading(true)
//       await signup(emailRef.current.value, passwordRef.current.value)
//       history.push("/")
//     } catch {
//       setError("Failed to create an account")
//     }

//     setLoading(false)
//   }

//   return (
//     <>
//       <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Sign Up</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form onSubmit={handleSubmit}>
//             <Form.Group id="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" ref={emailRef} required />
//             </Form.Group>
//             <Form.Group id="password">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" ref={passwordRef} required />
//             </Form.Group>
//             <Form.Group id="password-confirm">
//               <Form.Label>Password Confirmation</Form.Label>
//               <Form.Control type="password" ref={passwordConfirmRef} required />
//             </Form.Group>
//             <Button disabled={loading} className="w-100" type="submit">
//               Sign Up
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//       <div className="w-100 text-center mt-2">
//         Already have an account? <Link to="/login">Log In</Link>
//       </div>
//     </>
//   )
// }


