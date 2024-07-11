import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container'>
      <h1>Champions League 2017</h1>
      <nav>
        <ul>
          <li><Link to="/fase/oitavas">Oitavas de Final</Link></li>
          <li><Link to="/fase/quartas">Quartas de Final</Link></li>
          <li><Link to="/fase/semis">Semifinais</Link></li>
          <li><Link to="/fase/final">Final</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;