document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');

    // Verifica si el navegador soporta getUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Solicita acceso a la cámara
        navigator.mediaDevices.getUserMedia({ video: true })
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