document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('qr-video');
    const qrResult = document.getElementById('qr-result');

    let scanner = new Instascan.Scanner({ video: video });

    scanner.addListener('scan', function(content) {
        // Guardar los datos del QR en localStorage para usarlos en la siguiente página
        localStorage.setItem('qrData', content);
        window.location.href = 'qr-data.html';
    });

    Instascan.Camera.getCameras().then(function(cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]); // Usar la cámara trasera por defecto
        } else {
            console.error('No se encontraron cámaras.');
        }
    }).catch(function(e) {
        console.error(e);
    });
});