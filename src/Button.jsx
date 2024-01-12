import React, { useState } from 'react'

function Button(props) {
    
    
  return (
    <button onClick={(e)=>{
      // props.setNumber()
      // props.update(prev=>props.value==='+'?prev+1:prev-1)
      props.onClick(e)
    }}>{props.text}</button>
  )
}

export default Button