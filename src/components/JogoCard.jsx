import React from 'react';

const JogoCard = ({ jogo }) => {
  return (
    <div className="jogo-card">
      <h3>{jogo.mandante} vs {jogo.visitante}</h3>
      <p>Data: {jogo.data}</p>
      <p>Estádio: {jogo.estadio}</p>
      <p>Resultado: {jogo.gols_mandante} - {jogo.gols_visitante}</p>
      <p>Vencedor: {jogo.vencedor}</p>
      <img src={jogo.imagem} alt={jogo.mandante} width="100" />
      <img src={jogo.imagem1} alt={jogo.visitante} width="100" />
    </div>
  );
};

export default JogoCard;