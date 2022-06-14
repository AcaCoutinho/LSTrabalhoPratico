function criaTab(palavras,tamX,tamY){
    
    //Cria array 2d
    let x = new Array(tamX);
    for (let i = 0; i < x.length; i++) {
        x[i] = new Array(tamY);
    }
    

    //preenche espaços vazios com letras random


    for (let i = 0; i < tamX; i++) {
        for (let j = 0; i < tamY; j++) {
            x[i][j] = {
            letra: randomLetter(),
            clicked: false,
            x: 0,
            y: 0,
          };
        }
    }


    /*
    for (let i = 0; i < tamX; i++) {
        for(let j=0 ;j < tamY ; j++){
            x[i][j] = u++;
            console.log("num = " + x[i][j])
        }
    }
    //console.log("a " + x[0][0])
    */

    //converte para array de uma dimensão
    [].concat(...x);
    console.log("a");

}




function randomLetter(tamX,tamY){
    var alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return( alfabeto.charAt(Math.floor(Math.random() * alfabeto.length)))
    
}
export default criaTab;