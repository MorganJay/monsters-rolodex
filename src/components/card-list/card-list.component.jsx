import React from 'react';
import Card from '../card/card.component';
import './card-list.styles.scss';

const CardList = props => {
  return (
    <div className="card-list">
      {props.titans.map(titan => (
        <Card key={titan.key} titans={titan} />
      ))}
    </div>
  );
};

export default CardList;
