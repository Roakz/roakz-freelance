import React, { Component } from 'react' 

const Navigation = (props) => {

    return (
      <div id="navigation">
        <div id="navigation-link-container">   
          <div class="navigation-link"><a href="" onClick={props.popUpController}>Projects</a></div>
          <div class="navigation-link"><a href="" onClick={props.popUpController}>Technology</a></div>
          <div class="navigation-link"><a href="" onClick={props.popUpController}>Pricing</a></div>
          <div class="navigation-link"><a href="" onClick={props.popUpController}>Contact</a></div>
        </div>
      </div>
    )
}
export default Navigation