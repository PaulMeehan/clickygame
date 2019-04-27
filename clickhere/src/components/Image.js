import React from "react";
import "../css/Image.css";

function Image() {
  return (
    <div className="images">
      <div className="card mb-4">
        <div className = "card-body">
          <img src="../images/daffy.jpg" alt="Daffy" heigh="100px" width="100px"></img>
        </div>
      </div>
    </div>
  );
}

export default Image;
