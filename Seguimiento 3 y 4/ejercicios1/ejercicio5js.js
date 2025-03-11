function calcularNota() {
    function obtenerNota(materia) {
        let nota;
        while (isNaN(nota) || nota < 0 || nota > 10) {
            nota = parseFloat(prompt(`Ingresa tu nota obtenida en ${materia} (0-10):`));
        }
        return nota;
    }

    let fisica = obtenerNota("Física");
    let quimica = obtenerNota("Química");
    let biologia = obtenerNota("Biología");
    let matematicas = obtenerNota("Matemáticas");
    let informatica = obtenerNota("Informática");

    let promedio = ((fisica + quimica + biologia + matematicas + informatica) / 50) * 100;

    let mensaje;
    if (promedio <= 59) {
        mensaje = "tu nota es mala 😔 ";
    } else if (promedio >= 60 && promedio <= 80) {
        mensaje = "tu nota es buena 😁 ";
    } else {
        mensaje = "tu nota es excelente 😎 ";
    }

    alert(`Tu porcentaje es: ${promedio.toFixed(2)}%. ${mensaje}.`);
}

calcularNota();
