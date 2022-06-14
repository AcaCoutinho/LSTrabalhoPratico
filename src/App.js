import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import "./assets/styles/App.css";

import criaTabuleiro from "./tabuleiro"

import {
  ControlPanel,
  Footer,
  Header,
  GamePanel,
} from "./components";

let timerId = undefined;

let palavras=["afonco","luis","tonico"];

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");

  const [letras, setLetras] = useState([]);

  const [timer, setTimer] = useState(0);


  /**
  * When the game starts
  */
  const handleGameStart = () => {
    if (gameStarted) {
      console.log("Termina Jogo");
      setGameStarted(false);
    } else {
      console.log("Inicia Jogo");
      setGameStarted(true);
    }
  };

  /**
   * When the user selects a new level,
   * this callback function is executed
   */
  
  const handleLevelChange = (event) => {
    const { value } = event.currentTarget;
    setSelectedLevel(value);

    let numOfLetras;
    switch (value) {
      case '1':
        numOfLetras = 8;
        break;
      case '2':
        numOfLetras = 12;
        break;
      case '3':
        numOfLetras = 16;
        break;
      default:
        numOfLetras = 0;
        break;
    }
    const letrasTab = criaTabuleiro(palavras, numOfLetras);
    setLetras(letrasTab);
  }

  return (
    <div id="container">
      <Header />
      <main className="main-content">
        <ControlPanel
          gameStarted={gameStarted}
          onGameStart={handleGameStart}
          selectedLevel={selectedLevel}
          onLevelChange={handleLevelChange}
        />
        <GamePanel
          palavras = {palavras}
          letras = {letras}
          selectedLevel={selectedLevel} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
// Esta linha também poderia ser eliminada
// e adefinição da funsão ser substituida 
// export default function App() 
