import React from 'react';
import ratingStar from '../images/star.png';

export default function Card(props) {
  return (
    <div className="card">
      <img 
        src={props.img} 
        className="card--image"
        alt={props.imgAlt}
      />
      <div className="card--stats">
        <img src={ratingStar} className="card--star" alt="star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  );
};