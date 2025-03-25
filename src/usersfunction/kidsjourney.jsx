import React from 'react';
import './kidsjourney.css'; // Include the CSS file for styling
import PlanetCard from './PlanetCard'; // Ensure PlanetCard.jsx is in the same directory

// Generate 1000 planets with subjects
const generatePlanets = () => {
  const planetNames = [
    'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto', 'Ceres',
    'Eris', 'Haumea', 'Makemake', 'Sedna', 'Orcus', 'Kepler', 'Lyra', 'Draco', 'Andromeda', 'Pavo'
  ];

  const subjects = ['Math', 'Science', 'History', 'Geography', 'Astronomy', 'Biology', 'Chemistry', 'Physics', 'Art', 'Coding'];

  const descriptions = [
    'Mysterious and full of wonder.', 
    'Home to fascinating phenomena.',
    'A planet filled with secrets.',
    'An explorer\'s dream.',
    'Full of adventure and knowledge.'
  ];

  return Array.from({ length: 1000 }, (_, index) => ({
    id: index + 1,
    name: `Planet ${planetNames[index % planetNames.length]} ${index + 1}`,
    description: descriptions[index % descriptions.length],
    subject: subjects[index % subjects.length],
    imageUrl: `https://source.unsplash.com/200x200/?planet,space&sig=${index}` // Random images
  }));
};

const KidsJourney = () => {
  const planetsData = generatePlanets();

  // Split into rows of 5
  const planetRows = [];
  for (let i = 0; i < planetsData.length; i += 5) {
    planetRows.push(planetsData.slice(i, i + 5));
  }

  return (
    <div className="journey-container">
      <h1>🌌 Planetary Journey 🚀</h1>
      {planetRows.map((row, rowIndex) => (
        <div className="planet-row" key={rowIndex}>
          {row.map((planet) => (
            <PlanetCard
              key={planet.id}
              name={planet.name}
              description={planet.description}
              subject={planet.subject}
              imageUrl={planet.imageUrl}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KidsJourney;
