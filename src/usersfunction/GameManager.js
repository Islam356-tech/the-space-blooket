import React, { useEffect, useState } from 'react';
import {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
} from '../api/gameAPI';

const GameManager = () => {
  const [games, setGames] = useState([]);
  const [title, setTitle] = useState('');
  const [selectedId, setSelectedId] = useState('');
  const [gameDescription, setGameDescription] = useState('');
  const [gameTitle, setGameTitle] = useState('')
  const [isPublic, setIsPublic] = useState()
  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const data = await getAllGames();
      setGames(data || []);
    } catch (err) {
      console.error("Fetch error", err);
    }
  };

  const handleCreate = async () => {
    try {
      // Prepare the game data
      const newGame = {
        title: gameTitle,
        description: gameDescription,
      };

      console.log('Creating game with:', newGame); // Log to ensure correct data

      // Call the createGame function from gameAPI.js
      const createdGame = await createGame(newGame);
      console.log('Created:', createdGame);
    } catch (err) {
      console.error('Create error', err);
    }
  };
  const handleGetById = async () => {
    try {
      const game = await getGameById(selectedId);
      alert(`Found: ${game.title}`);
    } catch (err) {
      console.error("GetById error", err);
    }
  };

  const handleUpdate = async () => {
    try {
      await updateGame(selectedId, { title });
      fetchGames();
    } catch (err) {
      console.error("Update error", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteGame(id);
      fetchGames();
    } catch (err) {
      console.error("Delete error", err);
    }
  };  
  return (
    <div>
      <h1>Game Manager</h1>
      <div>
      <div>
        <label htmlFor="gameTitle">Game Title</label>
        <input
          id="gameTitle"
          type="text"
          placeholder="Game Title"
          value={gameTitle}
          onChange={(e) => setGameTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="gameDescription">Game Description</label>
        <textarea
          id="gameDescription"
          placeholder="Game Description"
          value={gameDescription}
          onChange={(e) => setGameDescription(e.target.value)}
        />
      </div>
      <button onClick={handleCreate}>Create Game</button>
    </div>
      <input value={selectedId} onChange={(e) => setSelectedId(e.target.value)} placeholder="Game ID (for update/get)" />
      <button onClick={handleGetById}>Get Game by ID</button>
      <br />
      <button onClick={handleUpdate}>Update Game</button>
      <ul>
        {games.map((game) => (
          <li key={game._id}>
            {game.title} <button onClick={() => handleDelete(game._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
  <label>Is the game public?</label>
  <div>
    <label>
      <input
        type="radio"
        name="Public"
        value="true"
        checked={isPublic === true}
        onChange={() => setIsPublic(true)}
      />
      Public
    </label>
    <label>
      <input
        type="radio"
        name="Private"
        value="false"
        checked={isPublic === false}
        onChange={() => setIsPublic(false)}
      />
      Private
    </label>
  </div>
</div>
    </div>
  );
};

export default GameManager;
