import React, { useEffect } from 'react' 

const Navigation = (props) => {

  useEffect(() => {
    if (props.longScroll) {
      let hrefs = ["#technology", "#pricing", "#contact"]
      let anchors = document.querySelectorAll(".nav-anchor")
      for (let index = 0; index < 3; index++) {
        anchors[index].href = hrefs[index]
        anchors[index].onClick = ""
      }
    }
  })

  return (
    <div id="navigation">
      <div id="navigation-link-container">   
        <div id="nav-link-animation" className="navigation-link"><a className="nav-anchor" href="" onClick={props.popUpController}>Technology</a></div>
        <div id="nav-link-animation" className="navigation-link"><a className="nav-anchor" href="" onClick={props.popUpController}>Pricing</a></div>
        <div id="nav-link-animation" className="navigation-link"><a className="nav-anchor" href="" onClick={props.popUpController}>Contact</a></div>
      </div>
    </div>
  )
}
export default Navigation