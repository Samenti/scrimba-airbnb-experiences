import React from 'react';
import Card from './Card';
// import swimmerKatieZaferes from '../images/katie-zaferes.png';
import data from '../data.json';

export default function CardArea() {
  const cardArray = data.map(card => {
    return (
      <Card 
        // spread all the properties individually
        {...card}
        // non-prop:
        key = {card.id}
      />
    );
  });
  console.log(cardArray);
  return (
    <section className="card-container">
      {cardArray}
    </section>
  );
};