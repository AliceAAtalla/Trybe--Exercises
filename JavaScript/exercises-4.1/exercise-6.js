/*- Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

Exemplo: bishop -> diagonals*/

let piece = "Queen";
piece = piece.toLowerCase();

switch (piece) {
  case "king":
    console.log("The king moves exactly one vacant square in any direction: forwards, backwards, left, right, or diagonally;");
  break;
  case "queen":
    console.log("The queen moves any number of vacant squares in any direction: forwards, backwards, left, right, or diagonally, in a straight line.");
  break;
  case "rooks":
    console.log("The rook moves any number of vacant squares forwards, backwards, left, or right in a straight line.");
  break;
  case "bishops":
    console.log("The bishop moves any number of vacant squares diagonally in a straight line.");
  break;
  case "knights":
    console.log("The knight moves on an extended diagonal from one corner of any 2×3 rectangle of squares to the furthest opposite corner. ");
  break;
  case "pawns":
    console.log("The pawn moves forward exactly one square, or optionally, two squares when on its starting square, toward the opponent's side of the board.");
  break;
  }