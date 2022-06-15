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
    
    for(let i=0;i<palavras.length;i++){//percorre todas as plavaras
        let tam = palavras[i].length;
        let espacoLivre = false;
        let directions = ["linha","coluna","linhaInvertida","colunaInvertida","diagonal1","diagonal1Invertida","diagonal2","diagonal2Invertida"];
        do{
            let posLin = randomNum(numOfLetras);
            let posCol = randomNum(numOfLetras);
            let orientacao = 'linha';
            switch (orientacao) {
                case "linha":

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
            
            espacoLivre = true;
        }while(espacoLivre === false)
    }

    tab = [].concat(...tab);

    return tab;
}

export default criaTabuleiro;