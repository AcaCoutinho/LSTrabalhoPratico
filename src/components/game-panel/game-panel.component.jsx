import React, { useState, useSyncExternalStore } from "react";

import "./game-panel.css";
import { Card } from "../index";

function GamePanel({ selectedLevel, letras, palavras }) {
  const gameClass =
    selectedLevel === "1"
      ? ""
      : selectedLevel === "2"
      ? "intermedio"
      : "avancado";

  return (
    <section className="game-panel">
      <h3 className="sr-only">Peças do Jogo</h3>
      <div id="game" className={gameClass}>
        {letras.map((letras, i) => (
          <div className="celula" key={i}>
            {letras.letra}
          </div>
        ))}
      </div>
      <div className="palavras">
        {palavras.map((palavras) => (
          <div className="palavra">
            <p>{palavras}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default GamePanel;
