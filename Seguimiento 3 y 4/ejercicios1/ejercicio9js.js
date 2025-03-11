function obtenerAngulo(mensaje) {
    let angulo;
    while (true) {
        angulo = parseInt(prompt(mensaje));
        if (!isNaN(angulo) && angulo > 0) {
            return angulo;
        }
        alert("Por favor, ingresa un número entero positivo.");
    }
}

function esTrianguloValido(a1, a2, a3) {
    return a1 + a2 + a3 === 180;
}

function verificarTriangulo() {
    let angulo1 = obtenerAngulo("Ingresa el primer ángulo:");
    let angulo2 = obtenerAngulo("Ingresa el segundo ángulo:");
    let angulo3 = obtenerAngulo("Ingresa el tercer ángulo:");

    if (esTrianguloValido(angulo1, angulo2, angulo3)) {
        alert(`✅ Tu triángulo es válido. La suma de los ángulos es 180°.`);
    } else {
        alert(`❌ Tu triángulo es inválido. La suma de los ángulos es ${angulo1 + angulo2 + angulo3}°, y no 180°.`);
    }
}

verificarTriangulo();
