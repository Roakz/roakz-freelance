import React, {Component} from 'react'

const SellNote = (props) => {
  return (
   <div id={"sell-note-" + props.side}>
     <div class="sell-note-image"><img src={props.image} /></div>
   </div>
  )
  }
export default SellNote
