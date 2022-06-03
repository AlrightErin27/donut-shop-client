import React, { useState } from "react";

function AddReview({ closeModal, handleDeezNuts, donut, handleAuth }) {
  const [author, setAuthor] = useState("");
  const [review, setReview] = useState("");

  function setYourName(e) {
    // console.log(e.target.value, "AUTHOR");
    setAuthor(e.target.value);
  }
  function setText(e) {
    // console.log(e.target.value, "NEW REVIEW");
    setReview(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const totalReview = `${author}: ${review}`;
    console.log(totalReview);
    const data = {
      rating: 0,
      review: totalReview,
      donut_id: donut.id,
      customer_id: 81,
    };
    handleDeezNuts(data);
  }

  return (
    <div className="add-modal">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="input-holder">
            <div className="edit-form-item">
              <label>
                Author: <br />
              </label>
              <input type="text" onChange={setYourName} />
            </div>

            <div className="edit-form-item">
              <label>Review: </label>
              <input type="text" onChange={setText} />
            </div>
          </div>

          <div>
            <input type="submit" className="edit-form-submit" />
          </div>
        </div>
      </form>
      <button onClick={closeModal}>X</button>
    </div>
  );
}

export default AddReview;
