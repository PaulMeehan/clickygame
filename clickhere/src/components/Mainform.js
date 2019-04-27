import React from "react";
import "../css/Mainform.css";

function Mainform() {
  return (
    <div className="container">
      <div className="jumbotron">
        This is the main form.
      </div>
      <div className="row">
        <div className="col-md-12">
          <img src="../images/daffy.jpg" alt="Daffy"></img>
        </div>
      </div>
    </div>
  );
}

export default Mainform;
