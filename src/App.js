import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Attributions from './components/Attributions'

function App() {

  const [popUp, setPopUp] = useState(false)
  const [popView, setView] = useState("")

  function popUpController(e) {
    e.preventDefault()
    if (e.target.innerHTML == "Request a qoute"){
      setView("Contact")
      setPopUp(true)
    } else if (e.target.innerHTML == "X") {
      setView("")
      setPopUp(false)
    } else {
      setView(e.target.innerHTML)
      setPopUp(true)
    }
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
          {popUp ? <HomePage popUp={popUp} popUpController={popUpController} view={popView}/> : <HomePage />}
        </Route>
        <Redirect exact from="/reload" to="/" />
      </Switch>

      < Footer />
      < Attributions />
    </Router>  
  );
}

export default App;
