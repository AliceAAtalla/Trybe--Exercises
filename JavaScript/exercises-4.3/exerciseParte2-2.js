function maiorNum(array) {
    let maiorNumero = 0;

    for (let indice in array) {
        if (array[maiorNumero] < array[indice]) {
            maiorNumero = indice;
        }
    }
    return maiorNumero;
}

console.log(maiorNum([2, 3, 6, 7, 10, 1]));
