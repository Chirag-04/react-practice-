import React, { useState } from 'react'
import CompD from './CompD'

const CompC = (props) => {
 
  return (
    <div style={{color : "red" , border:"2px solid black", padding :"20px"}}>
       
        <h1>Component C</h1>
        {/* <p>hello {props.user}</p> */}
        <CompD/>
    </div>
  )
}

export default CompC