import React from "react";
import { NavLink } from "react-router-dom";
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

      <div id="form-container">
        <form onSubmit={handleSubmit} className="creator-form">
          <div className="form-item">
            <label>Type:</label>
            <input type="text" onChange={handleType} />
          </div>

          <div className="form-item">
            <label>Description:</label>
            <input type="text" onChange={handleDesc} />
          </div>

          <div className="form-item">
            <label>Image URL:</label>
            <input type="text" onChange={handleImg} />
          </div>

          <NavLink to="/shop">
            <input type="submit" className="form-submit" />
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default Bakery;
