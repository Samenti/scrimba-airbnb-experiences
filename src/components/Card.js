import React from 'react';
import ratingStar from '../images/star.png';
import swimmerKatieZaferes from '../images/katie-zaferes.png';

export default function Card() {
  return (
    <div className="card">
      <img 
        src={swimmerKatieZaferes} 
        className="card--image"
        alt="Katie Zaferes"
      />
      <div className="card--stats">
        <img src={ratingStar} className="card--star" alt="star" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span> / person</p>
    </div>
  );
};