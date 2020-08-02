import React, {useState, useEffect} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import Flash from '../components/Flash'

const ContactPage = (props) => {

  const [verified, setVerified] = useState(null)
  const [preferrance, setpreferrance] = useState(null)
  const [message, setMessage] = useState("")

  const radioCheck = (value) => {
    value.target.id === "mobile" ? setpreferrance("mobile") : setpreferrance("email")
  }

  const validate_contact = (params) => {
    // validations!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    console.log(params)
  }

  function onChange(value) { 
    fetch(`https://x47fbxuhyg.execute-api.ap-southeast-2.amazonaws.com/Prod/recaptcha`, {
      method: 'post',
      body: JSON.stringify({"value": value})
    })
    .then(res => res.json())
    .then(result => {
      if (result.success === true) {
        setVerified(true)
      } else {
        setVerified(false)
      }
    })
    .then(() => {
      setTimeout(function(){
        setVerified(false)
      }, 120000)
    })
    .catch(error => console.log(error))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    let params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email-input").value,
      description: document.getElementById("notes").value,
      preferance: preferrance
    }

    // validate_contact(params)

    fetch('https://x47fbxuhyg.execute-api.ap-southeast-2.amazonaws.com/Prod/submit', {
      method: 'post',
      body: JSON.stringify(params)
    }).then(res => { return res.json() }).then(data => {
      if (data.message === "success!") {
        props.setFlash(true)
        setMessage("Your form has been submitted!")
      } else {
        props.setFlash(true)
        setMessage("We are experiencing technical difficulties. Please try again later.")
      }
    }).catch(e => console.log("fail"))
  }
  

  let buttonOrRecaptcha
  
  if (verified === true) {
    buttonOrRecaptcha = <button onClick={handleSubmit}>submit</button>
  } else {
    buttonOrRecaptcha =
    <div className="recaptcha">
      <ReCAPTCHA
        sitekey="6LdtO7YZAAAAAEHTw1uIDqBOh5s0CfB5936bHoQC"
        onChange={onChange}
      />
    </div>
  }

  return (
    <>
      <div id="inner-content">
      <h2 id="contact">Contact</h2>
        <p>Thankyou for your interest in allowing me to undertake a project for you. Please fill in the below details
         and i'll be in touch via your preferred contact method as soon as I can.
        </p>
        <p>Kindest regards, Rory Bell.</p>
        <div id="form-wrapper">
          <form id="contact-form">
            <label>Name</label>
            <input id="name" type="text" name="name" />

            <label>Email</label>
            <input id="email-input" type="email" name="email" />

            <p>
              This section is for you to leave some notes about your project or any basic information you want to fill me in on.
              We can get into the nitty gritty when we touch base. Any information you provide here will be sent to me via email.
            </p>
            
            <textarea id="notes" name="user-notes" rows="4" cols="50"></textarea>

            <label className="label-text-white">Preferred contact method?</label>
            <div id="radio-buttons">
              <div>
                <input type="radio" id="email" name="age" value="email" onChange={radioCheck} />
                <label className="label-text-white" htmlFor="email">Email</label>
              </div>
              <div>
                <input type="radio" id="mobile" name="age" value="phone" onChange={radioCheck}/>
                <label className="label-text-white" htmlFor="mobile">Mobile</label>
              </div>
            </div>
            {buttonOrRecaptcha}
          </form>
          {props.flash === true && message === "Your form has been submitted!" ? <Flash message={message} type="success!" /> : ""}
          {props.flash === true && message === "We are experiencing technical difficulties. Please try again later." ? <Flash message={message} /> : ""}
        </div>
      </div>
    </>
  )
} 
export default ContactPage
