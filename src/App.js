import React, { useState, useEffect } from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import AboutUs from './Components/AboutUs';
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
  const [email, setEmail] = useState("")
  const [Userid, setId] = useState("")
  const [favorites, setFavorites] = useState([])
  const [favoriteBooksFiltered, setFavoriteBooksFiltered] = useState([])


  const [users, setUsers] = useState([])
  const [books, setBooks] = useState([]);

  // const firebase = firebase
  const refBooks = firebase.firestore().collection("Books");
  const refUsers = firebase.firestore().collection("Users");
  const refReports = firebase.firestore().collection("Reports");
  const refFirebase = firebase.firestore;

  function gitcreateAccount() {
    console.log("createAccount has been called")
    return new Promise(function(resolve, reject) {
      if (firebase.auth().currentUser.email) {
          resolve()
          console.log("Loged in")
      } else {
        reject("No current user")
      }
    })
  }


  async function handleSubmit(newUser) {
    try {
      await setEmail(firebase.auth().currentUser.email)
    } catch (err) {
      console.log(err)
    }     
  }


  //REALTIME GET FUNCTION
  function getBooks() {
    setLoading(true);
    refBooks.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setBooks(items);
      console.log(items)
      // console.log(books[1].id)
      // console.log(firebase.auth().currentUser);
    });
    const temp = []
    const targetBook = []
    for(let favorite = 0; favorite < favorites.length; favorite++) {
      for (let book = 0; book <books.length; book++) {
        if (favorites[favorite] == books[book].id) {
          console.log("accessing")
          console.log(favorites[favorite])
          console.log(books[book].id)
          const targetBook = books[book]
          console.log(targetBook.id) 
          temp.push(books[book])  
        }
      }
      // setFavoriteBooksFiltered(temp)
    }    
    setLoading(false);
  }

  function getUsers() {
    setLoading(true);
    refUsers.onSnapshot((querySnapshot) => {
      const items = [];
      var index = 0
      var item = ""
      let CFavorite = 0
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
        item = items[index]
        if (item.emailRef === firebase.auth().currentUser.email){
          CFavorite = index
          console.log(items[CFavorite].favorite)
        }
        index++
      });
      setUsers(items);
      console.log(items[CFavorite].favorite)
      setFavorites(items[CFavorite].favorite)
      setLoading(false);
      if (firebase.auth().currentUser){
        setEmail(firebase.auth().currentUser.email)
      }    
    });
  }

  useEffect(() => {
    getUsers()
    getBooks()
  }, []);

    
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <div className="page_container">
          <Switch>
            <Route path='/AboutUs'>
              <NavBar />
              <AboutUs />
            
            </Route>

            <Route path='/AddBook'>
              <NavBar />
              <AddBook  users={users.filter((user) => user.emailRef === email)}/>
            </Route>

            <Route exact path='/Profile' >
              <>
                <NavBar />
                <Profile 
                  // firebase={firebase}
                  refBooks={refBooks}
                  refUsers={refUsers}
                  email={email}
                  // Userid= {Userid}
                  users={users.filter((user) => user.emailRef === email)}
                  favoritesInUsersCollections={favorites}
                  myFavorite={favorites}
                  myBooks={books.filter((book) => book.email === email)}
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
              <Books 
                books={books}
                refUsers={refUsers}
                users={users.filter((user) => user.emailRef === email)}
                myFavorite={favorites}
                refReports={refReports}
                refFirebase={refFirebase}
              />
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