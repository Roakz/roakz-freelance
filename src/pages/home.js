import React, {Component} from 'react'
import SellNote from "../components/SellNote"

const HomePage = () => {
  return (
    <>
      <div id="home-page-header">
        <div id="home-header-content-container">
          <p>Web & mobile developer freelance</p>
          <div id="avatar"></div>
          <div id="socials">
            <div id="social-image-div-twitter"></div>
            <div id="social-image-div-email"></div>
            <div id="social-image-div-link"></div>
          </div>
          <h2>Rory Bell</h2>
        </div>
      </div>
      <div id="journey">
        <p>
          Lets embark on this journey together !
          Just tell me where you want to go !!
          let me navigate the technical challenges
          of bringing your idea to life, in the technical realm.
        </p>
      </div>
      <SellNote side="left" image="/computer.png"/>
    </>
  )
} 
export default HomePage