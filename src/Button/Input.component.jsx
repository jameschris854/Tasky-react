import React from "react";
import "./input.styles.scss";

const InputField = ({handleClick,handleChange,value ,handleKey}) => (
  <div className="input-container">
    <input className="input" type="text" value={value} onChange={handleChange} onKeyPress={handleKey} placeholder='type here....'/>
    <button className='add-button' onClick={handleClick} >Add</button>
  </div>

  // <button>Add</button>
);

export default InputField;
