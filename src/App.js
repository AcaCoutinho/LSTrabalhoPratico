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

let allPalavras = ["ISEC","SCRIPT", "VUE", "REACT", "HTML", "CSS"];

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");
  const [letras, setLetras] = useState([]);
  const [palavras, setPalavras] = useState([]);
  const [timer, setTimer] = useState(0);
  const [points,setPoints] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(true);


  function updatePoints(tam){
    let totalPoints = points;
    let menos = 10;
    totalPoints += (timer * tam) + menos;
    
    //totalPoints = totalPoints - menos;

    setPoints(totalPoints)
  }

  const handleCloseModal = () => {
    console.log("1")
    setIsModalOpen(!isModalOpen);
  }


  /**
  * When the game starts
  */
  const handleGameStart = () => {
    if (gameStarted) {
      console.log("Termina Jogo");
      setGameStarted(false);
      setIsModalOpen(true);
    } else {
      console.log("Inicia Jogo");
      setGameStarted(true);
      setIsModalOpen(true);
      setPoints(0);
    }
  };

  /**
   * When the user selects a new level,
   * this callback function is executed
   */
  
  const handleLevelChange = (event) => {
    const { value } = event.currentTarget;
    setSelectedLevel(value);
    //setIsModalOpen(false);//-----------------------
    let numPalavras;
    let numOfLetras;
    switch (value) {
      case '1':
        numOfLetras = 8;//linhas*colunas
        numPalavras = 3;
        setTimer(100);
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
      <GameOverModal
        isOpen={isModalOpen}
        points={points}
        handleClose={handleCloseModal}
      />
      <Header />
      <main className="main-content">
        <ControlPanel
          gameStarted={gameStarted}
          onGameStart={handleGameStart}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
          onLevelChange={handleLevelChange}
          timer = {timer}
          setGameStarted = {setGameStarted}
          setTimer = {setTimer}
          points={points}
          updatePoints={updatePoints}
        />
        <GamePanel
          gameStarted={gameStarted}
          palavras = {palavras}
          letras = {letras}
          selectedLevel={selectedLevel}
          setGameStarted={setGameStarted}
          updatePoints={updatePoints}
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
