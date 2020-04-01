function valorMaisRepetido(numeros) {
	let valorDeRepeticao = 0;
	let numeroContado = 0;
	let indexNumeroRepetido = 0;
	for (let index in numeros) {
		let verificaNumero = numeros[index];
		for (let index2 in numeros) {
			if (verificaNumero === numeros[index2]) {
				numeroContado += 1;
			}
		}
	}
	return numeros[indexNumeroRepetido];
}

console.log(valorMaisRepetido([2, 3, 2, 5, 8, 2, 3]));
