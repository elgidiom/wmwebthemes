function updateColor(property, value) {
  document.documentElement.style.setProperty(property, value);
}

document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('contenthunter');

    // Cargar el archivo HTML externo
    fetch('hunter.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar el archivo: ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            contentDiv.innerHTML = html; // Insertar el contenido en el div
        })
        .catch(error => {
            console.error('Error al insertar el contenido:', error);
        });
});
