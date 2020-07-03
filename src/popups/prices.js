import React from 'react'


const PricesPage = (props) => {

  return (
    <div id="prices-outer-wrapper">
      <div id="prices-wrapper">
        <h2>Pricing</h2>
        <p>
          Im glad you made it this far! As far as pricing goes it depends largely on your idea and what your trying to do.
          I.E how much time do i need to spend helping bring your idea to life. Small static websites, that dont require to much time, could range anywhere
          from $1000 dollars and upwards. If there is more technical aspects involved, and a backend needed, Prices range anywhere from $4000 upwards. Please bear in mind that
          these are introductory figures subject to a qoute and your specific needs.
        </p>

        <p>
          I will maintain the upmost transparancey with you as my cleint from the beggining to the end. This is why a qoute is required for each specirfic
          task. To ensure i can offer a fixed price that we are both happy with.
        </p>

        <button id="request-qoute" onClick={props.popUpController}>Request a qoute</button>
      </div> 
      <div id="curly-right"><img src="/63503.jpg" /><p id="attribution">image provided by studiogstock from freepik</p></div>
    </div>
    
  )
} 
export default PricesPage