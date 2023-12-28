import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'; // Asegúrate de tener este componente
import Welcome from './components/WelcomePage'; // Asegúrate de tener este componente
import HomeLog from './components/homeLog'; // Asegúrate de tener este componente
import BaseDb from './components/BaseDb'; // Asegúrate de tener este componente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/baseDb" element={<BaseDb />} />
        <Route path="/homeLog" element={<HomeLog />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;