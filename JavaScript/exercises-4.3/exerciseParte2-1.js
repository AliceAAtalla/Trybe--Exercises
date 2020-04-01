function verificaPalindromo(palavra) {
	let arrayLetras = palavra.split('');
	let isPalindrome = true;
	for (let i in arrayLetras) {
		if (arrayLetras[i] !== arrayLetras[(arrayLetras.length - 1) - i]) {
			isPalindrome = false;
		}

		if (i <= arrayLetras.length / 2 + 1) {
			break;
		}
	}
	return isPalindrome;
}

console.log(verificaPalindromo("arara"));
