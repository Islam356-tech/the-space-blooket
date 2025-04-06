import React from 'react';
import './kidsjourney.css'; // Import the CSS for consistent styling

const PlanetCard = ({ name, description, subject, imageUrl }) => {
  return (
    <div className="planet-card">
      <img src={imageUrl} alt={name} className="planet-image" />
      <div className="planet-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <span className="subject">📚 {subject}</span>
      </div>
    </div>
  );
};

export default PlanetCard;
