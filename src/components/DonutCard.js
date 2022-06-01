import React from "react";
import donut from "../pics/donut.png";

function DonutCard() {
  function showReviews() {
    console.log("Shows reviews.");
  }
  function addReview() {
    console.log("Add a review.");
  }
  function deleteDonut() {
    console.log("Delete this donut.");
  }

  return (
    <div className="donut-card">
      <h2>Donut.type</h2>
      <p>Donut.desc</p>
      <img className="card-img" src={donut} />
      <div>
        <button onClick={showReviews} className="card-btn">
          reviews
        </button>
        <button onClick={addReview} className="card-btn">
          add review
        </button>
        <button onClick={deleteDonut} className="card-btn">
          delete
        </button>
      </div>
    </div>
  );
}

export default DonutCard;
