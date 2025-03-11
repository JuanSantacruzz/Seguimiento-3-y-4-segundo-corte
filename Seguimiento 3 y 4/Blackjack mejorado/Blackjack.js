function sacarCarta() {
    return Math.floor(Math.random() * 10) + 1;
}

function verificarGanador(puntosJugador1, puntosJugador2) {
    if (puntosJugador1 > 21 && puntosJugador2 > 21) {
        console.log("❌ Ambos jugadores se pasaron de 21. ¡Empate final!");
    } else if (puntosJugador1 > 21) {
        console.log("❌ Jugador 1 se pasó de 21. ¡Jugador 2 gana!");
    } else if (puntosJugador2 > 21) {
        console.log("❌ Jugador 2 se pasó de 21. ¡Jugador 1 gana!");
    } else if (puntosJugador1 > puntosJugador2) {
        console.log("🏆 ¡Jugador 1 gana con " + puntosJugador1 + " puntos!");
    } else if (puntosJugador2 > puntosJugador1) {
        console.log("🏆 ¡Jugador 2 gana con " + puntosJugador2 + " puntos!");
    } else {
        console.log("🤝 ¡Empate final!");
    }
}

function jugarBlackjack() {
    let puntosJugador1 = sacarCarta();
    let puntosJugador2 = sacarCarta();

    console.log("🎲 Ronda 1:");
    console.log("Jugador 1: " + puntosJugador1);
    console.log("Jugador 2: " + puntosJugador2);

    let ronda = 2;
    while (ronda <= 3) {
        console.log(`🎲 Ronda ${ronda}:`);

        let nuevaCartaJugador1 = sacarCarta();
        let nuevaCartaJugador2 = sacarCarta();

        puntosJugador1 += nuevaCartaJugador1;
        puntosJugador2 += nuevaCartaJugador2;

        console.log("Jugador 1 saca: " + nuevaCartaJugador1 + " | Total: " + puntosJugador1);
        console.log("Jugador 2 saca: " + nuevaCartaJugador2 + " | Total: " + puntosJugador2);

        if (puntosJugador1 > 21 || puntosJugador2 > 21) {
            verificarGanador(puntosJugador1, puntosJugador2);
            return;
        }
        
        ronda++;
    }

    verificarGanador(puntosJugador1, puntosJugador2);
}

jugarBlackjack();
