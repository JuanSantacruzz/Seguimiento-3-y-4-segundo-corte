function esParOImpar() {
    let numero = parseInt(prompt("Ingrese un número:"));

    while (isNaN(numero)) {
        numero = parseInt(prompt("Entrada no válida. Ingrese un número válido:"));
    }

    let par, impar;

    if (numero % 2 === 0) {
        par = true;
        impar = false;
    } else if (numero % 2 !== 0) {
        par = false;
        impar = true;
    }

   alert (`Su número es ${par ? "par" : "impar"} 🎲 `);
}

esParOImpar();
