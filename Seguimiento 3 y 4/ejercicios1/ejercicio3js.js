function calcularCostoAlquiler() {
    let tipoLavadora;
    let cantidad;
    let horas;

    while (true) {
        tipoLavadora = prompt("Ingrese el tipo de lavadora (1 = grande, 2 = pequeña):");
        if (tipoLavadora === "1" || tipoLavadora === "2") {
            break;
        } else {
            alert("Entrada no válida. Ingrese 1 para lavadora grande o 2 para lavadora pequeña.");
        }
    }

    while (true) {
        cantidad = parseInt(prompt("¿Cuántas lavadoras desea alquilar?"));
        if (!isNaN(cantidad) && cantidad > 0) {
            break;
        } else {
            alert("Por favor, ingrese un número válido mayor a 0.");
        }
    }

    while (true) {
        horas = parseInt(prompt("¿Cuántas horas usará las lavadoras?"));
        if (!isNaN(horas) && horas > 0) {
            break;
        } else {
            alert("Por favor, ingrese un número válido mayor a 0.");
        }
    }

    let costoPorLavadora;
    if (tipoLavadora === "1") {
        costoPorLavadora = 4000;
    } else if (tipoLavadora === "2") {
        costoPorLavadora = 3000;
    }

    let costoTotal = cantidad * horas * costoPorLavadora;

    if (cantidad > 3) {
        costoTotal *= 0.97;
    }

    alert(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas} horas: $${costoTotal.toFixed(2)} 🤑 `);
}

calcularCostoAlquiler();