import React from "react";
import DonutCard from "./DonutCard";

function DonutCards() {
  const tempDonutsArr = ["", "", "", "", "", "", "", "", "", ""];
  const renderDonuts = tempDonutsArr.map((donut) => {
    return <DonutCard />;
  });

  return <div className="render-donuts">{renderDonuts}</div>;
}

export default DonutCards;
