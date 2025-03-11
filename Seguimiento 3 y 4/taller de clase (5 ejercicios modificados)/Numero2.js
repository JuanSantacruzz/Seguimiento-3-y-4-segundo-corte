const restaDigitos = num => {
    const numString = Math.abs(num).toString();
    let resta = parseInt(numString[0]); 
    for (let i = 1; i < numString.length; i++) {
        const digito = parseInt(numString[i]);
        resta -= digito;
    }

    return resta;
};

console.log(restaDigitos(12345)); 
console.log(restaDigitos(-677)); 
console.log(restaDigitos(0));     
// Es la numero 3 "convertida"