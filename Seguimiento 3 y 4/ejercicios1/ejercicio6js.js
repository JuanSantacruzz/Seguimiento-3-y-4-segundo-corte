function obtenerNumero(mensaje) {
    let numero;
    while (isNaN(numero) || numero === null || numero === "") {
        numero = parseFloat(prompt(mensaje));
    }
    return numero;
}

function encontrarMayor() {
    let numero1 = obtenerNumero("Ingrese el primer número:");
    let numero2 = obtenerNumero("Ingrese el segundo número:");
    let numero3 = obtenerNumero("Ingrese el tercer número:");

    let numeroMayor;

    if (numero1 > numero2 && numero1 > numero3) {
        numeroMayor = numero1;
    } else if (numero2 > numero1 && numero2 > numero3) {
        numeroMayor = numero2;
    } else if (numero3 > numero1 && numero3 > numero2) {
        numeroMayor = numero3;
    } else {
        alert("Hay números iguales, por favor ingrese valores distintos.");
        return encontrarMayor();
    }

    alert(`El número mayor es: ${numeroMayor}`);
}

encontrarMayor();