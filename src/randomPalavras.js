function randomPalavras(allPalavras, numPalavras) {
    let tabPalavras = [];
    let aux = [];
    aux = [].concat(...allPalavras);

    for (let i = 0; i < numPalavras; i++) {
        let index = Math.floor(Math.random() * aux.length);
        tabPalavras.push(aux[index]);
        aux.splice(index, 1);
    }

    return tabPalavras;
}

export default randomPalavras;