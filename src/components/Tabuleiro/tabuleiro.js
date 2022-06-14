function randomLetra() {
    var alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    return (alfabeto.charAt(Math.floor(Math.random() * alfabeto.length)));
}

function criaTabuleiro(palavras, numOfLetras) {
    let tab = new Array(numOfLetras);
    for(let i = 0; i < numOfLetras; i++) {
        tab[i] =  new Array(numOfLetras);
    }

    for(let i = 0; i < numOfLetras * numOfLetras; i++){
        var alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
        tab.push({
            letra: alfabeto.charAt(Math.floor(Math.random() * alfabeto.length)),
            clicked: false,
            pos: i
        });
    }

    return tab;
}