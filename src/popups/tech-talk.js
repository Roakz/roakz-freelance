import React, {Component} from 'react'

const TechTalkPage = () => {
  return (
    <div id="tech-popup-wrapper">
      <h2>Technology</h2>
      <p>I have a tech stack for many different project types. From small static webpages to larger fullstack websites with a backend on them.
         I also use REACT native for developing cross platform mobile apps. For those that are interested here are some of the technologies I use regularly.
      </p>
      <div id="tech-wrapper">
        <div class="tech-note"><div class="tech-note-icon"><i class="devicon-html5-plain-wordmark colored"></i></div>HTML</div>
        <div class="tech-note"><div class="tech-note-icon"><i class="devicon-javascript-plain colored"></i></div>Javascript</div>
        <div class="tech-note"><div class="tech-note-icon"><i class="devicon-react-original-wordmark colored"></i></div>REACT</div>
        <div class="tech-note"><div class="tech-note-icon"><i class="devicon-sass-original colored"></i></div>CSS/SASS</div>
        <div class="tech-note"><div class="tech-note-icon"><i class="devicon-bootstrap-plain-wordmark colored"></i></div>Bootsrap</div>
        <div class="tech-note"><div class="tech-note-icon"><i class="devicon-rails-plain-wordmark colored"></i></div>Ruby on Rails</div>
        <div class="tech-note"><div class="tech-note-icon"><i class="devicon-express-original colored"></i></div>MERN stack</div>
        <div class="tech-note"><div class="tech-note-icon"><i class="devicon-amazonwebservices-plain-wordmark colored"></i></div>AWS services</div>
      </div>
    </div>
  )
} 
export default TechTalkPage