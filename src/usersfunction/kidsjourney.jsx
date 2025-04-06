import React from 'react';
import './kidsjourney.css';
import { Link } from 'react-router-dom';
import { generatePlanets } from './PlanetData';

const KidsJourney = () => {
  const planets = generatePlanets();

  return (
    <div className="journey-container">
      <h1>🌌 Planetary Journey 🚀</h1>
      <div className="planet-grid">
        {planets.map((planet) => (
          <Link to={`/quiz-game/${planet.id}`} key={planet.id} className="planet-card-link">
            <div className="planet-card">
              <img src={planet.imageUrl} alt={planet.name} className="planet-image" />
              <div className="planet-info">
                <h2>{planet.name}</h2>
                <p>📚 {planet.subject}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default KidsJourney;
