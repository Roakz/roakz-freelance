import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home'
import ProjectPage from './pages/projects'
import TechTalkPage from './pages/tech-talk'
import ContactPage from './pages/contact'
import PricesPage from './pages/prices'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      {/* navigation */}
      <div>
        <Navigation />
      </div>

      {/* Page routing */}
      <Switch>
      <Route exact path="/" >
        <HomePage />
      </Route>
      <Route exact path="/projects" >
        <ProjectPage />
      </Route>
      <Route exact path="/tech-talk" >
        <TechTalkPage />
      </Route>
      <Route exact path="/prices" >
        <PricesPage />
      </Route>
      <Route exact path="/contact" >
        <ContactPage />
      </Route>
      </Switch>

      {/* footer */}
        <Footer />      
    </Router>
  );
}

export default App;
