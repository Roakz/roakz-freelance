import React, {Component} from 'react' 
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
      <div id="navigation">
        <div id="navigation-link-container">
          <div class="navigation-link"><Link to="/">Home</Link></div>
          <div class="navigation-link"><Link to="projects">projects</Link></div>
          <div class="navigation-link"><Link to="tech-talk">technology</Link></div>
          <div class="navigation-link"><Link to="prices">pricing</Link></div>
          <div class="navigation-link"><Link to="contact">contact</Link></div>
        </div>
      </div>
    )
}
export default Navigation