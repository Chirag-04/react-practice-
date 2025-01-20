import React from 'react'
const Btn = () => {
    let count = 0 ;
    const handleClick=(e)=>{
        e.target.textContent = "you clicked😀"
    }
    const handleImageClick=(e)=>{
        e.target.style.display = "none" ;
    }
  return (
    <div>
      <button onClick={(e)=>handleClick(e)}>Click Here</button>
      <img onClick={(e)=> handleImageClick(e)}
      src='https://1.bp.blogspot.com/-iFch6bzgC3o/YOgXYmexylI/AAAAAAAAD7M/bQc3-40tzk0nIHG0RbP7ObPlFWXE7gjsQCLcBGAsYHQ/s0/Virat-Kohli-Wiki.jpg'/>
    </div>
  )
}
export default Btn
