document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del botón
            const targetUrl = button.getAttribute("onclick").match(/'([^']+)'/)[1]; // Extrae la URL del onclick

            // Aplica la animación de desvanecimiento
            document.body.classList.add("fade-out");

            // Cambia de página después de la animación
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); // 500ms = duración de la animación
        });
    });
});