import React, {Component} from 'react'

const SellNote = (props) => {
  if (props.viewport < 500 && props.side === "right") {
    return (
      <div>
        <div id={"sell-note-" + props.side}>
          <p id="sell-note-text"> {props.text} </p>
          <div className="sell-note-image"><img src={props.image} alt="meaningful icon" /></div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div id={"sell-note-" + props.side}>
          <div className="sell-note-image"><img src={props.image} alt="meaningful icon" /></div>
          <p id="sell-note-text"> {props.text} </p>
        </div>
      </div>
    )
  }
  }
export default SellNote
