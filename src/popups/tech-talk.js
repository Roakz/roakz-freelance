import React from 'react'

const TechTalkPage = () => {
  return (
    <div id="tech-popup-wrapper">
      <h2>Technology</h2>
      <p>I have a tech stack for many different project types. From small static webpages to larger fullstack websites with a backend on them.
         I also use REACT native for developing cross platform mobile apps. For those that are interested here are some of the technologies I use regularly.
      </p>
      <div id="tech-wrapper">
        <div className="tech-note"><div className="tech-note-icon"><i className="devicon-javascript-plain colored"></i></div>Javascript</div>
        <div className="tech-note"><div className="tech-note-icon"><i className="devicon-react-original-wordmark colored"></i></div>REACT</div>
        <div className="tech-note"><div className="tech-note-icon"><i className="devicon-sass-original colored"></i></div>CSS/SASS</div>
        <div className="tech-note"><div className="tech-note-icon"><i className="devicon-bootstrap-plain-wordmark colored"></i></div>Bootsrap</div>
        <div className="tech-note"><div className="tech-note-icon"><i className="devicon-html5-plain-wordmark colored"></i></div>HTML</div>
        <div className="tech-note"><div className="tech-note-icon"><i className="devicon-rails-plain-wordmark colored"></i></div>Ruby on Rails</div>
        <div className="tech-note"><div className="tech-note-icon"><i className="devicon-express-original colored"></i></div>MERN stack</div>
        <div className="tech-note"><div className="tech-note-icon"><i className="devicon-amazonwebservices-plain-wordmark colored"></i></div>AWS services</div>
      </div>
    </div>
  )
} 
export default TechTalkPage