import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import "./assets/styles/App.css";

import criaTabuleiro from "./components/Tabuleiro/tabuleiro"

import {
  ControlPanel,
  Footer,
  Header,
  GamePanel,
} from "./components";

import { CARDS_LOGOS, TIMEOUTGAME } from "./constants";
import { shuffleArray } from "./helpers";

let timerId = undefined;

let palavras=["afonco","luis","tonico"];

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");

  const [letras, setLetras] = useState([]);

  const [timer, setTimer] = useState(TIMEOUTGAME);


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
      // Level: Beginner
      case '1':
        numOfLetras = 8;
        break;
      // Level: Intermediate
      case '2':
        numOfLetras = 12;
        break;
      // Level: Advanced
      case '3':
        numOfLetras = 16;
        break;
      default:
        numOfLetras = 0;
        break;
    }
  }

  let letrasTab = criaTabuleiro(palavras, 8);
  setLetras(letrasTab);

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
