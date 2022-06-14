function randomLetra() {
    var alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    return (alfabeto.charAt(Math.floor(Math.random() * alfabeto.length)));
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
                posCol: j
            }
        }
    }

    tab = [].concat(...tab);

    return tab;
}

export default criaTabuleiro;