import React, {Component} from 'react'

const SellNote = (props) => {
  return (
    <div>
      <div id={"sell-note-" + props.side}>
        <div class="sell-note-image"><img src={props.image} /></div>
        <p id="sell-note-text"> {props.text} </p>
      </div>
   </div>
  )
  }
export default SellNote
