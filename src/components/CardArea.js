import React from 'react';
import Card from './Card';
import swimmerKatieZaferes from '../images/katie-zaferes.png';

export default function CardArea() {
  return (
    <section className="card-container">
      <Card 
        img = {swimmerKatieZaferes}
        imgAlt = "Katie Zaferes"
        rating = "5.0"
        reviewCount = {6}
        country = "USA"
        title = "Life Lessons with Katie Zaferes"
        price = {136}
      />
    </section>
  );
};