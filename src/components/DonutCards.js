import React from "react";

import DonutCard from "./DonutCard";

function DonutCards({ donuts, customers }) {
  const renderDonuts = donuts.map((donut, key) => {
    return (
      <DonutCard
        donut={donut}
        key={key}
        handleDelete={handleDelete}
        customers={customers}
      />
    );
  });

  function handleDelete(donut) {
    fetch(`http://localhost:9292/donuts/${donut.name}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .catch((err) => console.log("🔥", err));
  }
  return <div className="render-donuts">{renderDonuts}</div>;
}

export default DonutCards;
