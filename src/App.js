import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Attributions from './components/Attributions'

function App() {

  const [popUp, setPopUp] = useState(false)
  const [popView, setView] = useState("")
  let vw = window.innerWidth
  let vh = window.innerHeight
  let [longScroll, setLongScroll] = useState(null)

  useEffect(() => {
    // Polling to check the screen dimensions constantly so we can initiate long scroll when its to short or thin.
    const callback = () => {
      let vw = window.innerWidth
      let vh = window.innerHeight

      if (vw < 750 || vh < 900) {
        setPopUp(false)
        setLongScroll(true)
      } else if (vw >= 750 || vh >= 900) {
        setLongScroll(false)
      }
      setTimeout(callback, 1000)
    }
    callback()
  }, [vw, vh])

  function popUpController(e, optional) {
    e.preventDefault()
    if (longScroll) {
      setPopUp(false)
      let linkTo 
      
      switch (e.target.innerHTML) {
        case "Pricing": linkTo = "/#pricing"
          break;
        case "Technology": linkTo = "/#technology"
          break;
        case "Contact":  linkTo = "/#contact"
          break
      } 
      window.location.replace(linkTo)
      return
    } 
    
    optional = optional ? optional : {}
    if (e.target.innerHTML === "Request a qoute"){
      setView("Contact")
      setPopUp(true)
    } else if (e.target.innerHTML === "X") {
      setView("")
      setPopUp(false)
      window.location.reload()
    } else if (e.target.getAttribute('data') === "Contact") {
      setView("Contact")
      setPopUp(true)
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
        <Navigation popUpController={popUpController} longScroll={longScroll}/>
      </div>

      {/* Page routing */}
      <Switch>
        <Route exact path="/" >
          {popUp ? <HomePage popUp={popUp} popUpController={popUpController} view={popView} longScroll={longScroll} vw={vw} /> : <HomePage popUpController={popUpController} longScroll={longScroll} vw={vw}/>}
        </Route>
        <Redirect exact from="/reload" to="/" />
      </Switch>

      < Footer />
      < Attributions />
    </Router>  
  );
}

export default App;
