import React from 'react';
import { useState } from "react";

import "./assets/styles/App.css";

import criaTabuleiro from "./tabuleiro";
import randomPalavras from "./randomPalavras";

import {
  ControlPanel,
  Footer,
  Header,
  GamePanel,
  GameOverModal,
} from "./components";
let timerId = undefined;

let allPalavras = ["ISEC","SCRIPT", "VUE", "REACT", "HTML", "CSS"];

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");

  const [letras, setLetras] = useState([]);
  const [palavras, setPalavras] = useState([]);

  const [timer, setTimer] = useState(0);

  const [popup,setPopup] = useState(true);


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

    let numPalavras;
    let numOfLetras;
    switch (value) {
      case '1':
        numOfLetras = 8;//linhas*colunas
        numPalavras = 3;
        setTimer(10);
        break;
      case '2':
        numOfLetras = 10;
        numPalavras = 4;
        setTimer(90);
        break;
      case '3':
        numOfLetras = 12;
        numPalavras = 5;
        setTimer(100);
        break;
      default:
        numOfLetras = 0;
        numPalavras = 0;
        break;
    }
    const palavras = randomPalavras(allPalavras, numPalavras);
    setPalavras(palavras);
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
          timer = {timer}
          setGameStarted = {setGameStarted}
          setTimer = {setTimer}
        />
        <GamePanel
          palavras = {palavras}
          letras = {letras}
          selectedLevel={selectedLevel} />
        <GameOverModal
          //popup = {popup} 
          //setPopup = {setPopup} 
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
// Esta linha também poderia ser eliminada
// e adefinição da funsão ser substituida 
// export default function App() 
