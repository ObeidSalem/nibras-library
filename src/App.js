import './App.css';
import NavBar from './Components/NavBar';
import SingUp from './Components/SingUp';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './Components/Books';




function App() {
  return (
    <Router>
      <div className="App">
        <div className="page_container">
        <Switch>
          <Route path='/AboutUs'>
            <NavBar />
            {/* <AboutUs /> */}
           
          </Route>


          <Route path='/Profile'>
            <NavBar />
            <div className='left'>
              {/* <MyFavorites /> */}
              {/* <MyBooks /> */}
            </div>
            <div className='right'>
              {/* <MyProfile /> */}
            </div>
           
          </Route>

          <Route path='/SingUp'>
            {/* <NavBar /> */}
            <SingUp/>
            </Route>

            <Route path='/Login' >
            {/* <NavBar /> */}
            <Login/>
            </Route>


          <Route path='/'>
            <NavBar />
            <Books />
            {/* <Footer /> */}
          </Route>
        </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
    
  );
}

export default App;