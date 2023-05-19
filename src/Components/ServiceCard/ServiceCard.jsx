import React from "react";
import "./ServiceCard.scss";

const ServiceCard = ({ img, title, desc }) => {
  return (
    <div className="service-card">
      <img src={img} alt="service picture" />
      <div className="content">
        <h3 className="card-title">{title}</h3>
        <p className="body">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
