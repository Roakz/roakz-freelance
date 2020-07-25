import React, {useState} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { PresignedPost } from 'aws-sdk/clients/s3'

const ContactPage = () => {

  const [verified, setVerified] = useState(null)

  function onChange(value) { 
    fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_OTHER}&response=${value}`)
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
    let AWS = require('aws-sdk/dist/aws-sdk-react-native');
    AWS.config.update({region: 'ap-southeast-2', accessKeyId: 'Replace me', secretAccessKey: 'Replace me'})
    let params = {
       Message: `Name: ${document.getElementById("name").value}\nEmail: ${document.getElementById("email-input").value}\nMessage: ${document.getElementById("notes").value}`,
       TopicArn: "Replace me" }
    let publishTextPromise = new AWS.SNS().publish(params).promise()
    publishTextPromise.then(data => console.log(data)).catch(e => console.log(e))
  }
  

  let buttonOrRecaptcha
  
  if (verified === true) {
    buttonOrRecaptcha = <button onClick={handleSubmit}>submit</button>
  } else {
    buttonOrRecaptcha =
    <div className="recaptcha">
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_GOOGLE_KEY}
        onChange={onChange}
      />
    </div>
  }

  return (
    <>
      <div id="inner-content">
      <h2 id="contact">Contact</h2>
        <p>Thankyou for your interest in allowing me to undertake a project for you. Please fill in the below details
         and ill be in touch via your prefered contact method as soon as i can.
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

            <label className="label-text-white">Prefered contact method?</label>
            <div id="radio-buttons">
              <div>
                <input type="radio" id="email" name="age" value="30" />
                <label className="label-text-white" htmlFor="email">Email</label>
              </div>
              <div>
                <input type="radio" id="mobile" name="age" value="60" />
                <label className="label-text-white" htmlFor="mobile">Mobile</label>
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