import React from "react";
import LoadingDonut from "../pics/loading.gif";

function Bakery() {
  function handleType(e) {
    console.log("TYPE: ", e.target.value);
  }
  function handleDesc(e) {
    console.log("DESC: ", e.target.value);
  }
  function handleImg(e) {
    console.log("IMG URL: ", e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("TEXT SUBMITTED: ", e.target.value);
  }
  return (
    <div className="bakery">
      <h1>Bakery</h1>
      <div className="creator-donut">
        <img src={LoadingDonut} alt="loading-gif" />
      </div>

      <form onSubmit={handleSubmit}>
        <div id="form-container">
          <div className="form-item">
            <label>Type: </label>
            <input
              type="text"
              onChange={handleType}
              className="creator-input"
            />
          </div>

          <div className="form-item">
            <label>Description: </label>
            <input
              type="text"
              onChange={handleDesc}
              className="creator-input"
            />
          </div>

          <div className="form-item">
            <label>Image URL: </label>
            <input type="text" onChange={handleImg} className="creator-input" />
          </div>

          <div className="form-item">
            <input type="submit" className="creator-submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Bakery;
