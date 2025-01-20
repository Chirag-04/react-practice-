import React from 'react'
import './card.css'


import profilePic from "../../assets/image.png"
const Card = () => {
  return (
    <div className='card'>
        <img className='card-image' alt='profle pic' src={profilePic}></img>
       <h2 className='heading'>Chirag Maini</h2>
       <p>I am practicing frontend development</p>
    </div>
  )
}

export default Card
