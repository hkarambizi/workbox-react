import React from "react";

import "./card.styles.css";

export const Card = props => {
  return (
    <div className="card-container">
      <img
        alt="lad"
        src={`https://robohash.org/${props.lad.id}?set=set5&size=200x200`}
      />
      <h1>{props.lad.name}</h1>
      <p>{props.lad.email}</p>
    </div>
  );
};
