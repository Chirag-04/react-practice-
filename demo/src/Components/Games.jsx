import React, { useState } from 'react'

const Games = () => {
    const [list , setList] = useState([{
        "name" : "Cricket",
        "size" :  11,
        "type" : "outdoor"
    }])
    const handleClick=()=>{
        const sportsName = document.getElementById("sportsname").value 
        const sportsSize = document.getElementById("sportsize").value 
        const sportsType = document.getElementById("sportype").value 
        document.getElementById("sportsname").value = "";
        document.getElementById("sportsize").value = "";
        document.getElementById("sportype").value = "";
        const object = {
            "name" : sportsName,
            "size" : sportsSize,
            "type" : sportsType
        }
        console.log(sportsName ,sportsSize , sportsType);
        setList((prevArray) => [...prevArray , object]);
    }

    const handleRemoveClick= (index)=>{
        console.log(index)
        setList((prevArray)=>prevArray.filter((e,i)=>i!=index))
    }
  return (
    <div style={{display:"flex" , flexDirection:"column" , border:"2px solid red" ,padding:"30px" ,"width":"50%" , "textAlign":"center"}}>
        <h1>List of Games</h1>
      <div>
        <ul>
            {list.map((game,index)=>{
                return <li style={{cursor:"pointer"}} onClick={()=>handleRemoveClick(index)} key={index}>{game.name} is an {game.type} and has {game.size} players </li>
            })}
        </ul>
        <div style={{display:"flex" , flexDirection:"column" , gap:"10px" ,width:"80%"}}>
        <input id='sportsname' type='text' placeholder='Enter name' />
        <input id='sportsize' type='number' placeholder='Enter size' />
        <input id='sportype' type='text' placeholder='Enter type' />
        <button onClick={handleClick} >Add Game</button>
        </div>
      </div>
    </div>
  )
}

export default Games
