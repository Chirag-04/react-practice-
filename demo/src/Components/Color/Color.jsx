import React, { useState } from 'react'
import './Color.css'
const Color = () => {
    const[color ,setColor] = useState("#FFFFFF")
    const handleColor=(e)=>{
        setColor(e.target.value);
    }
  return (
    <div className='main'>
        <h1>Color Picker :</h1>
        <div className='box' style={{backgroundColor:color}}>
        </div>
        <h2>Select a color</h2>
        <input type='color' onChange={(e)=>handleColor(e)}></input>
        <div className='text'>Selected color : {color}</div>
    </div>
  )
}

export default Color