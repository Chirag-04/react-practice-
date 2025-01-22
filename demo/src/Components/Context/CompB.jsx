import React from 'react'
import CompC from './CompC'

const CompB = (props) => {
  return (
    <div style={{color : "red" , border:"2px solid black", padding :"20px"}}>
      <h1>Component B</h1>
      {/* <p>hello {props.user}</p> */}
      <CompC/>
    </div>
  )
}

export default CompB
