import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function DonutCard({ donut, handleDelete }) {
  const history = useHistory();

  // ------------ FETCH AREA  ------------  /
  // useEffect(() => {
  //   fetch("http://localhost:9292/reviews", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((r) => r.json())
  //     .then(setReviews)
  //     .catch((err) => console.log("🔥", err));
  // }, []);
  // ------------ FETCH AREA  ------------  //

  function showReviews() {
    console.log("See reviews.");
  }
  function addReview() {
    console.log("Add a review.");
  }

  function deleteDonut() {
    console.log("You are deleting:", donut.name);
    handleDelete(donut);
  }

  return (
    <div className="donut-card">
      <h2>{donut.name}</h2>
      <img className="card-img" src={donut.image_url} alt="donut-img" />
      <p>{donut.description}</p>
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
