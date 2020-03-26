/* Faça um programa que retorne o maior de três números.
 Defina no começo do programa três variáveis com os valores que serão comparados.*/

let num1 = 4;
let num2 = 1;
let num3 = 9;

if (num1 > num2 && num1 > num3) {
    result = num1;
}
else if (num2 > num1 && num2 > num3) {
    result = num2;
}
else {
    result = num3;
}
 
console.log(result)