import React from "react";

import DonutCard from "./DonutCard";

function DonutCards({ donuts, setDonuts }) {
  const renderDonuts = donuts.map((donut, key) => {
    return <DonutCard donut={donut} key={key} handleDelete={handleDelete} />;
  });

  function handleDelete(donut) {
    fetch(`http://localhost:9292/donuts/${donut.name}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(setDonuts(donuts.filter((item) => item.name !== donut.name)))
      .catch((err) => console.log("🔥", err));
  }
  return <div className="render-donuts">{renderDonuts}</div>;
}

export default DonutCards;
