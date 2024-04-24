import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import AboutPage from './pages/AboutPage';
import AddThreadPage from './pages/AddThreadPage';
// import ThreadDetailPage from './pages/ThreadDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/new" element={<AddThreadPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/leaderboards" element={<LeaderboardsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* <Route path="/threads/:id" element={<ThreadDetailPage />} /> */}
    </Routes>
  );
}
export default App;
