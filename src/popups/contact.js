import React, {Component} from 'react'

const ContactPage = () => {
  return (
    <>
      <h2>Contact</h2>
      <p>Thankyou for your interest in allowing me to undertake a project for you. Please fill in the below details
       and ill be in touch via your prefered contact method as soon as i can.

       Kindest regards,

       Rory Bell
      </p>
      <div>
        <form>
          <label>
            Name: 
            <input type="text" name="name" />
          </label><br></br>
          <label>
            Email: 
            <input type="email" name="email" />
          </label><br></br>
          <label>
            This section is for you to leave some notes about your project or any basic information you want to fill me in on.
            We can get into the nitty gritty when we touch base. Any information you provide here will be sent to me via email.<br></br>
            <textarea id="w3review" name="user-notes" rows="4" cols="50"></textarea>
          </label><br></br>
          <label>
            Prefered contact method?
          </label>
            <input type="radio" id="email" name="age" value="30" />
            <label for="email">Email</label>
            <input type="radio" id="mobile" name="age" value="60" />
            <label for="mobile">Mobile</label>
        </form>
      </div>
      </>
  )
} 
export default ContactPage