import React, { useState } from 'react'

function Button(props) {
    const [number,setNumber]= useState(0)
    
  return (
    <button onClick={(e)=>{
        props.onClick()
        if(props.value==='+') setNumber(number+1)
        else if(props.value==='-') setNumber(number-1)
    }}>{number}{props.text}</button>
  )
}

export default Button