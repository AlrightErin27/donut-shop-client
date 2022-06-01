import React from "react";
import { useHistory } from "react-router-dom";

function DonutCard({ donut, handleDelete }) {
  const history = useHistory();

  function showReviews() {
    console.log("Shows reviews.");
  }
  function addReview() {
    console.log("Add a review.");
  }
  function deleteDonut() {
    console.log("You are deleting:", donut.name);
    handleDelete(donut);
    history.push("/shop");
    document.location.reload();
  }

  return (
    <div className="donut-card">
      <h2>{donut.name}</h2>
      <p>{donut.description}</p>
      <img className="card-img" src={donut.image_url} alt="donut-img" />
      <div className="card-btn-container">
        <button onClick={showReviews} className="card-btn">
          <p>reviews</p>
        </button>
        <button onClick={addReview} className="card-btn">
          <p>+ review</p>
        </button>
        <button onClick={deleteDonut} className="card-btn">
          <p>delete</p>
        </button>
      </div>
    </div>
  );
}

export default DonutCard;
