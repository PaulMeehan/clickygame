import React from "react";
import "../css/Banner.css";

function Mainform(props) {
  return (
    <div className="container">
      <div className="row" id="topBanner">
        <div className="col-md-4" id="name">
          Clicky Game!
        </div>
        <div className="col-md-4" id="message">
          {props.message}
        </div>
        <div className="col-md-4" id="scores">
          Your score = {props.numGuesses}
          <br />
          Top Score = {props.highScore} 
        </div>
      </div>
    </div>
  );
}

export default Mainform;
