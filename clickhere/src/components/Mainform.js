import React from "react";
import "../css/Mainform.css";

function Mainform(props) {
  return (
    <div className="container">
      <div className="jumbotron">
        This is the top of the main form.  Number of guesses = {props.numGuesses}.  High Score = {props.highScore}
      </div>
    </div>
  );
}

export default Mainform;
