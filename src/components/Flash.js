import React, { useEffect } from 'react'

const Flash = (props) => {

    useEffect(()=>{
      props.type === "success!" ? document.getElementById("flash").setAttribute("style", "background-color:green") : 
      document.getElementById("flash").setAttribute("style", "background-color:red")
    })

    return (
        <div id="flash">
            <p>{props.message}</p>
        </div>
    )
}

export default Flash