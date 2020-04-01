// Agora inverta o lado do triângulo. Por exemplo:

let n = 5;
let padrao = "";
let position = n;
let symbol = "*";

for (let linha = 1; linha < n; linha +=1) {
        for (let j = 0 ; j <= n; j+=1){
            if (j < position) {
                padrao += " ";
            } else{
            padrao += symbol;   
        }
    }   position -= 1;
        console.log(padrao);
        padrao = "";
}
