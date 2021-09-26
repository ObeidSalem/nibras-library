import React, { useState, useEffect } from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import ContactPopup from './Components/ContactPopup';
import SingUp from './Components/singUp.js';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './Components/Books';
import { AuthProvider, useAuth } from './context/AuthContext';
import PrivateRoute from "./Components/PrivateRoute"
import ForgotPassword from "./Components/ForgotPassword"
import firebase from "./firebase"
import AddBook from "./Components/AddBook"


function App() {
  // const { currentUser } = useAuth()

  const [loading, setLoading] = useState(false);

  const [books, setBooks] = useState([
    {id: 1, image: "/images/b1.jpg", title: "ABSALOM, ABSALOM! ", author:"Obeid Salem", category: "Novel", code: "0001", description: "in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem who  in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem "},
    {id: 2, image: "/images/b2.jpeg", title: "lkfjsdfs skfjkldj fl", author:"Salem", category: "Novel", code: "0002", description: "in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem who  in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem "},
    {id: 3, image: "/images/b3.jpeg", title: "lkjdfl ;gskjg fg", author:"Ahmed", category: "Novel", code: "0003", description: "in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem who  in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem "},
    {id: 4, image: "/images/b1.jpg", title: "jgdl fgj ddklfgj dg", author:"Khalid", category: "Novel", code: "0004", description: "in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem who  in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem "},
    {id: 5, image: "/images/b2.jpeg", title: "lkjdflg dfdgk dlg", author:"Hashim", category: "Novel", code: "0005", description: "in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem who  in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem "},
    {id: 6, image: "/images/b3.jpeg", title: "glkdfjdsf kg ", author:"Hassen", category: "Novel", code: "0006", description: "in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem who  in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem "},
    {id: 7, image: "/images/b1.jpg", title: "lgkdfjg ldg dflk", author:"Tariq", category: "Novel", code: "0007", description: "in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem who  in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem "},
  ]);

  const ref = firebase.firestore().collection("Books");

  //REALTIME GET FUNCTION
  function getBooks() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setBooks(items);
      setLoading(false);
      console.log(firebase.auth().currentUser);
    });
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <div className="page_container">
          <Switch>
            <Route path='/AboutUs'>
              <NavBar />
              {/* <AboutUs /> */}
            
            </Route>

            <Route path='/AddBook'>
              <NavBar />
              <AddBook />
            </Route>

            <Route exact path='/Profile' >
              <>
                <NavBar />
                <Profile 
                  myFavorite={books.filter((book) => book.id === "1"
                    // currentUser.uid
                    )}
                  myBooks={books.filter((book) => book.id === "6")}
                  />
                <Footer />
              </>
            </Route>

            <Route path='/SingUp'>
              {/* <NavBar /> */}
              <SingUp/>
            </Route>

            <Route path='/Login' >
              {/* <NavBar /> */}
              <Login/>
            </Route>

            <Route path='/ForgotPassword' >
              {/* <NavBar /> */}
              <ForgotPassword/>
            </Route>
            <Route exact path="/">
              <NavBar />
              <Books books={books}/>
              <Footer />
            </Route>
          </Switch>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;