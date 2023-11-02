// src/components/LabradorList.js
import React from 'react';
import LabradorCard from './LabradorCard';

function LabradorList({ labradors }) {
  return (
    <div className="labrador-list-container">
      <div className="labrador-list">
        {labradors.map((labrador, index) => (
          <LabradorCard key={index} labrador={labrador} />
        ))}
      </div>
    </div>
  );
}

export default LabradorList;

