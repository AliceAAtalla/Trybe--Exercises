function menorNum(array) {
    let menorNumero = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < menorNumero) {
            menorNumero = i;
            return menorNumero;
        }
    }
}

console.log(menorNum([2, 4, 6, 7, 10, 0, -3]));
