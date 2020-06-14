import React, {Component} from 'react'

const ContactPage = () => {
  return (
    <>
      <div id="inner-content">
      <h2>Contact</h2>
        <p>Thankyou for your interest in allowing me to undertake a project for you. Please fill in the below details
         and ill be in touch via your prefered contact method as soon as i can.
        </p>
        <p>Kindest regards, Rory Bell.</p>
        <div id="form-wrapper">
          <form>
            <label>Name</label>
            <input type="text" name="name" />

            <label>Email</label>
            <input type="email" name="email" />

            <p>
              This section is for you to leave some notes about your project or any basic information you want to fill me in on.
              We can get into the nitty gritty when we touch base. Any information you provide here will be sent to me via email.
            </p>
            <textarea id="w3review" name="user-notes" rows="4" cols="50"></textarea>

            <label>Prefered contact method?</label>
            <div>
              <input type="radio" id="email" name="age" value="30" />
              <label for="email">Email</label>
              <input type="radio" id="mobile" name="age" value="60" />
              <label for="mobile">Mobile</label>
            </div>
          </form>
        </div>
      </div>
      </>
  )
} 
export default ContactPage