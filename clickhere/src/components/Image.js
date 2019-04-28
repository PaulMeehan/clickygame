import React from "react";
import "../css/Image.css";

function Image({
  source,
  ref
}) {
  return (
    <div className="card imageCard">
      <div className = "card-body">
        <img src={source} className="images" alt="character"></img>
        Image #: {ref}
      </div>
    </div>
  );
}

export default Image;
