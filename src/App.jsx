import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Fase from './components/Fase';
import './App.css';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div className="App">
          <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/fase/:fase" element={<Fase />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
