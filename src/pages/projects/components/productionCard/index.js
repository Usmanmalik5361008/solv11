import React from "react";
import { useNavigate } from "react-router-dom";

const ProductionCard = ({ title, id, bgColor, imgSrc, variant, href }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (href) {
      navigate(`${href}`);
    }
  };

  return (
    <div
      onClick={handleClick}
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
};

export default ProductionCard;
