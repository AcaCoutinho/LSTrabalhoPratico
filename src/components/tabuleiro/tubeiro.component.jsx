import React from "react";
import { useState } from "react";
import "./tabuleiro.css";

function Tabuleiro(props) {
  const { letras, palavras } = props;
  const [grid, setgrid] = useState(letras);
  const [words, setwords] = useState(palavras);

let s = [
  [1, 2],
  [3, 4],
  [5, 6]
];

  return (
    <div className="container">
      {grid.map((letras, i) => (
        <div className="cell" key={i}>
          {letras.letra}
        </div>
      ))}

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
