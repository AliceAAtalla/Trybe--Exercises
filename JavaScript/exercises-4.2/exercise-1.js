/*Para o primeiro exercício de hoje, faça um programa que
dando um valor n qualquer, seja n > 1, imprima na tela um
 quadrado feito de asteriscos de lado de tamanho n. */

let n = 4;
let padrao = "";

for (let linha = 1; linha <= n; linha += 1) {
    padrao += "*";
}
        for(let ast = 1; ast <= n; ast += 1){
           console.log(padrao) 
}

