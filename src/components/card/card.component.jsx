import React from 'react';
import './card.styles.scss';

const Card = props => {
  console.log(props);
  return (
    <div className="card-container">
      <img src={props.titans.image} alt="titan" width="180" height="180" />
      <h1>{props.titans.name}</h1>
      <p>{props.titans.human}</p>
    </div>
  );
};

export default Card;
