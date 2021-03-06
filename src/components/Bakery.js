import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoadingDonut from "../pics/loading.gif";

function Bakery() {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: type,
      description: description,
      image_url: imageURL,
    };

    // ---------------------- FETCH AREA ---------------------- //
    fetch("http://localhost:9292/new_donut", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log("Successfully added donut:", data);
      })
      .then(history.push("/shop"))
      .catch((error) => {
        console.error("Error adding new donut:", error);
      });

    // ---------------------- FETCH AREA ---------------------- //
  }
  return (
    <div className="bakery">
      <h1>Bakery</h1>
      <div className="creator-donut">
        <h1>{!type ? <div className="space">X</div> : type}</h1>
        <h2>{!description ? <div className="space">X</div> : description}</h2>

        {imageURL === "" ? (
          <img src={LoadingDonut} alt="loading-gif" />
        ) : (
          <img src={imageURL} alt="current image" className="created-img" />
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div id="form-container">
          <div className="form-item">
            <label>Type: </label>
            <input
              type="text"
              onChange={(e) => setType(e.target.value)}
              className="creator-input"
            />
          </div>

          <div className="form-item">
            <label>Description: </label>
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              className="creator-input"
            />
          </div>

          <div className="form-item">
            <label>Image URL: </label>
            <input
              type="text"
              onChange={(e) => setImageURL(e.target.value)}
              className="creator-input"
            />
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
