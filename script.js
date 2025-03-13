let peliculaSeleccionada = null;
let asientosSeleccionados = [];

function siguienteVentana(numeroVentana) {
    document.querySelectorAll('.ventana').forEach(ventana => {
        ventana.classList.remove('activa');
    });
    document.getElementById(`ventana${numeroVentana}`).classList.add('activa');

    if (numeroVentana === 2) {
        generarAsientos();
    } else if (numeroVentana === 3) {
        mostrarResumen();
    }
}

function generarAsientos() {
    const asientosContainer = document.getElementById('asientos');
    asientosContainer.innerHTML = '';
    for (let i = 1; i <= 20; i++) {
        const asiento = document.createElement('div');
        asiento.classList.add('asiento');
        asiento.innerText = i;
        asiento.addEventListener('click', () => seleccionarAsiento(i, asiento));
        asientosContainer.appendChild(asiento);
    }
}

function seleccionarAsiento(numeroAsiento, elemento) {
    const index = asientosSeleccionados.indexOf(numeroAsiento);
    if (index === -1) {
        asientosSeleccionados.push(numeroAsiento);
        elemento.classList.add('seleccionado');
    } else {
        asientosSeleccionados.splice(index, 1);
        elemento.classList.remove('seleccionado');
    }
}

function mostrarResumen() {
    const pelicula = document.getElementById('peliculas').selectedOptions[0].text;
    const total = asientosSeleccionados.length * parseInt(document.getElementById('peliculas').value);
    document.getElementById('resumen').innerHTML = `
        <p>Película: ${pelicula}</p>
        <p>Asientos: ${asientosSeleccionados.join(', ')}</p>
        <p>Total: $${total}</p>
    `;
}

function confirmarCompra() {
    alert('Compra confirmada! Gracias por su compra.');
    asientosSeleccionados = [];
    siguienteVentana(1);
}