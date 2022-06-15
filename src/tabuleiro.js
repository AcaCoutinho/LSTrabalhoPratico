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
            let orientacao = directions[randomNum(8)];
            //let orientacao = 'linhaInvertida';
            switch (orientacao) {
                case "linha":
                    //console.log(palavras[i]);
                        if(verificaPalavraLinha(tab, palavras[i], numOfLetras, posCol, posLin)){
                            espacoLivre = true;
                            for(let j = 0; j < tam; j++){
                                tab[posLin][posCol + j].letra = palavras[i].charAt(j);
                            }
                        }
                    break;
                case "coluna":
                        if(vericaPalavraColuna(tab,palavras[i],numOfLetras,posCol,posLin)){
                            espacoLivre = true;
                            for(let j=0;j<tam;j++){
                                tab[posLin + j][posCol].letra = palavras[i].charAt(j);
                            }
                        }

                    break;
                case "linhaInvertida":
                    if(verificaPalavraLinha(tab, palavras[i], numOfLetras, posCol, posLin)){
                        espacoLivre = true;
                        palavras[i] = reverseString(palavras[i]);
                        for(let j = 0; j < tam; j++){
                            tab[posLin][posCol + j].letra = palavras[i].charAt(j);
                        }
                        palavras[i] = reverseString(palavras[i]);
                    }
                    break;
                case "colunaInvertida":
                    if(vericaPalavraColuna(tab,palavras[i],numOfLetras,posCol,posLin)){
                        espacoLivre = true;
                        palavras[i] = reverseString(palavras[i]);
                        for(let j=0;j<tam;j++){
                            tab[posLin + j][posCol].letra = palavras[i].charAt(j);
                        }
                        palavras[i] = reverseString(palavras[i]);
                    }
                    break;
                case "diagonal1":
                        if(vericaPalavraDiagonalUm(tab, palavras[i], numOfLetras, posCol, posLin)){
                            espacoLivre=true;
                            for(let l=0,j=0 ;l < tam ;l++,j++){
                                tab[posLin + l][posCol + j].letra = palavras[i].charAt(l);
                            }
                        }

                    break;    
                case "diagonal1Invertida":
                    if(vericaPalavraDiagonalUm(tab, palavras[i], numOfLetras, posCol, posLin)){
                        espacoLivre=true;
                        palavras[i] = reverseString(palavras[i]);
                        for(let l=0,j=0 ;l < tam ;l++,j++){
                            tab[posLin + l][posCol + j].letra = palavras[i].charAt(l);
                        }
                        palavras[i] = reverseString(palavras[i]);
                    }
        
                    break; 
                case "diagonal2":
                    /*
                    if(vericaPalavraDiagonalDois(tab, palavras[i], numOfLetras, posCol, posLin)){
                        espacoLivre=true;
                        for(let l=0,j=0 ;l < tam ;l++,j++){
                            tab[posLin + l][posCol - j].letra = palavras[i].charAt(l);
                        }
                    }
                    */
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

function vericaPalavraColuna(tab, palavra, numOfLetras, posCol, posLin){
    let tam = palavra.length;
    if(tam <numOfLetras - posLin){//garantir que n fica "cortada"
        for(let i=0;i < tam ;i++){
            if(tab[posLin + i][posCol].letra !== '_'){
                return false;
            }
        }
        return true;
    }
    return false;
}

function vericaPalavraDiagonalUm(tab, palavra, numOfLetras, posCol, posLin){
    let tam = palavra.length;
    if(tam < numOfLetras - posCol && tam <numOfLetras - posLin){
            for(let i=0,j=0 ;j < tam ;i++,j++)
                if(tab[posLin + i][posCol + j].letra !== '_')
                    return false;
            return true;
    }
    return false;
}

function vericaPalavraDiagonalDois(tab, palavra, numOfLetras, posCol, posLin){
    let tam = palavra.length;
    if(tam < numOfLetras - posCol && tam < numOfLetras - posLin){
            for(let i=0,j=0 ;j < tam ;i++,j++)
                if(tab[posLin + i][posCol - j].letra !== '_')
                    return false;
            return true;
    }
    return false;
}

function reverseString(str){
    return str.split('').reverse().join('')
}
export default criaTabuleiro;