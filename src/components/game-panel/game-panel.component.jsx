import React, { useState, useSyncExternalStore } from "react";

import "./game-panel.css";
import { Card } from "../index";

let letrasDois = [];

function GamePanel({ selectedLevel, letras, palavras }) {
  const gameClass =
    selectedLevel === "1"
      ? ""
      : selectedLevel === "2"
      ? "intermedio"
      : "avancado";

  function verificaLetras(index) {
    letrasDois.push(letras[index]);

    if(letrasDois.length === 2){

      //linha
      if(letrasDois[0].posLin === letrasDois[1].posLin && letrasDois[0].posCol !== letrasDois[1].posCol){
        let tam = Math.abs(letrasDois[0].posCol - letrasDois[1].posCol) + 1;
        for(let i = 0; i < palavras.length; i++){
          if(tam === palavras[i].length){
              if(letrasDois[0].letra === palavras[i].charAt(0) && letrasDois[1].letra === palavras[i].charAt(tam - 1) ||
                 letrasDois[1].letra === palavras[i].charAt(0) && letrasDois[0].letra === palavras[i].charAt(tam - 1)){
                console.log(palavras[i]);
              }
          }
        }
      }
      
      //coluna
      if(letrasDois[0].posCol === letrasDois[1].posCol && letrasDois[0].posLin !== letrasDois[1].posLin){
        let tam = Math.abs(letrasDois[0].posLin - letrasDois[1].posLin) + 1;
        for(let i = 0; i < palavras.length; i++){
          if(tam === palavras[i].length){
            if(letrasDois[0].letra === palavras[i].charAt(0) && letrasDois[1].letra === palavras[i].charAt(tam - 1) ||
               letrasDois[1].letra === palavras[i].charAt(0) && letrasDois[0].letra === palavras[i].charAt(tam - 1)){
              console.log(palavras[i]);
            }
          }
        }
      }

      //diagonais
      if(letrasDois[0].posCol !== letrasDois[1].posCol && letrasDois[0].posLin !== letrasDois[1].posLin){
        let tamLin = Math.abs(letrasDois[0].posLin - letrasDois[1].posLin) + 1;
        let tamCol = Math.abs(letrasDois[0].posCol - letrasDois[1].posCol) + 1;
        if(tamCol === tamLin){
          for(let i = 0; i < palavras.length; i++){
            if(tamCol === palavras[i].length){
              if(letrasDois[0].letra === palavras[i].charAt(0) && letrasDois[1].letra === palavras[i].charAt(tamCol - 1) ||
                 letrasDois[1].letra === palavras[i].charAt(0) && letrasDois[0].letra === palavras[i].charAt(tamCol - 1)){
                console.log(palavras[i]);
              }
            }
          }
        }
      }

      letrasDois.splice(0,2);
    }

  }

  return (
    <section className="game-panel">
      <h3 className="sr-only">Peças do Jogo</h3>
      <div id="game" className={gameClass}>
        {letras.map((letras, i) => (
          <div className="celula" key={i} onClick = {() => verificaLetras(i)}>
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
