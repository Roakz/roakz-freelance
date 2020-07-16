import React, { useEffect } from 'react' 
import { NavLink } from 'react-router-dom'

const Navigation = (props) => {

   useEffect(() => {
     let navLink = document.querySelectorAll(".navigation-link")
     navLink.forEach(element => {
       element.setAttribute('id', 'nav-link-animation')
     }); 
   })

    return (
      <div id="navigation">
        <div id="navigation-link-container">   
          <div className="navigation-link"><a href="" onClick={props.popUpController}>Technology</a></div>
          <div className="navigation-link"><a href="" onClick={props.popUpController}>Pricing</a></div>
          <div className="navigation-link"><a href="" onClick={props.popUpController}>Contact</a></div>
        </div>
      </div>
    )
}
export default Navigation