import React from 'react'
import './list.css'
const List = (props) => {
    if (!props.playerName || props.playerName.length === 0) {
        return null;
      }
  return (
    <div className='sports'>

    <h2 className='type'>{props.sports}</h2>
    <ul>
        {props.playerName.map((player)=>{
            return <li className='name'>{player.name}</li>
        })}
    </ul>
    
    </div>
  )
}

export default List