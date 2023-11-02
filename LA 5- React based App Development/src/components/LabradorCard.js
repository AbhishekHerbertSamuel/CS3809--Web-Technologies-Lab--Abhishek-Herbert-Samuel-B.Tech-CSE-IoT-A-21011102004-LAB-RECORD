// src/components/LabradorCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LabradorCard.css';

function LabradorCard({ labrador }) {
  return (
    <Link to={`/labradors/${labrador.name.toLowerCase()}`}>
      <div className="labrador-card">
        <img src={labrador.image} alt={labrador.name} />
        <div className="labrador-details">
          <h3>{labrador.name}</h3>
          <p className="labrador-description">{labrador.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default LabradorCard;




