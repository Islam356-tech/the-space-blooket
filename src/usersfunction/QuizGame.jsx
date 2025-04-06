import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { generatePlanets } from './PlanetData';

const QuizGame = () => {
  const { id } = useParams();
  const planet = generatePlanets().find((p) => p.id === parseInt(id));
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (selected) => {
    if (selected === planet.questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < planet.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizComplete(true);
    }
  };

  const playGame = () => {
    alert(`🎯 Playing ${planet.name} Game!`);
    navigate('/market');
  };

  return (
    <div className="quiz-container">
      <h1>{planet.name} Quiz</h1>

      {!quizComplete ? (
        <div className="question-box">
          <h2>{planet.questions[currentQuestion].question}</h2>
          <div className="options">
            {planet.questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="result-box">
          <h2>✅ Quiz Complete!</h2>
          <p>Your score: {score}/{planet.questions.length}</p>
          <button onClick={playGame}>Go to the Market</button>
        </div>
      )}
    </div>
  );
};

export default QuizGame
