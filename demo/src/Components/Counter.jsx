import React, { useState } from 'react'

// change name ✅
// increment age 
// toggle b.w true and false 
const Counter = () => {
    var [counter , setCounter] = useState(10);
    const handleIncClick=()=>{
       const interval = setInterval(()=>{
            setCounter(function(preValue){
                // in order to access preValue we did this 
                // we can't do outside this 
                if(preValue == 1){
                    clearInterval(interval);
                }
                return preValue-1;
            });
            console.log("hi")
         },1000)

    }
  return (
    <div>
        <span>{counter}</span> <br/><br/>
        <button onClick={()=>handleIncClick()}>Start Timer</button> <br/><br/>
    </div>
  )
}

export default Counter
