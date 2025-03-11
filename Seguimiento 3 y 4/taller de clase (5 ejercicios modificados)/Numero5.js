const esAnagrama = (str1, str2) => {
    if (typeof str1 !== "string" || typeof str2 !== "string") {
        return "Ambos valores deben ser cadenas de texto.";
    }

    const normalizar = str => str.toLowerCase().split("").sort().join("");

    return normalizar(str1) === normalizar(str2);
};

console.log(esAnagrama("roma", "amor"));  
console.log(esAnagrama("hola", "aloh"));  
console.log(esAnagrama("casa", "saco")); 
console.log(esAnagrama("anagrama", "granama")); 
console.log(esAnagrama("hola", 123));  
// Es la numero 9 "convertida"