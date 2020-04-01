/*Escreva um programa que defina três números 
em variáveis no seu começo e retorne true se 
uma das três for ímpar. Caso contrário, ele 
retorna false.

Bonus: use somente um if.*/

let num1 = 9;
let num2 = 6;
let num3 = 2;

let isOdd = false;

if(num1 % 2 === 1 || num2 % 2 === 1 || num3 % 2 === 1){
  isOdd = true;
}

console.log(isOdd)
