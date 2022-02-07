import React from 'react';
// import ratingStar from '../images/star.png';

export default function Card(props) {
  return (
    <div className="card">
      <img 
        src={`../${props.coverImg}`}
        className="card--image"
        alt={props.title}
      />
      <div className="card--stats">
        <img
          // src={ratingStar}
          src="../star.png"
          className="card--star"
          alt="star"
        />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
    </div>
  );
};