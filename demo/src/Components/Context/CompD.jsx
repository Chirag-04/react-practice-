import React, { useContext } from 'react'
import { UserContext } from './CompA'

const CompD = (props) => {
    const user = useContext(UserContext);
  return (
    <div style={{color : "red" , border:"2px solid black", padding :"20px"}}>
      <h1>Component D</h1>
      <p>Byee {user}</p>
    </div>
  )
}

export default CompD
