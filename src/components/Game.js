import React from 'react';
import './Game.css';
import { useState } from 'react';
/* The following line can be included in your src/index.js or App.js file */
import '../App.scss';

  function Game() {
    const [score, setScore] = useState(0);
  
    const handleCorrectAnswer = () => {
      setScore(score + 10);
    };
  
    return (
      <div className="game">
        <h2>Welcome to Space Explorer!</h2>
        <p>Learn about planets, stars, and galaxies while playing fun games.</p>
        <p>Your Score: {score}</p>
        <button onClick={handleCorrectAnswer}>Answer Correctly!</button>
      </div>
    );
  }
export default Game;
