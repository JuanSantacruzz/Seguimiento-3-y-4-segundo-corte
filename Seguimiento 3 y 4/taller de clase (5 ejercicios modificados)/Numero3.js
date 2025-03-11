const contarConsonantes = str => {
    str = str.toLowerCase();
    let consonantes = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char >= 'a' && char <= 'z' && !('aeiou'.includes(char))) {
            consonantes++;
        }
    }

    return consonantes;
};

console.log(contarConsonantes("Hola"));       
console.log(contarConsonantes("JavaScript")); 
console.log(contarConsonantes("xyz"));        
console.log(contarConsonantes("AeIOu"));      
// Es la numero 7 "convertida"