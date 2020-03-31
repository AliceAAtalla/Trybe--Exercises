/*Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

Porcentagem >= 90 -> A

Porcentagem >= 80 -> B

Porcentagem >= 70 -> C

Porcentagem >= 60 -> D

Porcentagem >= 50 -> E

Porcentagem < 50 -> F

O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/

let notaAluno = 50;

if (notaAluno >= 90 && notaAluno <=100){
  console.log("Sua nota é A")
}else if (notaAluno < 90 && notaAluno >= 80){
  console.log("Sua nota é B")
}else if (notaAluno < 80 && notaAluno >= 70){
  console.log("Sua nota é C")
}else if (notaAluno < 70 && notaAluno >= 60){
  console.log("Sua nota é D")
}else if (notaAluno < 60 && notaAluno >= 50){
  console.log("Sua nota é E")
}else if (notaAluno < 50 && notaAluno >= 0) {
  console.log("Sua nota é F")
} else {
  console.log("Error")
}

