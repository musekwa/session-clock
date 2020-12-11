import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"; 


export function Session(props) {

  const [sessionLenght, setSessionLength] = useState(25);

  const sessionDecrement = ()=>{
     if (sessionLenght > 0){
      setSessionLength(sessionLenght - 1);
     }
  }

  const sessionIncrement = ()=>{
   setSessionLength(sessionLenght + 1);
  }

  return (
   <div>
    <h2 id="session-label">Session Length</h2>
    <div className="buttons"> 
     <button id="session-decrement" onClick={sessionDecrement}>
      <FaArrowDown />
     </button>
     <span id="session-length" className="text-center h2">
      {sessionLenght}
     </span>
     <button id="session-increment" onClick={sessionIncrement}>
      <FaArrowUp />
     </button>
    </div>
   </div>
  )
}