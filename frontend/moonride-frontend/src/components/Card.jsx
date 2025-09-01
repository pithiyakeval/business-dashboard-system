// src/components/Card.jsx
import React from "react";

const Card = ({ title, value, color = "#8884d8" }) => (
  <div className="card" style={{ borderTop: `5px solid ${color}` }}>
    <h4>{title}</h4>
    <p>{value}</p>
  </div>
);

export default Card;
