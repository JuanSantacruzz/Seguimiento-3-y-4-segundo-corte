const calcularRaiz = (base, indice) => {
    if (!Number.isInteger(base) || !Number.isInteger(indice) || indice <= 0) {
        return "Ambos números deben ser enteros positivos.";
    }
    
    if (base < 0 && indice % 2 === 0) {
        return "No se puede calcular la raíz de un número negativo con índice par.";
    }

    let resultado = 1;
    let aproximacion = base / 2; 
    
    for (let i = 0; i < 20; i++) { 
        aproximacion = (1 / indice) * ((indice - 1) * aproximacion + base / Math.pow(aproximacion, indice - 1));
    }

    return aproximacion;
};

console.log(calcularRaiz(8, 3));  
console.log(calcularRaiz(25, 2)); 
console.log(calcularRaiz(-8, 3)); 
console.log(calcularRaiz(-8, 2)); 
console.log(calcularRaiz(3.5, 2));
// Es la numero 8 "convertida"