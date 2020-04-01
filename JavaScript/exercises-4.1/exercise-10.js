/*Escreva um programa que, dado o custo de um produto e seu valor de venda, calcule quanto de lucro 
(em números absolutos) a empresa terá ao vender mil desses produtos.

Atente que, sobre o custo do produto, incide um imposto de 20% que deve ser considerado no cálculo do 
lucro.

Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada 
seja menor que zero. */

let custoProduto = 100;
let valorVenda = 0;
let quantidadeProduto = 1000;

if (custoProduto > 0 && valorVenda > 0){
  let lucro = (custoProduto + valorVenda) * 0.80;
  lucro *= quantidadeProduto
  console.log(lucro)
} else if(custoProduto <= 0 || valorVenda <= 0){
  console.log("Error")
}

