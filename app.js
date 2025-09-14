document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("translateBtn");
  const text = document.getElementById("text");
  const output = document.getElementById("output");

  btn.addEventListener("click", () => {
    // Traducción simulada (ejemplo simple)
    const traducciones = {
      "Hola Mundo": "Hello World",
      "Hello World": "Hola Mundo"
    };

    const traducido = traducciones[text.innerText] || "Traducción no disponible";
    output.innerText = traducido;
  });
});
