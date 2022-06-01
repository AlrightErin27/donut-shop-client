import React from "react";
import DonutCard from "./DonutCard";

function DonutCards({ donuts }) {
  // const tempDonutsArr = ["", "", "", "", "", "", "", "", "", ""];
  const renderDonuts = donuts.map((donut, key) => {
    return <DonutCard donut={donut} key={key} />;
  });

  return <div className="render-donuts">{renderDonuts}</div>;
}

export default DonutCards;
