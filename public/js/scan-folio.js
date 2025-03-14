document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');

    // Verifica si el navegador soporta getUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Especifica las restricciones para usar la cámara trasera
        const constraints = {
            video: {
                facingMode: "environment" // Usa la cámara trasera
            }
        };

        // Solicita acceso a la cámara
        navigator.mediaDevices.getUserMedia(constraints)
            .then(function(stream) {
                // Asigna la transmisión de la cámara al elemento <video>
                video.srcObject = stream;
                video.play();
            })
            .catch(function(error) {
                console.error("Error al acceder a la cámara: ", error);
            });
    } else {
        console.error("getUserMedia no es soportado en este navegador.");
    }
});
