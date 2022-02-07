import React from 'react';
import Card from './Card';
// import swimmerKatieZaferes from '../images/katie-zaferes.png';
import data from '../data.json';

export default function CardArea() {
  const cardArray = data.map(card => {
    return (
      <Card 
        id = {card.id}
        title = {card.title}
        description = {card.description}
        price = {card.price}
        coverImg = {card.coverImg}
        rating = {card.stats.rating}
        reviewCount = {card.stats.reviewCount}
        location = {card.location}
        openSpots = {card.openSpots}
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