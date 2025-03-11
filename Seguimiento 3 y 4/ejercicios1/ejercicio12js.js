function obtenerModelo() {
    let modelo;
    while (true) {
        modelo = prompt("Ingrese el número de modelo de su auto: ");
        
        if (!isNaN(modelo) && modelo.trim() !== "") {
            return parseInt(modelo); 
        }

        alert("❌ Entrada inválida. Por favor, ingrese un número de modelo válido.");
    }
}

function verificarDefecto(modelo) {
    const modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];

    if (modelosDefectuosos.includes(modelo)) {
        alert("⚠️ El automóvil está defectuoso, llevar a garantía.");
    } else {
        alert("✅ Su automóvil NO está defectuoso.");
    }
}

let modeloIngresado = obtenerModelo();
verificarDefecto(modeloIngresado);
