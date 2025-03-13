document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("firmaCanvas");
    const ctx = canvas.getContext("2d");
    const borrarBtn = document.getElementById("borrarFirma");
    let dibujando = false;

    // Ajustar tamaño del canvas
    function ajustarCanvas() {
        canvas.width = canvas.parentElement.clientWidth * 0.9;
        canvas.height = 200;
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ajustarCanvas();

    // Iniciar firma
    function iniciarFirma(event) {
        dibujando = true;
        ctx.beginPath();
        ctx.moveTo(event.offsetX || event.touches[0].clientX - canvas.offsetLeft,
                   event.offsetY || event.touches[0].clientY - canvas.offsetTop);
    }

    // Dibujar firma
    function dibujar(event) {
        if (!dibujando) return;
        ctx.lineTo(event.offsetX || event.touches[0].clientX - canvas.offsetLeft,
                   event.offsetY || event.touches[0].clientY - canvas.offsetTop);
        ctx.stroke();
    }

    // Finalizar firma
    function finalizarFirma() {
        dibujando = false;
        ctx.closePath();
    }

    // Borrar firma
    function borrarFirma() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Eventos del mouse y táctiles
    canvas.addEventListener("mousedown", iniciarFirma);
    canvas.addEventListener("mousemove", dibujar);
    canvas.addEventListener("mouseup", finalizarFirma);
    canvas.addEventListener("mouseleave", finalizarFirma);
    canvas.addEventListener("touchstart", iniciarFirma);
    canvas.addEventListener("touchmove", dibujar);
    canvas.addEventListener("touchend", finalizarFirma);
    borrarBtn.addEventListener("click", borrarFirma);
});