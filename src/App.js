import React, {Component, useState} from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Attributions from './components/Attributions'

function App() {

  const [popUp, setPopUp] = useState(null)
  // const [popView, setView] = useState("")

  function popUpController(e) {
  e.preventDefault()
  popUp == true ? setPopUp(null) : setPopUp(true)
  
}
  // Switch was originally set up for multiple pages, ended up going with pop ups instead.
  // Left in for future expansion ease.
  return (
    <Router>
      {/* navigation */}
      <div>
        <Navigation popUpController={popUpController}/>
      </div>

      {/* Page routing */}
      <Switch>
        <Route exact path="/" >
          {popUp ? <HomePage popUp={popUp} popUpController={popUpController} view={"Pricing"}/> : <HomePage />}
        </Route>
      </Switch>

      < Footer />
      < Attributions />
    </Router>  
  );
}

export default App;
