import React, { Component } from "react";

export class Timer extends Component {

  constructor(props){
   super(props);
   this.state = {
    breakTime: false,
    label: '',
   }
  }




  render(){
   const label = this.state.breakTime ? 'Break' : 'Session'
   return(
    <div>
      <h2 id="timer-label">{label}</h2>
      <div>

      </div>
    </div>
   )
  }
}