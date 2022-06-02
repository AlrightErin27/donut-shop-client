import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import EditDonut from "./EditDonut";

function DonutCard({ donut, customers, handleDelete, handleYourNuts }) {
  const history = useHistory();
  const reviewsArr = [];
  const [donutsReviews, setDonutsReviews] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [popupReviews, setPopupReviews] = useState(false);
  // const [isEditing, setIsEditing] = useState(false);

  // ------------ FETCH AREA  ------------  /
  useEffect(() => {
    fetch(`http://localhost:9292/reviews/donut/${donut.name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(setReviews)
      .catch((err) => console.log("🔥", err));
  }, []);

  function showReviews() {
    let customerArr = [];
    for (let i = 0; i < reviews.length; i++) {
      customers.forEach((customer) => {
        if (customer.id === reviews[i].customer_id) {
          customerArr.push(customer.name);
        }
      });
      reviewsArr.push([`${customerArr[i]}: ${reviews[i].review}`]);
    }
    setDonutsReviews(reviewsArr);
    setPopupReviews(!popupReviews);
  }
  // console.log(donutsReviews);

  // function editDonut() {
  //   console.log("edit donut:", donut.name);
  //   handleEdit(donut);
  // }

  function deleteDonut() {
    console.log("You are deleting:", donut.name);
    handleDelete(donut);
  }

  return (
    <div className="donut-card">
      <h2>{donut.name}</h2>
      <img className="card-img" src={donut.image_url} alt="donut-img" />
      <p>{donut.description}</p>
      {/* THIS IS A DOUBLE DYNAMIC TERNARY STATEMENT. SHOW REVIEWS IF CLICKED. IF NO REVIEWS TO SHOW, SAY NO REVIEWS. */}
      {popupReviews === true ? (
        <>
          {!donutsReviews.length ? (
            <p>(no reviews)</p>
          ) : (
            donutsReviews.map((item, idx) => <li key={idx}>{item}</li>)
          )}
        </>
      ) : null}
      <EditDonut donut={donut} handleYourNuts={handleYourNuts} />
      ``
      <div className="card-btn-container">
        <button onClick={showReviews} className="card-btn">
          <p>reviews</p>
        </button>
        {/* <button onClick={editDonut} className="card-btn">
          <p>edit</p>
        </button> */}
        <button onClick={deleteDonut} className="card-btn">
          <p>delete</p>
        </button>
      </div>
    </div>
  );
}

export default DonutCard;
