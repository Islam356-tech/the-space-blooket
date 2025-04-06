import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');  // Server URL

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Fetch initial games
    fetchGames();

    // Listen for new game notifications
    socket.on('newGame', (game) => {
      setGames((prevGames) => [...prevGames, game]);
    });

    return () => {
      socket.off('newGame');
    };
  }, []);

  const fetchGames = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/games');
      const data = await response.json();
      setGames(data);
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  };

  return (
    <div>
      <h1>Game List</h1>
      {games.map((game) => (
        <div key={game._id}>
          <h3>{game.title}</h3>
          <p>{game.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GameList;