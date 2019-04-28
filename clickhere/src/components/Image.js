import React from "react";
import "../css/Image.css";

function Image(props) {
  return (
    <div className="card imageCard">
      <div className = "card-body">
        <img src={props.source} className="images" alt="character" onClick={ () => props.chooseImage(props.refId)}></img>
        Image #: {props.refId}
      </div>
    </div>
  );
}

export default Image;
