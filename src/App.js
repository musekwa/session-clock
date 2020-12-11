import './App.css';
import { Component } from 'react';
import { Session } from "./Session";
import { Break } from "./Break";
import { Timer } from "./Timer"

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        break: 5,
        session: 25,
    }
  }
  


  render(){
   
    return(
      <div className="container">
        <h1 className="text-center">25 + 5 Clock</h1>
        <div className="break-length-container">
          <Break />
          <Session />
        </div>
        <div id="timer-box">
          <Timer />
        </div>
      </div>
    )
  }
}
