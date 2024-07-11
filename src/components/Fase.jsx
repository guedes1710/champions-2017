import "../App.css"
import React, { useState, useEffect } from 'react';
import JogoCard from './JogoCard';
import { useParams } from 'react-router-dom';

const Fase = () => {
  const { fase } = useParams();
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    import(`../data/${fase}.json`).then(data => {
      setJogos(data.default);
    });
  }, [fase]);

  return (
    <div>
      <h2 className="jogos-titulos">{fase.charAt(0).toUpperCase() + fase.slice(1)}</h2>
      <div className="jogos-container">
        {jogos.map((jogo, index) => (
          <JogoCard key={index} jogo={jogo} />
        ))}
      </div>
    </div>
  );
};

export default Fase;
