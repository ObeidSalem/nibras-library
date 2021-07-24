import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import singUp from './Components/singUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './Components/Books';



function App() {
  return (
    <Router>
      <singUp/>
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

          <Route path='/singUp'>
            <singUp/>
            </Route>

            <Route path='/loginIn'>
            <singUp/>
            </Route>


          <Route path='/'>
          <singUp/>
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