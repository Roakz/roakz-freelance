import React, {useState} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const ContactPage = () => {

  const [verified, setVerified] = useState(null)

  function onChange(value) { 
    fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_OTHER}&response=${value}`)
    .then(res => res.json())
    .then(result => {
      if (result.success == true) {
        setVerified(true)
      } else {
        setVerified(false)
      }
    })
    .then(result => {
      setTimeout(function(){
        setVerified(false)
      }, 120000)
    })
    .catch(error => console.log(error))
  }

  let buttonOrRecaptcha
  
  if (verified == true) {
    buttonOrRecaptcha = <button>submit</button>
  } else {
    buttonOrRecaptcha =
    <div class="recaptcha">
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_GOOGLE_KEY}
        onChange={onChange}
      />
    </div>
  }

  return (
    <>
      <div id="inner-content">
      <h2>Contact</h2>
        <p>Thankyou for your interest in allowing me to undertake a project for you. Please fill in the below details
         and ill be in touch via your prefered contact method as soon as i can.
        </p>
        <p>Kindest regards, Rory Bell.</p>
        <div id="form-wrapper">
          <form id="contact-form">
            <label>Name</label>
            <input type="text" name="name" />

            <label>Email</label>
            <input type="email" name="email" />

            <p>
              This section is for you to leave some notes about your project or any basic information you want to fill me in on.
              We can get into the nitty gritty when we touch base. Any information you provide here will be sent to me via email.
            </p>
            
            <textarea id="w3review" name="user-notes" rows="4" cols="50"></textarea>

            <label class="label-text-white">Prefered contact method?</label>
            <div id="radio-buttons">
              <div>
                <input type="radio" id="email" name="age" value="30" />
                <label class="label-text-white" for="email">Email</label>
              </div>
              <div>
                <input type="radio" id="mobile" name="age" value="60" />
                <label class="label-text-white" for="mobile">Mobile</label>
              </div>
            </div>
            {buttonOrRecaptcha}
          </form>
        </div>
      </div>
    </>
  )
} 
export default ContactPage