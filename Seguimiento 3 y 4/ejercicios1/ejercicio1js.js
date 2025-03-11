function calcularSalario() {
    let nombre = prompt("Ingresa tu nombre:");
    let horas = prompt("Ingresa tus horas trabajadas:");
    
    horas = parseInt(horas);

    while (isNaN(horas) || horas <= 0) {
        horas = parseInt(prompt("Por favor, ingresa un número válido de horas trabajadas:"));
    }

    let salario;

    if (horas <= 10) {
        salario = horas * 30000;
    } else if (horas > 10) {
        salario = horas * 33000;
    }

    alert(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a $${salario} 💷 `);
}

calcularSalario();
