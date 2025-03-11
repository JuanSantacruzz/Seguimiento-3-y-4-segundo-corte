function obtenerNumeroCopias() {
    let copias;
    while (true) {
        copias = parseInt(prompt("Ingrese el número de copias que desea imprimir:"));
        if (!isNaN(copias) && copias > 0) {
            return copias;
        }
        alert("❌ Por favor, ingrese un número válido de copias (mayor a 0).");
    }
}

function calcularCosto(copias) {
    let precioPorCopia;
    
    if (copias <= 499) {
        precioPorCopia = 120;
    } else if (copias >= 500 && copias <= 749) {
        precioPorCopia = 100;
    } else if (copias >= 750 && copias <= 999) {
        precioPorCopia = 80;
    } else {
        precioPorCopia = 50;
    }

    let costoTotal = precioPorCopia * copias;
    return { precioPorCopia, costoTotal };
}

function mostrarCosto() {
    let copias = obtenerNumeroCopias();
    let { precioPorCopia, costoTotal } = calcularCosto(copias);

    document.write(`
        <h3>📄 Resumen de Impresión</h3>
        <p>📌 Número de copias: <strong>${copias}</strong></p>
        <p>💰 Precio por copia: <strong>$${precioPorCopia}</strong></p>
        <p>🧾 Costo total: <strong>$${costoTotal}</strong></p>
    `);
}

mostrarCosto();
