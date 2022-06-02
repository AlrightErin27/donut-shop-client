import React from "react";

import DonutCard from "./DonutCard";

function DonutCards({ donuts, customers, setDonuts, handleYourNuts }) {
  const renderDonuts = donuts.map((donut, key) => {
    return (
      <DonutCard
        donut={donut}
        key={key}
        handleDelete={handleDelete}
        customers={customers}
        handleYourNuts={handleYourNuts}
      />
    );
  });

  // ------------------------ FETCH AREA ------------------------ //
  function handleDelete(donut) {
    console.log(donut);
    fetch(`http://localhost:9292/donuts/${donut.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      // .then(setDonuts())
      .catch((err) => console.log("🔥", err));
  }
  return <div className="render-donuts">{renderDonuts.reverse()}</div>;
}

export default DonutCards;
