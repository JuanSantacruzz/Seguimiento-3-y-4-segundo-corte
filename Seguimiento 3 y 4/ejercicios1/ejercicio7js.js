function obtenerGenero() {
    let genero;
    while (true) {
        genero = prompt("Ingresa tu género: masculino/femenino").toLowerCase();
        if (genero === "masculino" || genero === "femenino") {
            return genero;
        }
        alert("Entrada no válida. Ingresa 'masculino' o 'femenino'.");
    }
}

function obtenerEdad() {
    let edad;
    while (true) {
        edad = parseInt(prompt("Ingresa tu edad"));
        if (!isNaN(edad) && edad > 0) {
            return edad;
        }
        alert("Por favor, ingresa una edad válida.");
    }
}

function calcularAyuda(genero, edad) {
    let ayuda = 0;

    if (genero === "masculino") {
        ayuda = 40000;
    } else if (genero === "femenino") {
        if (edad > 50) {
            ayuda = 120000;
        } else if (edad >= 30) {
            ayuda = 100000;
        }
    }

    return ayuda;
}

function mostrarResultado() {
    let genero = obtenerGenero();
    let edad = obtenerEdad();
    let ayuda = calcularAyuda(genero, edad);

    if (ayuda > 0) {
        alert(`El valor de tu ayuda mensual es $${ayuda}.`);
    } else {
        alert("No recibes ayuda mensual.");
    }
}

mostrarResultado();