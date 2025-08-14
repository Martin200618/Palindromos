function esPalindromo(texto) {
    let limpio = texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "");

    let invertido = limpio.split("").reverse().join("");

    return limpio === invertido;
}

function verificar() {
    const texto = document.getElementById("texto").value;
    const resultado = document.getElementById("resultado");

    if (texto.trim() === "") {
        resultado.textContent = "Por favor, escribe algo.";
        resultado.style.color = "red";
        return;
    }

    if (esPalindromo(texto)) {
        resultado.textContent = "✅ Es un palíndromo";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "❌ No es un palíndromo";
        resultado.style.color = "red";
    }
}
