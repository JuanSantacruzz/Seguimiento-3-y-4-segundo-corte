function obtenerDias() {
    let diasValidos = ["15", "30", "90"];
    let dias;

    while (true) {
        dias = prompt("Ingrese el número de días que paga en el gimnasio (15, 30 o 90):");
        if (diasValidos.includes(dias)) {
            return parseInt(dias);
        }
        alert("Duración no válida. Por favor, selecciona 15, 30 o 90 días.");
    }
}

function calcularMensualidad(dias) {
    let mensualidad = 0;

    if (dias === 90) {
        mensualidad = 86000;
    } else if (dias === 30) {
        mensualidad = 35000;
    } else if (dias === 15) {
        mensualidad = 18000;
    }

    return mensualidad;
}

function mostrarResultado() {
    let dias = obtenerDias();
    let mensualidad = calcularMensualidad(dias);

    alert(`Su mensualidad es de $${mensualidad}.`);
}

mostrarResultado();
