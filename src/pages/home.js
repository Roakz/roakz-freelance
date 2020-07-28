import React, {useEffect, useState} from 'react'
import SellNote from "../components/SellNote"
import Projects from '../popups/projects'
import Prices from '../popups/prices'
import Technology from '../popups/tech-talk'
import Contact from '../popups/contact'
import Top from '../components/top'

const HomePage = (props) => {

  const longScrollClick = () => {
    window.location.replace("/#contact")
  }

  let event = props.longScroll === true ? longScrollClick : props.popUpController

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
      {(props.popUp === true) ?
       <div id="popup-div">
          <div id="popup-close">
            <button className="close" onClick={props.popUpController}>
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
          <p className="heading-animation" id="heading">Freelance Web & Mobile Developer</p>
          <div id="avatar"></div>
          <div id="socials">
            <a className="social-animation" id="twitter-link" href="https://twitter.com/RoarzOnRails" target="_blank" rel="noopener noreferrer"><div id="social-image-div-twitter"></div></a>
            <a className="social-animation" id="email-link" onClick={event}><div id="social-image-div-email" data="Contact"></div></a>
            <a className="social-animation" id="linkdin-link" href="https://www.linkedin.com/in/roarzonrails/" target="_blank" rel="noopener noreferrer"><div id="social-image-div-link"></div></a>
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
       viewport={props.vw}
       />
      <SellNote side="left"
       text="Either built to your specification or thorough planning will be complete to ensure I meet your desired outcomes."
       image="/checklist.png"
       />
      <SellNote side="right"
       text="Peace of mind that you're hiring someone who does this everyday for a living!"
       image="/work.png"
        viewport={props.vw}
       />
      <SellNote side="left"
       text="“Full Stack” as we say in tech world! from design and front end static pages all the way to more complex functionality and backend applications."
       image="/design.png"
       />
      <SellNote side="right"
       text="Do you need your application deployed as well? No problem! I'll make sure that baby is live and operational!"
       image="/database.png"
       viewport={props.vw}
       />

       {/* Bring on ye long scroll! */}
       { props.longScroll ? 
       <>
        <Top />
        <Technology />
        <Top />
        <Prices longScroll={props.longScroll}/>
        <Top />
        <Contact />
      </> : ""}
    </>
  )
} 
export default HomePage;