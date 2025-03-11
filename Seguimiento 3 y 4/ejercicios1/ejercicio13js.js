function obtenerOperador() {
    let operador;
    while (true) {
        operador = prompt("Seleccione su operador (Claro, Tigo, Movistar):").trim().toLowerCase();
        
        if (operador === "claro" || operador === "tigo" || operador === "movistar") {
            return operador;
        }

        alert("❌ Operador no válido. Por favor, elige entre Claro, Tigo o Movistar.");
    }
}

function obtenerMinutos() {
    let minutos;
    while (true) {
        minutos = prompt("Ingrese la cantidad de minutos internacionales consumidos:");

        if (!isNaN(minutos) && minutos.trim() !== "" && parseInt(minutos) >= 0) {
            return parseInt(minutos);
        }

        alert("❌ Entrada inválida. Por favor, ingrese un número válido de minutos.");
    }
}

function calcularCosto(operador, minutosInternacionales) {
    let cargoFijo, valorMinuto, valorPaqueteDatos;

    if (operador === "tigo") {
        cargoFijo = 45000;
        valorMinuto = 200;
        valorPaqueteDatos = 12000;
    } else if (operador === "claro") {
        cargoFijo = 30000;
        valorMinuto = 100;
        valorPaqueteDatos = 18000;
    } else if (operador === "movistar") {
        cargoFijo = 40000;
        valorMinuto = 250;
        valorPaqueteDatos = 8000;
    }

    let costoMinutos = minutosInternacionales * valorMinuto;
    let costoTotal = cargoFijo + costoMinutos;

    alert(`📞 El costo total para el operador ${operador.charAt(0).toUpperCase() + operador.slice(1)} es: 💰 $${costoTotal}`);
}

let operadorIngresado = obtenerOperador();
let minutosIngresados = obtenerMinutos();
calcularCosto(operadorIngresado, minutosIngresados);
