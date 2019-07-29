import React from "react";
import "./cards-list.styles.css";
import { Card } from "./../card/card.component";

export const Cardslist = props => {
  console.log(props);

  return (
    <div className="card-list">
      {props.lads.map(lad => (
        <Card key={lad.id} lad={lad} />
      ))}
    </div>
  );
};
