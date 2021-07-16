import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/AboutUs'>
            {/* <SearchBar /> */}
            {/* <AboutUs /> */}
            {/* <Footer /> */}
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
            {/* <Footer /> */}
          </Route>
          <Route path='/'>
            <NavBar />
            {/* <SearchBar /> */}
            {/* <Books /> */}
            {/* <Footer /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
