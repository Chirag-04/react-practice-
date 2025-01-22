import React, { useEffect, useState } from 'react'
// useEffect hook is used to perform some side task based on some conditions
// for example : we need to perform a task after every re-renders, runs only on mount(adding an element to DOM)

// 1 useEffect(()=>{}) runs after every re-render
// 2 useEffect(()=>{},[]) runs only on mount 
// 3 useEffect(()=>{},[value]) runs on mount+when value changes

const MyComp = () => {
    const [height , setHeight] = useState(window.innerHeight)
    const [width , setWidth] = useState(window.innerWidth)
    // whenever we do resize , height = window.innerHeight and width = window.innderWidth
    useEffect(()=>{
        window.addEventListener("resize",handleSize);     
    })
    const handleSize=()=>{
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }
  return (
    <div>
        <div>
            <p>Height is :{height}px</p>
            <p>Width is :{width}px</p>
        </div>
    </div>
  )
}

export default MyComp

// 562
// 400