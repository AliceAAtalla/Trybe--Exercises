//linha = y   coluna = x 
//aula 4.2

let posicaoRainhaLinha = 4;
let posicaoRainhoColuna = 4;

let posicaoPecaLinha = 6;
let posicaoPecaColuna = 2;

let ataqueFeito = false;

if (posicaoRainhaLinha === posicaoPecaLinha) {
  ataqueFeito = true; //peça e rainha na mesma linha
}
else (posicaoRainhoColuna === posicaoPecaColuna){
  ataqueFeito = true; //peça e rainha na mesma coluna
}

//diagonal superior direita

for (let i = 1; i < 8; i+=1) {
    let linhaRainha = posicaoRainhaLinha + i;
    let colunaRainha = posicaoRainhoColuna + i;

    if (linhaRainha > 8 || colunaRainha > 8) {
      break;
    }

    if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
      ataqueFeito = true;
    }
  }

  // diagonal inferior esquerda

  for (let i = 1; i < 8; i+=1) {
    let linhaRainha = posicaoRainhaLinha - i;
    let colunaRainha = posicaoRainhoColuna - i;

    if (linhaRainha < 1 || colunaRainha < 1) {
      break;
    }

    if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
      ataqueFeito = true;
    }
  }

    // diagonal superior esquerda
    for (let i = 1; i < 8; i+=1) {
      let linhaRainha = posicaoRainhaLinha + i;
      let colunaRainha = posicaoRainhoColuna - i;
  
      if (linhaRainha > c8 || colunaRainha < 1) {
        break;
      }
  
      if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
        ataqueFeito = true;
      }
    }
  
     // diagonal inferior direita
     for (let i = 1; i < 8; i+=1) {
      let linhaRainha = posicaoRainhaLinha - i;
      let colunaRainha = posicaoRainhoColuna + i;
  
      if (linhaRainha > c8 || colunaRainha < 1) {
        break;
      }
  
      if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
        ataqueFeito = true;
      }
    }
  