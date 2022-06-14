import React from "react";
import { useState } from "react";
import "./tabuleiro.css";

function Tabuleiro(props) {
  const { letras, palavras,tab } = props;
  const [grid, setgrid] = useState(letras);
  const [words, setwords] = useState(palavras);


  return (
    <div className="container">
      <div id="jogo" className="facil">
        {grid.map((letras, i) => (
          <div className="celula" key={i}>
            {letras.letra}
          </div>
        ))}
      </div>
      <div className="palavras">
        {words.map((palavras) => (
          <div>
            <p>{palavras}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabuleiro;
