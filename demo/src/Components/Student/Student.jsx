import React from 'react'
import './Student.css'
import PropTypes from "prop-types"
const Student = (props) => {
  return (
    <div className='player'>
        <h1>Player name : {props.name}</h1>
        <h2>Player age : {props.age}</h2>
        <p> isBatsman : {props.isBatsman ? "Yes": "No" }</p>
    </div>
  )
}
Student.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isBatsman : PropTypes.bool,
}

Student.defaultProps = {
    name : "New player",
    age : 0,
    isBatsman : true,
}
export default Student
