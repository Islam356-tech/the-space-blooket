import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/register";
import Login from "./pages/login";
import UserProfileDashboard from "./signedcomponets/Dashboard";
import UpgradeToPROHACKERINFINTE from "./signedcomponets/upgrade";
import User from "./usersfunction/userhome";
import KidsJourney from "./usersfunction/kidsjourney";
import Market from "./usersfunction/Market";
import QuizGame from "./usersfunction/QuizGame";
import GameManager from "./usersfunction/GameManager";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Check if user is logged in
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
      {/* Redirect users to dashboard after login */}
      <Route path="/dashboard" element={isAuthenticated ? <UserProfileDashboard /> : <Navigate to="/login" />} />
      <Route path="/userhome" element={<User />} />
      <Route path="/kidsjourney" element={<KidsJourney />} /> 
        <Route path="/upgradeforprohackerinfinte" element={isAuthenticated ? <UpgradeToPROHACKERINFINTE /> : <Navigate to="/" />} />
        <Route path="/" element={<KidsJourney />} />
         <Route path="/quiz-game/:id" element={<QuizGame />} /> 
        <Route path="/market" element={<Market />} />
        <Route path="/createagame" element={<GameManager />} />
        {/* Catch-all route for unknown paths */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
