function theLargestIs(array) {
    let result = array[0];
    for (let indice in array) {
        if (array[indice].length > result.length) {
            result = array[indice]
        }
    }
    return result;

}

console.log(theLargestIs(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
