import React from 'react'
import SellNote from "../components/SellNote"
import Projects from '../popups/projects'
import Prices from '../popups/prices'
import Technology from '../popups/tech-talk'
import Contact from '../popups/contact'


const HomePage = (props) => {

let innerPopupComponent

  switch (props.view) {
    case "Projects": innerPopupComponent = <Projects />
      break;
    case "Pricing": innerPopupComponent = <Prices popUpController={props.popUpController}/>
      break;
    case "Technology": innerPopupComponent = <Technology />
      break;
    case "Contact": innerPopupComponent = <Contact />
      break
  }

  return (
    <>
      {(props.popUp == true) ?
       <div id="popup-div">
          <div id="popup-close">
            <button onClick={props.popUpController}>
              <p>X</p>
            </button>
          </div>
          {innerPopupComponent}
        </div>
        :
        ""
        }
      <div id="home-page-header">
        <div id="home-header-content-container">
          <p>Freelance Web & Mobile Developer</p>
          <div id="avatar"></div>
          <div id="socials">
            <a href="https://twitter.com/RoarzOnRails" target="_blank"><div id="social-image-div-twitter"></div></a>
            <div id="social-image-div-email" data="Contact" onClick={props.popUpController}></div>
            <a href="https://www.linkedin.com/in/roarzonrails/" target="_blank"><div id="social-image-div-link"></div></a>
          </div>
          <h2>Rory Bell</h2>
        </div>
      </div>
      
      <div id="journey">
        <p>
          Lets embark on this journey together !
          Just tell me where you want to go !!
          let me navigate the technical challenges
          of bringing your idea to life.
        </p>
      </div>

      <SellNote side="left"
       text="Web applications and mobile apps for businesses and individuals."
       image="/help.png"
       />
      <SellNote side="right"
       text="Responsive web design, your website should look good on mobile and on desktop or laptop."
       image="/responsive.png"
       />
      <SellNote side="left"
       text="Either built to your spcification or thorough planning will be complete to ensure I meet you desired outcomes."
       image="/checklist.png"
       />
      <SellNote side="right"
       text="Peace of mind that your hiring someone who does this everyday for a living!"
       image="/work.png"
       />
      <SellNote side="left"
       text="“Full Stack” as we say in tech world! from design and front end static pages all the way to more complex functionality and backend applications."
       image="/design.png"
       />
      <SellNote side="right"
       text="Do you need your apllication deployed aswell? No problem! I'll make sure that baby is live and operational!"
       image="/database.png"
       />
    </>
  )
} 
export default HomePage