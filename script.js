function removeFromArray(array, item) {
    const resultado = array.filter(element => element !== item);
    console.log(resultado);
}

const array = [1, 2, 3, 4, 2, 5];
removeFromArray(array, 2);