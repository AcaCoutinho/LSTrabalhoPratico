import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import criaTab from "./criaTab"

import {
  Footer,
  Header,
} from "./components";
import Tabuleiro from './components/tabuleiro/tubeiro.component';

// let letras=['A','B','C','D','S','G','Y','T','D','T','U','G','S','S','D','A']
let palavras=["afonco","luis","tonico"]
//let letras=[{letra:"A",clicked:false},{letra:"B",clicked:false}]
//let letras = [];

 

let letras = [];

function App() {
  const [nivel,setNivel] = useState(0);
  const [tempo,setTempo] = useState(0);
  //com o botao selecionar o nivel
  let numPalavras,tamX,tamY;

  criaTab(palavras,3,3);

  switch (nivel) {
    case 0:
      numPalavras = 0;
      tamX=0;
      tamY=0;
      break;
    case 1:
      numPalavras = 2;
      tamX=10;
      tamY=10;
      break;
    case 2:
      numPalavras = 4;
      tamX=12;
      tamY=12;
      break;
    case 3:
      numPalavras = 6;
      tamX=14;
      tamY=14;
      break;
    
    default:
      break;
  }


  return (
    <div>
      <Header />
      <main>
        
      </main>
      <Tabuleiro letras={letras} palavras={palavras}/>
      <Footer />
    </div>
  );
}

export default App;
