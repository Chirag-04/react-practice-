import React, { useState } from 'react'

export const Update = () => {
    const [player , setPlayer] =  useState(["Rohit" , "Virat" , "Bumrah"]);
    const handleClick=()=>{
        const newName = document.getElementById("box").value;
        document.getElementById("box").value = " ";
        console.log(newName)
        // setPlayer([...player ,newName]);
        setPlayer((prevArray)=>[...prevArray , newName])
    }
  return (
    <div>
        <h1>List of Cricketers</h1>
        <ul>
            {player.map((p,index)=>{
                return <li key={index}>{p}</li>
            })}
        </ul>

        <input id='box' type='text' placeholder='Enter name' />
        <button onClick={handleClick} >Submit</button>
    </div>
  )
}
