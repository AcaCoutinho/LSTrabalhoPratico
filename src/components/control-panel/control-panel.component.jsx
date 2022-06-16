import React, {useState, useEffect} from "react";
import "./control-panel.css";

let timerId = undefined;
function ControlPanel(props) {
  const { gameStarted, selectedLevel, onGameStart, onLevelChange, timer ,setTimer,setGameStarted,setSelectedLevel} =
    props;
  const gameStartedClass = gameStarted ? " gameStarted" : "";

  
  

  useEffect(() => { 
    if (gameStarted) { 
      timerId = setInterval(() => { 
        setTimer(timer-1); 
        let nextTimer = timer - 1; 
        if (nextTimer === 0) { 
          setGameStarted(false); 
        } 
      }, 1000); 
    }else if(timer !== 10 && selectedLevel === '1'){ 
      setTimer(10); 
    }else if(timer !== 75 && selectedLevel === '2'){
      setTimer(75); 
    }else if(timer !== 60 && selectedLevel === '3'){
      setTimer(60); 
    }
    return () => { 
      if (timerId) { 
        clearInterval(timerId); 
      } 
    }; 
  }, [gameStarted, timer]);



  return (
    <section id="panel-control">
      <h3 className="sr-only">Escolha do Nível</h3>
      <form className="form">
        <fieldset className="form-group">
          <label htmlFor="btLevel">Nível:</label>
          <select
            id="btLevel"
            defaultValue="0"
            onChange={onLevelChange} 
            disabled={gameStarted}
          >
            <option value="0">Seleccione...</option>
            <option value="1">Fácil (8x8)</option>
            <option value="2">Médio (10x10)</option>
            <option value="3">Difícil (12x12)</option>
          </select>
        </fieldset>
        <button
          type="button"
          id="btPlay"
          disabled={selectedLevel === "0"}
          onClick={onGameStart}
        >
          {gameStarted ? "Parar jogo" : "Iniciar Jogo"}
        </button>
      </form>
      <div className="form-metadata">
        <p id="message" role="alert" className="hide">
          Clique em Iniciar o Jogo!
        </p>
        <dl className={`list-item left${gameStartedClass}`}>
          <dt>Tempo de Jogo:</dt>
          <dd id="gameTime">{timer}</dd>
        </dl>
        <dl className={`list-item left${gameStartedClass}`}>
          <dt>Pontuação:</dt>
          <dd id="points">0</dd>
        </dl>
      </div>
    </section>
  );
}

export default ControlPanel;
