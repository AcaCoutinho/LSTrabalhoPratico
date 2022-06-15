function randomLetra() {
    var alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    return (alfabeto.charAt(Math.floor(Math.random() * alfabeto.length)));
}

function randomNum(max){
    return Math.floor(Math.random() * max)
}

function criaTabuleiro(palavras, numOfLetras) {
    let tab; 
    tab = new Array(numOfLetras)
    for(let i = 0; i < numOfLetras; i++){
        tab[i] = new Array(numOfLetras);
    }

    for(let i = 0; i < numOfLetras; i++){
        for(let j = 0; j < numOfLetras; j++){
            tab[i][j] = {
                letra: '_',
                clicked: false,
                posLin: i,
                posCol: j,
            }
        }
    }

    for(let i=0;i<palavras.length;i++){
        let tam = palavras[i].length;
        let espacoLivre = false;
        let directions = ["linha","coluna","linhaInvertida","colunaInvertida","diagonal1","diagonal1Invertida","diagonal2","diagonal2Invertida"];
        do{
            let posLin = randomNum(numOfLetras);
            let posCol = randomNum(numOfLetras);
            let orientacao = 'linha';
            switch (orientacao) {
                case "linha":
                    console.log(palavras[i]);
                        if(verificaPalavraLinha(tab, palavras[i], numOfLetras, posCol, posLin)){
                            espacoLivre = true;
                            for(let j = 0; j < tam; j++){
                                tab[posLin][posCol + j].letra = palavras[i].charAt(j);
                            }
                        }
                    break;
                case "coluna":

                    break;
                case "linhaInvertida":

                    break;
                case "colunaInvertida":
              
                    break;
                case "diagonal1":
            
                    break;    
                case "diagonal1Invertida":
        
                    break; 
                case "diagonal2":
        
                    break; 
                case "diagonal2Invertida":
            
                    break; 
                default:
                    break;
            }
        }while(espacoLivre === false)
    }

    tab = [].concat(...tab);

    return tab;
}

function verificaPalavraLinha(tab, palavra, numOfLetras, posCol, posLin){
    let tam = palavra.length;
    
    if(tam < numOfLetras - posCol ){
        for(let i = 0; i < tam; i++) {
            if(tab[posLin][posCol + i].letra !== '_'){
                return false;
             }
        }
        return true;
    }
    return false;
}

export default criaTabuleiro;