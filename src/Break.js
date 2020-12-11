import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown } from "react-icons/fa"; 


export function Break(props) {

  const [breakLenght, setBreakLength] = useState(5);

  const breakDecrement = ()=>{
   if (breakLenght > 0) {
    setBreakLength(breakLenght - 1);
   }
  }

  const breakIncrement = ()=>{
   setBreakLength(breakLenght + 1);
  }

  return (
   <div>
    <h2 id="break-label">Break Length</h2>
    <div className="buttons">
     <button id="break-decrement" onClick={breakDecrement}>
      <FaArrowDown />
     </button>
     <span id="break-length" className="text-center h2">
      {breakLenght}
     </span>
     <button id="break-increment" onClick={breakIncrement}>
      <FaArrowUp />
     </button>
    </div>
   </div>
  )
}