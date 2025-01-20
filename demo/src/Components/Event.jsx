import React, { useState } from "react";

// task 1 :
const Event = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [color , setColor] = useState("");
  const changeInput = (e) => {
    setName(e.target.value);
  };
  const changeSelect = (e) => {
    setCategory(e.target.value);
  };
  const changeRadio=(e)=>{
    setColor(e.target.value);
  }
  return (
    <div>
      <input
        placeholder="Enter text"
        onChange={(e) => changeInput(e)}
        value={name}
      />
      <p>Your name is:{name} </p>
      <select onChange={(e) => changeSelect(e)}>
        <option>Paytm</option>
        <option>PhonePe</option>
        <option>Mastercard</option>
        <option>Visa</option>
      </select>
      <p>selected mode of payment is : {category}</p>

      <label>
        <input onChange={(e)=> changeRadio(e)}type="radio" name="color" value="red" /> Red
      </label>

      <label>
        <input onChange={(e)=> changeRadio(e)}type="radio" name="color" value="blue" /> Blue
      </label>

      <label>
        <input onChange={(e)=> changeRadio(e)}type="radio" name="color" value="green" /> Green
      </label>

      <p>Selected color : {color}</p>
    </div>
  );
};

export default Event;
