import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import EditDonut from "./EditDonut";
import AddReview from "./AddReview";

function DonutCard({ donut, customers, handleDelete, handleYourNuts }) {
  const reviewsArr = [];
  const [donutsReviews, setDonutsReviews] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [popupReviews, setPopupReviews] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);
  const history = useHistory();
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
  // ---------------------- FETCH AREA ---------------------- //

  function showReviews() {
    let customerArr = [];
    // console.log(author);
    for (let i = 0; i < reviews.length; i++) {
      customers.forEach((customer) => {
        // if (customer.id === reviews[i].customer_id) {
        //   if (customer.name === "") {
        //     customerArr.push(customer.name);
        //   } else if (customer.name !== "") {
        //     let tName = `${customer.name}:`;
        //     customerArr.push(tName);
        //   }
        // }

        if (customer.id === reviews[i].customer_id) {
          customerArr.push(`${customer.name}:`);
        } else {
          customerArr.push(``);
        }
      });
      reviewsArr.push([`${customerArr[i]} ${reviews[i].review}`]);
    }
    setDonutsReviews(reviewsArr);
    setPopupReviews(!popupReviews);
  }

  function deleteDonut() {
    console.log("You are deleting:", donut.name);
    handleDelete(donut);
  }

  function handleDeezNuts(data) {
    fetch("http://localhost:9292/new_review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then(document.location.reload());
  }
  function closeModal() {
    setIsEditing(false);
    setIsReviewing(false);

    history.push("/shop");
  }

  return (
    <div className="donut-card">
      <h2>{donut.name}</h2>
      <img className="card-img" src={donut.image_url} alt="donut-img" />
      <p>{donut.description}</p>
      {/* THIS IS A DOUBLE DYNAMIC TERNARY STATEMENT. SHOW REVIEWS IF CLICKED. IF NO REVIEWS TO SHOW, SAY NO REVIEWS. */}
      {popupReviews === true ? (
        <div className="review-modal">
          {!donutsReviews.length ? (
            <p>(no reviews)</p>
          ) : (
            donutsReviews.map((item, idx) => <li key={idx}>{item}</li>)
          )}
          <button
            onClick={() => {
              setPopupReviews(false);
            }}
          >
            X
          </button>
        </div>
      ) : null}

      {isEditing === true ? (
        <EditDonut
          donut={donut}
          handleYourNuts={handleYourNuts}
          closeModal={closeModal}
        />
      ) : null}

      {isReviewing === true ? (
        <AddReview
          donut={donut}
          closeModal={closeModal}
          handleDeezNuts={handleDeezNuts}
        />
      ) : null}

      <div className="card-btn-container">
        <button onClick={showReviews} className="card-btn">
          <p>reviews</p>
        </button>

        <button
          onClick={() => {
            setIsReviewing(!isReviewing);
          }}
          className="card-btn"
        >
          <p>+review</p>
        </button>

        <button
          onClick={() => {
            setIsEditing(!isEditing);
          }}
          className="card-btn"
        >
          <p>edit</p>
        </button>
        <button onClick={deleteDonut} className="card-btn">
          <p>delete</p>
        </button>
      </div>
    </div>
  );
}

export default DonutCard;
