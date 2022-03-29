import React from "react";

const ProductionCard = ({ title, id, bgColor, imgSrc, variant }) => (
  <div
    className={`production-card ${variant === "colored" ? "" : "bordered"}`}
    style={{
      backgroundColor: variant === "colored" ? bgColor : "white",
      color: variant === "colored" ? "white" : "",
    }}
  >
    <img src={imgSrc} alt="" />
    <div className="production-texts-wrapper">
      <h5>{title}</h5>
      <p>{id}</p>
    </div>
  </div>
);

export default ProductionCard;
