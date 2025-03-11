function obtenerRespuesta(pregunta) {
    let respuesta;
    while (true) {
        respuesta = prompt(pregunta + " (si/no)").toLowerCase();
        if (respuesta === "si" || respuesta === "no") {
            return respuesta;
        }
        alert("❌ Respuesta inválida. Por favor, ingrese 'si' o 'no'.");
    }
}

function verificarEstadoComputadora() { 
    let emitePitido = obtenerRespuesta("¿La computadora emite un pitido al iniciarse?");
    let discoDuroGira = obtenerRespuesta("¿El disco duro gira?");
    
    let mensaje;

    if (emitePitido === "si" && discoDuroGira === "si") {
        mensaje = "🔧 Póngase en contacto con el técnico de apoyo.";
    } else if (emitePitido === "si" && discoDuroGira === "no") {
        mensaje = "⚙️ Verifique los contactos de la unidad.";
    } else if (emitePitido === "no" && discoDuroGira === "si") {
        mensaje = "🔊 Compruebe las conexiones de los altavoces.";
    } else {
        mensaje = "🛠️ Traiga la computadora para repararla en la central.";
    }

    alert(mensaje);
}

verificarEstadoComputadora();
