import React from 'react'
const Button = () => {
    const styles = {
        padding: "10px",
        backgroundColor:"rgb(59, 150, 236)",
        border: "none",
        borderRadius: "5px",
        color:"white",
        cursor: "pointer",
        margin: "20px",
    }
  return (
    <div>
        <button style={styles}>Click Here</button>
    </div>
  )
}

export default Button