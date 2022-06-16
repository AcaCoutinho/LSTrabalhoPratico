import React, { useState, useSyncExternalStore } from "react";
import "./game-panel.css";
import {Letra} from "../index"


let letrasDois = [];

let class1;
let classFound = false;
function GamePanel({ selectedLevel, letras, palavras,gameStarted }) {
  const [letraSelecionadas,setLetraSelecionadas] = useState([]);

  const gameClass =
    selectedLevel === "1"
      ? ""
      : selectedLevel === "2"
      ? "intermedio"
      : "avancado";


    if(!gameStarted){
      class1=" hide"
    }else{
      class1=""
    }


    const handleClickLetra= (letra) => {
      if(gameStarted)
        setLetraSelecionadas([...letraSelecionadas, letra]);
        console.log("siuuu");
    }





  function verificaLetras(index) {
    let pal = false
    letrasDois.push(letras[index]);
    letrasDois[0].clicked = true;


    
    if(letrasDois.length === 2){
      letrasDois[1].clicked = true;
      //linha
      if(letrasDois[0].posLin === letrasDois[1].posLin && letrasDois[0].posCol !== letrasDois[1].posCol){
        let tam = Math.abs(letrasDois[0].posCol - letrasDois[1].posCol) + 1;
        for(let i = 0; i < palavras.length; i++){
          if(tam === palavras[i].palavra.length){
              if(letrasDois[0].letra === palavras[i].palavra.charAt(0) && letrasDois[1].letra === palavras[i].palavra.charAt(tam - 1) ||
                 letrasDois[1].letra === palavras[i].palavra.charAt(0) && letrasDois[0].letra === palavras[i].palavra.charAt(tam - 1)){
                console.log(palavras[i].palavra);
                pal = true
                palavras[i].encontrado = true;
              }
          }
        }
      }
      
      //coluna
      if(letrasDois[0].posCol === letrasDois[1].posCol && letrasDois[0].posLin !== letrasDois[1].posLin){
        let tam = Math.abs(letrasDois[0].posLin - letrasDois[1].posLin) + 1;
        for(let i = 0; i < palavras.length; i++){
          if(tam === palavras[i].palavra.length){
            if(letrasDois[0].letra === palavras[i].palavra.charAt(0) && letrasDois[1].letra === palavras[i].palavra.charAt(tam - 1) ||
               letrasDois[1].letra === palavras[i].palavra.charAt(0) && letrasDois[0].letra === palavras[i].palavra.charAt(tam - 1)){
              console.log(palavras[i].palavra);
              pal = true
              palavras[i].encontrado = true;
              
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
            if(tamCol === palavras[i].palavra.length){
              if(letrasDois[0].letra === palavras[i].palavra.charAt(0) && letrasDois[1].letra === palavras[i].palavra.charAt(tamCol - 1) ||
                 letrasDois[1].letra === palavras[i].palavra.charAt(0) && letrasDois[0].letra === palavras[i].palavra.charAt(tamCol - 1)){
                console.log(palavras[i].palavra);
                pal = true
                palavras[i].encontrado = true;
                
              }
            }
          }
        }
      }

      if(!pal){
        letrasDois[0].clicked=false;
        letrasDois[1].clicked=false;

      }


      letrasDois.splice(0,2);

    }


  }

  return (
    <section className="game-panel">
      <h3 className="sr-only">Peças do Jogo</h3>
      <div id="game" className={gameClass + class1}>
        {letras.map((letras, i) => (
          <div key={i} onClick = {() => verificaLetras(i)}>
            <Letra 
              letra={letras.letra}
              onClickLetra = {handleClickLetra}
              clicked = {letras.clicked}
              letrasDois={letrasDois}
            />
          </div>
        ))}
      </div>
      <div className={"palavras " + class1}>
        {palavras.map((palavras) => (
          <div className={"palavra " + palavras.encontrado}>
            <p>{palavras.palavra}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default GamePanel;
