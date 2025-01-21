import React, { useState } from 'react'

export const Update = () => {
    const [name , setName] =  useState("");
    const [age , setAge] =  useState("");
    const [info , setInfo] = useState({
        "name" : "John Doe",
        "age" : 12,
    })
    const updateName=(e)=>{
        console.log(e.target.value)
        // setName(e.target.value);
        setName(function(prevName){
            return e.target.value;
        });
    }
    const updateAge=(e)=>{
        console.log(e.target.value)
        // setAge(e.target.value)
        setAge(function(age){
            return e.target.value;
        });
    }
    const updateInfo=()=>{
        console.log("name",name)
        console.log("age",age)
        setInfo((prevInfo)=>({
            ...prevInfo,
            name : name,
            age :  age,
        }))
    }
  return (
    <div>
        <div>
            <p>User Name : {info.name}</p>
            <p>Age : {info.age}</p>
        </div>
        
        <input placeholder='Enter user name' onChange={(e)=>updateName(e)}/><br/><br/>
        <input placeholder='Enter age'onChange={(e)=>updateAge(e)} /><br/><br/>
        <button onClick={updateInfo} >Submit</button>
    </div>
  )
}
