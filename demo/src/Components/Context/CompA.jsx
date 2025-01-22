import React, { createContext, useContext, useState } from 'react' // step 1 to import createContext
import './style.css'
import CompB from './CompB'

export const UserContext =  createContext();


const CompA = () => {
    const [name , setName] = useState("Chirag Maini");  
  return (
    <div style={{color : "red" , border:"2px solid black", padding :"20px"}}>
        <h1>Component A</h1>
         <p>hello {name}</p>
         <UserContext.Provider value={name}>
        <CompB user={name} />
        </UserContext.Provider>
    </div>
  )
}

export default CompA